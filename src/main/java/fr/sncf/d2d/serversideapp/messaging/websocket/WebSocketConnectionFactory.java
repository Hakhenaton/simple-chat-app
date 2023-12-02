package fr.sncf.d2d.serversideapp.messaging.websocket;

import org.springframework.stereotype.Component;
import org.springframework.web.socket.WebSocketSession;

import fr.sncf.d2d.serversideapp.common.htmx.HxRenderer;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Component
public class WebSocketConnectionFactory {

    private final HxRenderer hxRenderer;
    
    public WebSocketConnection create(WebSocketSession session){
        return new WebSocketConnection(new HxWebSocketView(session, this.hxRenderer));
    }
}
