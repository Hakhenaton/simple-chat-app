package fr.sncf.d2d.serversideapp.messaging.channels.events;

import java.io.IOException;

import fr.sncf.d2d.serversideapp.messaging.channels.models.ChannelConnectedClientsState;

/**
 * Gestion d'état du canal.
 */
@FunctionalInterface
public interface ClientConnectionsStateHandler {
    
    /**
     * Implémentation de l'envoi d'un message d'état du canal.
     * @see ChannelConnectedClientsState
     * @param state L'état actuel du canal.
     * @throws IOException en cas d'erreur lors de l'envoi.
     */
    void handle(ChannelConnectedClientsState state) throws IOException;
}
