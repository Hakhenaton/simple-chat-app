package fr.sncf.d2d.serversideapp.messaging.channels;

import java.util.Map;
import java.util.Optional;
import java.util.UUID;

public interface ChannelsRepository {

    Map<UUID, ? extends Channel> getAllChannels();

    Optional<Channel> findById(UUID channelId);
}
