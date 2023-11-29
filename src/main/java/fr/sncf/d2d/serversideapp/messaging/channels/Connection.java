package fr.sncf.d2d.serversideapp.messaging.channels;

import java.io.IOException;
import java.util.List;

import fr.sncf.d2d.serversideapp.users.models.User;

public interface Connection {

    void sendConnected(List<User> connected) throws IOException;
        
    void sendMessage(Message message) throws IOException;

    void notifyDisconnect(User disconnected) throws IOException;

    void notifyConnect(User connected) throws IOException;
}
