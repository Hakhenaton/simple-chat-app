package fr.sncf.d2d.serversideapp.messaging.channels;

import java.util.Collections;
import java.util.Map;
import java.util.Optional;
import java.util.UUID;

import org.springframework.stereotype.Repository;

@Repository
public class GlobalChannelRepository implements ChannelsRepository {

    private static final Map<UUID, Channel> CHANNELS = Collections.singletonMap(
        UUID.fromString("8abfc578-8dfe-11ee-8545-00155dc23879"),
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
