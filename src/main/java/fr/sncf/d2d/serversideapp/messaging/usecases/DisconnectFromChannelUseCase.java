package fr.sncf.d2d.serversideapp.messaging.usecases;

import java.io.IOException;
import java.util.UUID;

import org.springframework.stereotype.Service;

import fr.sncf.d2d.serversideapp.messaging.channels.ChannelState;
import fr.sncf.d2d.serversideapp.messaging.channels.ChannelsRepository;
import fr.sncf.d2d.serversideapp.messaging.exceptions.ChannelNotFoundException;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class DisconnectFromChannelUseCase {
    
    private final ChannelsRepository channelsRepository;

    public void disconnect(UUID channelId, UUID clientId) throws ChannelNotFoundException, IOException {
        
        final var channel = this.channelsRepository.getChannel(channelId)
            .orElseThrow(ChannelNotFoundException::new);

        channel.remove(clientId);

        final var state = ChannelState.fromChannel(channel);

        for (final var client: channel.clients().values())
            client.getConnection().sendState(state);
    }
}
