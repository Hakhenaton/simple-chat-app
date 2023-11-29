package fr.sncf.d2d.serversideapp.messaging.channels;

import java.util.Collections;
import java.util.Map;
import java.util.Optional;
import java.util.UUID;

import org.springframework.stereotype.Repository;

/**
 * Un repository qui n'a qu'un seul channel global avec un identifiant en dur.
 */
@Repository
public class GlobalChannelRepository implements ChannelsRepository {

    public static final UUID GLOBAL_CHANNEL_ID = UUID.fromString("8abfc578-8dfe-11ee-8545-00155dc23879");

    private static final Map<UUID, Channel> CHANNELS = Collections.singletonMap(
        GLOBAL_CHANNEL_ID,
        new InMemoryChannel()
    );

    @Override
    public Map<UUID, Channel> getAllChannels() {
        return CHANNELS;
    }

    @Override
    public Optional<Channel> getChannel(UUID channelId) {
        return Optional.ofNullable(CHANNELS.get(channelId));
    }
}
