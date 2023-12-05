package fr.sncf.d2d.serversideapp.messaging.websocket.errors;

import org.springframework.web.socket.CloseStatus;
import org.springframework.web.socket.WebSocketHandler;
import org.springframework.web.socket.WebSocketMessage;
import org.springframework.web.socket.WebSocketSession;

import fr.sncf.d2d.serversideapp.messaging.websocket.events.WebSocketChannelEventsHandlersFactory;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public class MessagingExceptionsWebSocketHandlerDecorator implements WebSocketHandler {

    private final WebSocketHandler delegate;
    private final WebSocketChannelEventsHandlersFactory eventHandlerFactory;

    @Override
    public void afterConnectionEstablished(WebSocketSession session) throws Exception {
        this.handle(session, () -> this.delegate.afterConnectionEstablished(session));
    }

    @Override
    public void handleMessage(WebSocketSession session, WebSocketMessage<?> message) throws Exception {
        this.handle(session, () -> this.delegate.handleMessage(session, message));
    }

    @Override
    public void handleTransportError(WebSocketSession session, Throwable exception) throws Exception {
        this.handle(session, () -> this.delegate.handleTransportError(session, exception));
    }

    @Override
    public void afterConnectionClosed(WebSocketSession session, CloseStatus closeStatus) throws Exception {
        this.delegate.afterConnectionClosed(session, closeStatus);
    }

    @Override
    public boolean supportsPartialMessages() {
        return this.delegate.supportsPartialMessages();
    }

    private void handle(WebSocketSession session, ThrowingRunnable throwingRunnable) throws Exception {
        try {
            throwingRunnable.run();
        } catch (Exception exception){
            this.eventHandlerFactory.forSession(session)
                .getOnMessagingException()
                .handle(exception);;
        }
    }
    
    @FunctionalInterface
    interface ThrowingRunnable {
        void run() throws Exception;
    }
}
