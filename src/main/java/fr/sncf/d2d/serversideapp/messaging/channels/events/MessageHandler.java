package fr.sncf.d2d.serversideapp.messaging.channels.events;

import java.io.IOException;

import fr.sncf.d2d.serversideapp.messaging.messages.models.Message;
import fr.sncf.d2d.serversideapp.users.models.User;

/** Gestion d'un message arrivant */
@FunctionalInterface
public interface MessageHandler {
    /**
     * Implémentation de l'envoi d'un message dans le canal.
     * @param message Le message à envoyer.
     * @throws IOException en cas d'erreur lors de l'envoi.
     */
    void handle(Message state, User from) throws IOException;
}
