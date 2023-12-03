package fr.sncf.d2d.serversideapp.users.persistence;

import java.util.Optional;
import fr.sncf.d2d.serversideapp.users.models.User;

public interface UsersRepository {

    void save(User user);

    Optional<User> findByUsername(String username);
}
