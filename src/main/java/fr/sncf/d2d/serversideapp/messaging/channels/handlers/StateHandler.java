package fr.sncf.d2d.serversideapp.messaging.channels.handlers;

import java.io.IOException;

import fr.sncf.d2d.serversideapp.messaging.channels.ChannelState;

@FunctionalInterface
public interface StateHandler {
    /**
     * Implémentation de l'envoi d'un message d'état du canal.
     * @see ChannelState
     * @param state L'état actuel du canal.
     * @throws IOException en cas d'erreur lors de l'envoi.
     */
    void handle(ChannelState state) throws IOException;
}
