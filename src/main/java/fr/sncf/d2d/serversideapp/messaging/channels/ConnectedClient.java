package fr.sncf.d2d.serversideapp.messaging.channels;

import java.util.Optional;

import fr.sncf.d2d.serversideapp.users.models.User;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NonNull;

@Builder
@Getter
public class ConnectedClient {
    
    @Getter(value = AccessLevel.NONE)
    private final User user;

    public Optional<User> getUser(){
        return Optional.ofNullable(this.user);
    }

    @NonNull
    private final Connection connection;
}
