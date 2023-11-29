package fr.sncf.d2d.serversideapp.messaging.channels;

import java.util.Map;
import java.util.Optional;
import java.util.UUID;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.ConcurrentMap;

/**
 * Une implémentation en mémoire d'un {@link Channel} (thread-safe).
 */
public class InMemoryChannel implements Channel {

    private final ConcurrentMap<UUID, ConnectedClient> connected = new ConcurrentHashMap<>(100);

    @Override
    public UUID add(ConnectedClient connection) {
        final var id = UUID.randomUUID();
        connected.put(id, connection);
        return id;
    }

    @Override
    public void remove(UUID id) {
        connected.remove(id);
    }

    @Override
    public Map<UUID, ConnectedClient> clients() {
        return this.connected;
    }

    @Override
    public Optional<ConnectedClient> findClient(UUID clientId){
        return Optional.ofNullable(this.connected.get(clientId));
    }
    
}
