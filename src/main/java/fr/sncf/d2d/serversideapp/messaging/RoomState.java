package fr.sncf.d2d.serversideapp.messaging;

import java.util.List;

import fr.sncf.d2d.serversideapp.users.models.User;

public class RoomState {
    
    public List<User> connected;

    public List<Message> history;
}
