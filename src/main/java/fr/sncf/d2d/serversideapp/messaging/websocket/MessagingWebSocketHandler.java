package fr.sncf.d2d.serversideapp.messaging.websocket;

import java.security.Principal;
import java.util.Optional;
import java.util.UUID;
import java.util.function.Function;

import org.springframework.stereotype.Component;
import org.springframework.web.socket.CloseStatus;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;

import fr.sncf.d2d.serversideapp.messaging.usecases.ConnectToChannelUseCase;
import fr.sncf.d2d.serversideapp.messaging.usecases.DisconnectFromChannelUseCase;
import fr.sncf.d2d.serversideapp.messaging.usecases.SendMessageUseCase;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@RequiredArgsConstructor
@Component
public class MessagingWebSocketHandler extends TextWebSocketHandler {

    public static final String CHANNEL_ID_ATTRIBUTE_NAME = "channelId";
    public static final String CONNECTION_ID_ATTRIBUTE_NAME = "connectionId";

    private static final Function<WebSocketSession, String> fmtSession = session -> String.format(
        "%s (%s:%s)",
        Optional.ofNullable(session.getPrincipal())
                .map(Principal::getName)
                .orElse("anonymous user"),
        session.getRemoteAddress().getHostName(),
        session.getRemoteAddress().getPort()
    );

    private final ConnectToChannelUseCase connectToChannel;
    private final DisconnectFromChannelUseCase disconnectFromChannel;
    private final SendMessageUseCase sendMessage;
    private final WebSocketConnectionFactory webSocketConnectionFactory;
    
    @Override
    public void afterConnectionEstablished(WebSocketSession session) throws Exception {

        log.debug("New connection from {} ", fmtSession.apply(session));

        final var pathVariables = session.getUri().getPath().split("/");
        UUID channelId;
        try {
            channelId = UUID.fromString(pathVariables[2]);
        } catch (IllegalArgumentException badUuid){
            session.close(CloseStatus.NOT_ACCEPTABLE);
            return;
        }

        session.getAttributes().put(CHANNEL_ID_ATTRIBUTE_NAME, channelId);

        final var connectionId = this.connectToChannel.connect(channelId, this.webSocketConnectionFactory.create(session));
        session.getAttributes().put(CONNECTION_ID_ATTRIBUTE_NAME, connectionId);

        log.debug("Client {} accepted on channel {} from {}", connectionId, channelId, fmtSession.apply(session));
    }

    @Override
    protected void handleTextMessage(WebSocketSession session, TextMessage message) throws Exception {
        final var channelId = (UUID)session.getAttributes().get(CHANNEL_ID_ATTRIBUTE_NAME);
        final var connectionId = (UUID)session.getAttributes().get(CONNECTION_ID_ATTRIBUTE_NAME);

        if (channelId == null || connectionId == null){
            log.warn("Unexpected message (no session)");
            return;
        }

        System.out.println(message.getPayload());

        this.sendMessage.send(channelId, message.getPayload());
    }

    @Override
    public void afterConnectionClosed(WebSocketSession session, CloseStatus status) throws Exception {

        log.debug(
            "Closed received from {} (status={})",
            fmtSession.apply(session),
            status
        );

        final var channelId = (UUID)session.getAttributes().get(CHANNEL_ID_ATTRIBUTE_NAME);
        final var connectionId = (UUID)session.getAttributes().get(CONNECTION_ID_ATTRIBUTE_NAME);

        if (channelId == null || connectionId == null){
            log.warn("Unexpected close from {} (no session), ignoring disconnect", fmtSession.apply(session));
            return;
        }

        this.disconnectFromChannel.disconnect(channelId, connectionId);   

        log.debug("Client disconnected from channel {} {}", channelId);
    }
}