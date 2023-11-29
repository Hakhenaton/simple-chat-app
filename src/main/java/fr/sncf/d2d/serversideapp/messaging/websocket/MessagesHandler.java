package fr.sncf.d2d.serversideapp.messaging.websocket;

import java.util.UUID;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;
import org.springframework.web.socket.CloseStatus;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;

import fr.sncf.d2d.serversideapp.common.htmx.HxConfiguration;
import fr.sncf.d2d.serversideapp.common.htmx.HxView;
import fr.sncf.d2d.serversideapp.messaging.usecases.ConnectToChannelUseCase;
import lombok.RequiredArgsConstructor;

@Component
@RequiredArgsConstructor
public class MessagesHandler extends TextWebSocketHandler {

    private final ConnectToChannelUseCase connectToChannelUseCase;
    
    @Override
    public void afterConnectionEstablished(WebSocketSession session) throws Exception {

        final var path = session.getUri().getPath().split("/");
        UUID channelId;
        try {
            channelId = UUID.fromString(path[1]);
        } catch (IllegalArgumentException badUuid){
            session.close(CloseStatus.BAD_DATA);
            return;
        }

        this.connectToChannelUseCase.connect(channelId, new WebSocketConnection(session, null));
    }

    @Override
    public void afterConnectionClosed(WebSocketSession session, CloseStatus status) throws Exception {
        
    }
}
