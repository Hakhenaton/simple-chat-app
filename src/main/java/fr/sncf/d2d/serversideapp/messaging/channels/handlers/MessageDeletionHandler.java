package fr.sncf.d2d.serversideapp.messaging.channels.handlers;

import java.io.IOException;
import java.util.UUID;

@FunctionalInterface
public interface MessageDeletionHandler {
    /**
     * Implémentation de l'envoi d'un notification de suppression de message.
     * @param messageId
     * @throws IOException
     */
    void handle(UUID messageId) throws IOException;
}
