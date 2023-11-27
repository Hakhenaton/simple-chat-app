package fr.sncf.d2d.serversideapp.messaging;

import java.util.function.Consumer;

import fr.sncf.d2d.serversideapp.users.models.User;

public interface Room {
    
    void onMessage(Consumer<Message> consumer);

    void onConnect(Consumer<User> consumer);
}
