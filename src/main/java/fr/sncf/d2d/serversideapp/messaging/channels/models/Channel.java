package fr.sncf.d2d.serversideapp.messaging.channels.models;

import java.util.Map;
import java.util.Optional;
import java.util.UUID;

public interface Channel {

    UUID getId();
    
    UUID add(ConnectedClient client);

    void remove(UUID clientId);

    Optional<ConnectedClient> findClient(UUID clientId);

    Map<UUID, ConnectedClient> clients();
}
