package fr.sncf.d2d.serversideapp.messaging.websocket.handlers;

import java.security.Principal;
import java.util.Optional;
import java.util.UUID;
import java.util.function.Function;

import org.springframework.stereotype.Component;
import org.springframework.web.socket.CloseStatus;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;

import com.fasterxml.jackson.databind.ObjectMapper;

import fr.sncf.d2d.serversideapp.common.util.Validator;
import fr.sncf.d2d.serversideapp.messaging.dtos.CreateMessageDto;
import fr.sncf.d2d.serversideapp.messaging.dtos.MessagingDto;
import fr.sncf.d2d.serversideapp.messaging.dtos.RemoveMessageDto;
import fr.sncf.d2d.serversideapp.messaging.usecases.ConnectToChannelUseCase;
import fr.sncf.d2d.serversideapp.messaging.usecases.DisconnectFromChannelUseCase;
import fr.sncf.d2d.serversideapp.messaging.usecases.RemoveMessageUseCase;
import fr.sncf.d2d.serversideapp.messaging.usecases.SendMessageUseCase;
import fr.sncf.d2d.serversideapp.messaging.websocket.events.WebSocketChannelEventsHandlersFactory;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@RequiredArgsConstructor
@Component
public class MessagingWebSocketHandler extends TextWebSocketHandler {

    public static final String CONNECTION_ID_ATTRIBUTE_NAME = MessagingWebSocketHandler.class.getCanonicalName() + ".CONNECTION_ID";

    private static final Function<WebSocketSession, String> fmtSession = session -> String.format(
        "%s (%s:%s)",
        Optional.ofNullable(session.getPrincipal())
                .map(Principal::getName)
                .orElse("anonymous user"),
        session.getRemoteAddress().getHostName(),
        session.getRemoteAddress().getPort()
    );

    private final Validator validator;
    private final ObjectMapper objectMapper;

    private final ConnectToChannelUseCase connectToChannel;
    private final DisconnectFromChannelUseCase disconnectFromChannel;
    private final SendMessageUseCase sendMessage;
    private final RemoveMessageUseCase removeMessage;

    private final WebSocketChannelEventsHandlersFactory eventHandlerFactory;
    
    @Override
    public void afterConnectionEstablished(WebSocketSession session) throws Exception {

        log.debug("New connection from {} ", fmtSession.apply(session));

        final var sessionAttributes = session.getAttributes();
        final var channelId = (UUID)sessionAttributes.get(ChannelIdHandshakeInterceptor.CHANNEL_ID_KEY);

        assert channelId != null;

        final var connectionId = this.connectToChannel.connect(channelId, this.eventHandlerFactory.forSession(session));
        session.getAttributes().put(CONNECTION_ID_ATTRIBUTE_NAME, connectionId);

        log.debug("Client {} accepted on channel {} from {}", connectionId, channelId, fmtSession.apply(session));
    }

    @Override
    protected void handleTextMessage(WebSocketSession session, TextMessage message) throws Exception {
        final var channelId = (UUID)session.getAttributes().get(ChannelIdHandshakeInterceptor.CHANNEL_ID_KEY);
        final var connectionId = (UUID)session.getAttributes().get(CONNECTION_ID_ATTRIBUTE_NAME);

        if (channelId == null || connectionId == null){
            log.warn("Unexpected message (no session)");
            return;
        }

        final MessagingDto dto = this.objectMapper.readValue(message.getPayload(), MessagingDto.class);

        this.validator.validate(message);

        if (dto instanceof CreateMessageDto createMessageDto)
            this.sendMessage.send(channelId, createMessageDto.getMessage());
        
        else if (dto instanceof RemoveMessageDto removeMesageDto)
            this.removeMessage.remove(removeMesageDto.getMessageId());
    }

    @Override
    public void afterConnectionClosed(WebSocketSession session, CloseStatus status) throws Exception {

        log.debug(
            "Closed received from {} (status={})",
            fmtSession.apply(session),
            status
        );

        final var channelId = (UUID)session.getAttributes().get(ChannelIdHandshakeInterceptor.CHANNEL_ID_KEY);
        final var connectionId = (UUID)session.getAttributes().get(CONNECTION_ID_ATTRIBUTE_NAME);

        if (channelId == null || connectionId == null){
            log.warn("Unexpected close from {} (no session), ignoring disconnect", fmtSession.apply(session));
            return;
        }

        this.disconnectFromChannel.disconnect(channelId, connectionId);   

        log.debug("Client disconnected from channel {} {}", channelId);
    }
}