package fr.sncf.d2d.serversideapp.messaging.usecases;

import java.io.IOException;
import java.util.UUID;

import org.springframework.security.access.AccessDeniedException;
import org.springframework.stereotype.Service;

import fr.sncf.d2d.serversideapp.messaging.channels.ChannelsRepository;
import fr.sncf.d2d.serversideapp.messaging.channels.ConnectedClient;
import fr.sncf.d2d.serversideapp.messaging.channels.Connection;
import fr.sncf.d2d.serversideapp.messaging.exceptions.ChannelNotFoundException;
import fr.sncf.d2d.serversideapp.security.service.AuthenticationService;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ConnectToChannelUseCase {

    private final ChannelsRepository channelsRepository;
    private final AuthenticationService authenticationService;
    
    public UUID connect(UUID channelId, Connection connection) throws ChannelNotFoundException, IOException {

        final var user = this.authenticationService.currentUser()
            .orElseThrow(() -> new AccessDeniedException("authentication is required"));

        final var channel = this.channelsRepository.getChannel(channelId)
            .orElseThrow(ChannelNotFoundException::new);

        final var clientId = channel.add(
            ConnectedClient.builder()
                .connection(connection)
                .user(user)
                .build()
        );

        for (final var client: channel.clients().entrySet()){
            final var id = client.getKey();
            if (id.equals(clientId))
                continue;
            final var otherClient = client.getValue();
            otherClient.getConnection().notifyConnect(user);
        }

        return clientId;
    }
}
