package fr.sncf.d2d.serversideapp.messaging;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;
import org.springframework.web.socket.CloseStatus;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;

import fr.sncf.d2d.serversideapp.common.htmx.HxConfiguration;
import fr.sncf.d2d.serversideapp.common.htmx.HxView;
import lombok.RequiredArgsConstructor;

@Component
@RequiredArgsConstructor
public class MessagesHandler extends TextWebSocketHandler {

    @Qualifier(HxConfiguration.WS_RENDERER)
    private final HxView view;
    
    @Override
    public void afterConnectionEstablished(WebSocketSession session) throws Exception {
        // TODO Auto-generated method stub
        super.afterConnectionEstablished(session);
    }

    @Override
    public void afterConnectionClosed(WebSocketSession session, CloseStatus status) throws Exception {
        // TODO Auto-generated method stub
        super.afterConnectionClosed(session, status);
    }
}
