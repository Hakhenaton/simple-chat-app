package fr.sncf.d2d.serversideapp.messaging.websocket;

import java.util.Map;
import java.util.UUID;

import org.springframework.stereotype.Component;
import org.springframework.web.socket.CloseStatus;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;

import fr.sncf.d2d.serversideapp.common.htmx.HxViewFactory;
import fr.sncf.d2d.serversideapp.messaging.usecases.ConnectToChannelUseCase;
import fr.sncf.d2d.serversideapp.messaging.usecases.DisconnectFromChannelUseCase;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Component
@RequiredArgsConstructor
@Slf4j
public class MessagesHandler extends TextWebSocketHandler {

    public static final String CHANNEL_ID_ATTRIBUTE_NAME = "channelId";
    public static final String CONNECTION_ID_ATTRIBUTE_NAME = "connectionId";

    private final HxViewFactory hxViewFactory;

    private final ConnectToChannelUseCase connectToChannel;
    private final DisconnectFromChannelUseCase disconnectFromChannel;
    
    @Override
    public void afterConnectionEstablished(WebSocketSession session) throws Exception {

        final var pathVariables = session.getUri().getPath().split("/");
        UUID channelId;
        try {
            channelId = UUID.fromString(pathVariables[2]);
        } catch (IllegalArgumentException badUuid){
            session.close(CloseStatus.NOT_ACCEPTABLE);
            return;
        }

        final var connection = new WebSocketConnection(this.hxViewFactory.forWebSocket(session));
        session.getAttributes().put(CHANNEL_ID_ATTRIBUTE_NAME, channelId);

        final var clientId = this.connectToChannel.connect(channelId, connection);
        session.getAttributes().put(CONNECTION_ID_ATTRIBUTE_NAME, clientId);
    }

    @Override
    protected void handleTextMessage(WebSocketSession session, TextMessage message) throws Exception {
        
    }

    @Override
    public void afterConnectionClosed(WebSocketSession session, CloseStatus status) throws Exception {

        final var channelId = (UUID)session.getAttributes().get(CHANNEL_ID_ATTRIBUTE_NAME);
        final var connectionId = (UUID)session.getAttributes().get(CONNECTION_ID_ATTRIBUTE_NAME);

        if (channelId == null || connectionId == null){
            log.warn("WS channel closed in an unexpected way (no session).");
            return;
        }

        this.disconnectFromChannel.disconnect(channelId, connectionId);   
    }
}
