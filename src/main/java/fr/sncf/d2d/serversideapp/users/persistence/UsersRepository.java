package fr.sncf.d2d.serversideapp.users.persistence;

import java.util.Collections;
import java.util.Map;
import java.util.Optional;
import java.util.UUID;

import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

import fr.sncf.d2d.serversideapp.users.models.Role;
import fr.sncf.d2d.serversideapp.users.models.User;
import lombok.RequiredArgsConstructor;

@Repository
@RequiredArgsConstructor
public class UsersRepository {

    private final NamedParameterJdbcTemplate jdbcTemplate;
    
    private final RowMapper<User> rowMapper = (resultSet, i) -> {
        return User.builder()
            .id(UUID.fromString(resultSet.getString("id")))
            .username(resultSet.getString("username"))
            .password(resultSet.getString("password"))
            .role(Role.valueOf(resultSet.getString("role")))
            .build();
    };

    public void save(User user){

        user.setId(UUID.randomUUID());
        
        this.jdbcTemplate.update(
            "INSERT INTO users (id, username, password, role) VALUES (:id, :username, :password, :role)", 
            Map.of(
                "id", user.getId(),
                "username", user.getUsername(),
                "password", user.getPassword(),
                "role", user.getRole().name()
            )
        );
    }

    public Optional<User> findByUsername(String username){
        try {
            return Optional.of(this.jdbcTemplate.queryForObject(
                "SELECT * FROM users WHERE username = :username", 
                Collections.singletonMap("username", username), 
                this.rowMapper
            ));
        } catch (EmptyResultDataAccessException notFound){
            return Optional.empty();
        }
    }
}
