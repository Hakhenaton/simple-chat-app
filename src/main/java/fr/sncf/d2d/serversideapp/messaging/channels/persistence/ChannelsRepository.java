package fr.sncf.d2d.serversideapp.messaging.channels.persistence;

import java.util.Map;
import java.util.Optional;
import java.util.UUID;

import fr.sncf.d2d.serversideapp.messaging.channels.models.Channel;

/** Stockage des canaux de communication */
public interface ChannelsRepository {

    Map<UUID, ? extends Channel> getAllChannels();

    Optional<Channel> findById(UUID channelId);
}
