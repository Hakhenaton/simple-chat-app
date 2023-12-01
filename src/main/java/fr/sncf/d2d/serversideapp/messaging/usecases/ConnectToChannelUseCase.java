package fr.sncf.d2d.serversideapp.messaging.usecases;

import java.io.IOException;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import fr.sncf.d2d.serversideapp.messaging.channels.ChannelState;
import fr.sncf.d2d.serversideapp.messaging.channels.ChannelsRepository;
import fr.sncf.d2d.serversideapp.messaging.channels.ConnectedClient;
import fr.sncf.d2d.serversideapp.messaging.channels.Connection;
import fr.sncf.d2d.serversideapp.messaging.configuration.MessagingConfiguration;
import fr.sncf.d2d.serversideapp.messaging.exceptions.ChannelNotFoundException;
import fr.sncf.d2d.serversideapp.security.services.AuthenticationService;
import lombok.RequiredArgsConstructor;

@Service
public class ConnectToChannelUseCase {

    private final ChannelsRepository channelsRepository;
    private final AuthenticationService authenticationService;
    
    public ConnectToChannelUseCase(
        ChannelsRepository channelsRepository,
        @Qualifier(MessagingConfiguration.WS_AUTHENTICATION_SERVICE) 
        AuthenticationService authenticationService
    ) {
        this.channelsRepository = channelsRepository;
        this.authenticationService = authenticationService;
    }

    public UUID connect(UUID channelId, Connection connection) throws ChannelNotFoundException, IOException {

        final var channel = this.channelsRepository.getChannel(channelId)
            .orElseThrow(ChannelNotFoundException::new);

        final var connectedClientBuilder = ConnectedClient.builder()
            .connection(connection);

        connection.sendState(ChannelState.builder().build());

        this.authenticationService.currentUser()
            .ifPresent(connectedClientBuilder::user);

        final var clientId = channel.add(connectedClientBuilder.build());

        final var state = ChannelState.fromChannel(channel);

        for (final var client: channel.clients().values())
            client.getConnection().sendState(state);

        return clientId;
    }
}
