package fr.sncf.d2d.serversideapp.messaging.channels.events;

import java.io.IOException;
import java.util.UUID;

/** Gestion de la suppression d'un message. */
@FunctionalInterface
public interface MessageDeletionHandler {
    /**
     * Implémentation de l'envoi d'un notification de suppression de message.
     * @param messageId
     * @throws IOException
     */
    void handle(UUID messageId) throws IOException;
}
