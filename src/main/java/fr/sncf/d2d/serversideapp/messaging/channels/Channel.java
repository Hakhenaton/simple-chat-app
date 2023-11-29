package fr.sncf.d2d.serversideapp.messaging.channels;

import java.util.Map;
import java.util.UUID;

public interface Channel {
    
    UUID add(ConnectedClient client);

    void remove(UUID id);

    Map<UUID, ConnectedClient> clients();
}
