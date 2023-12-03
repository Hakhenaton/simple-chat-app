package fr.sncf.d2d.serversideapp.messaging.channels;

import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

import fr.sncf.d2d.serversideapp.users.models.User;
import lombok.Builder;
import lombok.Getter;
import lombok.ToString;

@Getter
@Builder
@ToString
public class ChannelState {
    
    private final Set<User> users;

    private final long totalConnections;

    public static ChannelState fromChannel(Channel channel){
        final var allConnectedUsers = channel.clients()
            .values()
            .stream()
            .filter(client -> client.getUser().isPresent())
            .map(ConnectedClient::getUser)
            .map(Optional::get)
            .collect(Collectors.toUnmodifiableSet());

        return ChannelState.builder()
            .users(allConnectedUsers)
            .totalConnections(channel.clients().size())
            .build();
    }
}
