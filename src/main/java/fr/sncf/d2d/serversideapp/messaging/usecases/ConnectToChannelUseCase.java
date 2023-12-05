package fr.sncf.d2d.serversideapp.messaging.usecases;

import java.io.IOException;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import fr.sncf.d2d.serversideapp.messaging.channels.events.ChannelEventsHandlers;
import fr.sncf.d2d.serversideapp.messaging.channels.exceptions.ChannelNotFoundException;
import fr.sncf.d2d.serversideapp.messaging.channels.models.ChannelConnectedClientsState;
import fr.sncf.d2d.serversideapp.messaging.channels.models.ConnectedClient;
import fr.sncf.d2d.serversideapp.messaging.channels.persistence.ChannelsRepository;
import fr.sncf.d2d.serversideapp.security.services.AuthenticationService;
import fr.sncf.d2d.serversideapp.security.services.WebSocketSessionAuthenticationService;

@Service
public class ConnectToChannelUseCase {

    private final ChannelsRepository channelsRepository;

    private final AuthenticationService authenticationService;

    public ConnectToChannelUseCase(ChannelsRepository channelsRepository, 
        @Qualifier(WebSocketSessionAuthenticationService.BEAN_NAME)
        AuthenticationService authenticationService) {
        this.channelsRepository = channelsRepository;
        this.authenticationService = authenticationService;
    }

    public UUID connect(UUID channelId, ChannelEventsHandlers eventHandlers) throws ChannelNotFoundException, IOException {

        final var channel = this.channelsRepository.findById(channelId)
            .orElseThrow(ChannelNotFoundException::new);

        final var connectedClientBuilder = ConnectedClient.builder()
            .eventHandlers(eventHandlers);

        this.authenticationService.currentUser()
            .ifPresent(connectedClientBuilder::user);

        final var connectedClient = connectedClientBuilder.build();

        final var clientId = channel.add(connectedClient);

        final var state = ChannelConnectedClientsState.fromChannel(channel);

        for (final var client: channel.clients().values())
            client.getEventHandlers().getOnClientConnectionsState().handle(state);

        return clientId;
    }
}
