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

@Component
@RequiredArgsConstructor
public class MessagesHandler extends TextWebSocketHandler {

    private static final String CHANNEL_ID_KEY = "channelId";
    private static final String CONNECTION_ID_KEY = "connectionId";

    private final HxViewFactory hxViewFactory;

    private final ConnectToChannelUseCase connectToChannel;
    private final DisconnectFromChannelUseCase disconnectFromChannel;
    
    @Override
    public void afterConnectionEstablished(WebSocketSession session) throws Exception {

        final var path = session.getUri().getPath().split("/");
        UUID channelId;
        try {
            channelId = UUID.fromString(path[1]);
        } catch (IllegalArgumentException badUuid){
            session.close(CloseStatus.NOT_ACCEPTABLE);
            return;
        }

        final var connection = new WebSocketConnection(this.hxViewFactory.forWebSocket(session));

        final var clientId = this.connectToChannel.connect(channelId, connection);

        session.getAttributes().putAll(Map.of(
            CHANNEL_ID_KEY, channelId,
            CONNECTION_ID_KEY, clientId
        ));
    }

    @Override
    protected void handleTextMessage(WebSocketSession session, TextMessage message) throws Exception {
        
    }

    @Override
    public void afterConnectionClosed(WebSocketSession session, CloseStatus status) throws Exception {
        this.disconnectFromChannel.disconnect(
            (UUID)session.getAttributes().get(CHANNEL_ID_KEY), 
            (UUID)session.getAttributes().get(CONNECTION_ID_KEY)
        );   
    }
}
