package fr.sncf.d2d.serversideapp.messaging.websocket;

import java.io.IOException;
import java.util.List;

import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;

import fr.sncf.d2d.serversideapp.common.htmx.HxView;
import fr.sncf.d2d.serversideapp.common.htmx.HxWebSocketView;
import fr.sncf.d2d.serversideapp.messaging.channels.ChannelState;
import fr.sncf.d2d.serversideapp.messaging.channels.Connection;
import fr.sncf.d2d.serversideapp.messaging.channels.Message;
import fr.sncf.d2d.serversideapp.users.models.User;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public class WebSocketConnection implements Connection {
    
    private final HxWebSocketView view;

    @Override
    public void sendMessage(Message message) throws IOException {

        
    }

    @Override
    public void sendState(ChannelState state) throws IOException {
        
    }

    @Override
    public void notifyAnonymousDisconnect() throws IOException {
        
    }

    @Override
    public void notifyUserDisconnect(User disconnected) throws IOException {
        
    }

    @Override
    public void notifyAnonymousConnect() throws IOException {
        
    }

    @Override
    public void notifyUserConnect(User connected) throws IOException {
        
    }

    
    

    
}
