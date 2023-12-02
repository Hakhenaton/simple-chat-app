package fr.sncf.d2d.serversideapp.messaging.persistence;

import java.util.Collections;
import java.util.Date;
import java.util.Map;
import java.util.Optional;
import java.util.UUID;
import java.util.stream.Stream;

import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

import fr.sncf.d2d.serversideapp.messaging.channels.Message;
import lombok.RequiredArgsConstructor;

@Repository
@RequiredArgsConstructor
public class JdbcMessagesRepository implements MessagesRepository {

    private final NamedParameterJdbcTemplate jdbcTemplate;

    private static final RowMapper<Message> ROW_MAPPER = (resultSet, n) -> Message.builder()
        .id(UUID.fromString(resultSet.getString("id")))
        .authorId(UUID.fromString(resultSet.getString("author_id")))
        .content(resultSet.getString("content"))
        .isDeleted(resultSet.getBoolean("is_deleted"))
        .channelId(UUID.fromString(resultSet.getString("channel_id")))
        .sentAt(Date.from(resultSet.getTimestamp("sent_at").toInstant()))
        .build();

    @Override
    public Stream<Message> streamMessages(UUID channelId, long max, long offset) {
        return this.jdbcTemplate.queryForStream(
            "SELECT id, content, sent_at, author_id, channel_id FROM messages WHERE channel_id = :channelId " + 
            "ORDER BY send_at ASC " + 
            "OFFSET :offset LIMIT :limit", 
            Map.of(
                "channelId", channelId,
                "limit", max,
                "offset", offset
            ), 
            ROW_MAPPER
        );
    }

    @Override
    public void save(Message message) {
        message.setId(UUID.randomUUID());
        final var result = this.jdbcTemplate.update(
            "INSERT INTO messages (id, content, sent_at, author_id, channel_id, is_deleted) " + 
            "VALUES (:id, :content, :sentAt, :authorId, :channelId, 0)",
            Map.of(
                "id", message.getId().toString(),
                "content", message.getContent(),
                "sentAt", message.getSentAt(),
                "authorId", message.getAuthorId(),
                "channelId", message.getChannelId()
            )
        );
        assert result == 1;
    }
    
    @Override
    public void markDeleted(Message message) {
        final var result = this.jdbcTemplate.update(
            "UPDATE messages SET is_deleted = 1 WHERE id = :id",
            Collections.singletonMap("id", message.getId().toString())
        );
        assert result == 1;
    }

    @Override
    public Optional<Message> findById(UUID messageId) {
        try {
            return Optional.of(this.jdbcTemplate.queryForObject(
                "SELECT id, content, sent_at, author_id, channel_id FROM messages WHERE id = :id", 
                Collections.singletonMap("id", messageId.toString()), 
                ROW_MAPPER
            ));
        } catch (EmptyResultDataAccessException empty){
            return Optional.empty();
        }
    }
}
