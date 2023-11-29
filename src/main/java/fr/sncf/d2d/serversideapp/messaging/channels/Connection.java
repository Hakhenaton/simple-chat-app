package fr.sncf.d2d.serversideapp.messaging.channels;

import java.io.IOException;

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
    void sendMessage(Message message) throws IOException;
}
