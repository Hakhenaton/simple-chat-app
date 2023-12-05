package fr.sncf.d2d.serversideapp.messaging.usecases;

import java.io.IOException;
import java.util.UUID;

import org.springframework.stereotype.Service;

import fr.sncf.d2d.serversideapp.messaging.channels.exceptions.ChannelNotFoundException;
import fr.sncf.d2d.serversideapp.messaging.channels.models.ChannelConnectedClientsState;
import fr.sncf.d2d.serversideapp.messaging.channels.persistence.ChannelsRepository;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class DisconnectFromChannelUseCase {
    
    private final ChannelsRepository channelsRepository;

    public void disconnect(UUID channelId, UUID clientId) throws ChannelNotFoundException, IOException {
        
        final var channel = this.channelsRepository.findById(channelId)
            .orElseThrow(ChannelNotFoundException::new);

        channel.remove(clientId);

        final var state = ChannelConnectedClientsState.fromChannel(channel);

        for (final var client: channel.clients().values())
            client.getEventHandlers().getOnClientConnectionsState().handle(state);
    }
}
