package fr.sncf.d2d.serversideapp.messaging.channels;

import java.io.IOException;
import java.util.UUID;

import fr.sncf.d2d.serversideapp.users.models.User;

public interface Connection {

    /**
     * Implémentation de l'envoi d'un message d'état du canal.
     * @see ChannelState
     * @param state L'état actuel du canal.
     * @throws IOException en cas d'erreur lors de l'envoi.
     */
    void sendState(ChannelState state) throws IOException;
    
    /**
     * Implémentation de l'envoi d'un message dans le canal.
     * @param message Le message à envoyer.
     * @throws IOException en cas d'erreur lors de l'envoi.
     */
    void sendMessage(Message message, User from) throws IOException;

    /**
     * Implémentation de l'envoi d'un notification de suppression de message.
     * @param messageId
     * @throws IOException
     */
    void deleteMessage(UUID messageId) throws IOException;
}
