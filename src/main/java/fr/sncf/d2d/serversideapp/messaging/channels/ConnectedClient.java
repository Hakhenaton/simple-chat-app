package fr.sncf.d2d.serversideapp.messaging.channels;

import fr.sncf.d2d.serversideapp.users.models.User;
import lombok.Builder;
import lombok.Getter;

@Builder
@Getter
public class ConnectedClient {
    
    private final User user;

    private final Connection connection;
}
