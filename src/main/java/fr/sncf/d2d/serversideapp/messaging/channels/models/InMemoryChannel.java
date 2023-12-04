package fr.sncf.d2d.serversideapp.messaging.channels.models;

import java.util.Map;
import java.util.Optional;
import java.util.UUID;
import java.util.concurrent.ConcurrentHashMap;

import lombok.RequiredArgsConstructor;

/**
 * Une implémentation en mémoire d'un {@link Channel} (thread-safe).
 */
@RequiredArgsConstructor
public class InMemoryChannel implements Channel {

    private final UUID id;

    private final ConcurrentHashMap<UUID, ConnectedClient> connected = new ConcurrentHashMap<>(100);

    @Override
    public UUID add(ConnectedClient connection) {
        final var id = UUID.randomUUID();
        final var removed = this.connected.put(id, connection);
        assert removed == null;
        return id;
    }

    @Override
    public void remove(UUID id) {
        final var removed = this.connected.remove(id);
        assert removed != null;
    }

    @Override
    public Map<UUID, ConnectedClient> clients() {
        return this.connected;
    }

    @Override
    public Optional<ConnectedClient> findClient(UUID clientId){
        return Optional.ofNullable(this.connected.get(clientId));
    }

    @Override
    public UUID getId() {
        return this.id;
    }
    
}
