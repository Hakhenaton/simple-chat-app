package fr.sncf.d2d.serversideapp.messaging.websocket;

import java.io.IOException;

import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;

import fr.sncf.d2d.serversideapp.messaging.channels.Connection;
import fr.sncf.d2d.serversideapp.messaging.channels.Message;
import fr.sncf.d2d.serversideapp.users.models.User;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public class WebSocketConnection implements Connection {
    
    private final WebSocketSession session;
    private final User user;

    @Override
    public void sendMessage(Message message) throws IOException {
        this.session.sendMessage(new TextMessage("null"));
    }

    @Override
    public User getUser() {
        return this.user;
    }
}
