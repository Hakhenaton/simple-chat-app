package fr.sncf.d2d.serversideapp.messaging.channels;

import java.util.List;
import java.util.Optional;

import fr.sncf.d2d.serversideapp.users.models.User;
import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class ChannelState {
    
    private final List<User> users;

    private final long totalConnections;

    public static ChannelState fromChannel(Channel channel){
        final var allConnectedUsers = channel.clients()
            .values()
            .stream()
            .filter(client -> client.getUser().isPresent())
            .map(ConnectedClient::getUser)
            .map(Optional::get)
            .toList();

        return ChannelState.builder()
            .users(allConnectedUsers)
            .totalConnections(channel.clients().size())
            .build();
    }
}
