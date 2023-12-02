package fr.sncf.d2d.serversideapp.messaging.persistence;

import java.util.Optional;
import java.util.UUID;
import java.util.stream.Stream;

import fr.sncf.d2d.serversideapp.messaging.channels.Message;

public interface MessagesRepository {
    
    Stream<Message> streamMessages(UUID channelId, long max, long offset);

    void save(Message message);

    void markDeleted(Message message);

    Optional<Message> findById(UUID messageId);
}
