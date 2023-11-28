package fr.sncf.d2d.serversideapp.messaging.models;

import java.util.List;

import fr.sncf.d2d.serversideapp.messaging.websocket.Connection;
import fr.sncf.d2d.serversideapp.users.models.User;

public class Conversation {
    
    public List<Connection> connected;

    public List<Message> history;
}
