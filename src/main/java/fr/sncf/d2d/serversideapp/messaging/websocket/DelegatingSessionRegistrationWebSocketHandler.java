package fr.sncf.d2d.serversideapp.messaging.websocket;

import org.springframework.web.socket.CloseStatus;
import org.springframework.web.socket.WebSocketHandler;
import org.springframework.web.socket.WebSocketMessage;
import org.springframework.web.socket.WebSocketSession;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public class DelegatingSessionRegistrationWebSocketHandler implements WebSocketHandler {

    private final WebSocketHandler delegate;

    @Override
    public void afterConnectionEstablished(WebSocketSession session) throws Exception {
        this.registerSession(session);
        this.delegate.afterConnectionEstablished(session);
    }

    

    @Override
    public void handleMessage(WebSocketSession session, WebSocketMessage<?> message) throws Exception {
        this.registerSession(session);
        this.delegate.handleMessage(session, message);
    }

    @Override
    public void handleTransportError(WebSocketSession session, Throwable exception) throws Exception {
        this.registerSession(session);
        this.delegate.handleTransportError(session, exception);
    }

    @Override
    public void afterConnectionClosed(WebSocketSession session, CloseStatus closeStatus) throws Exception {
        this.registerSession(session);
        this.delegate.afterConnectionClosed(session, closeStatus);
    }

    @Override
    public boolean supportsPartialMessages() {
        return this.delegate.supportsPartialMessages();
    }

    private void registerSession(WebSocketSession session){
        WebSocketSessionHolder.setCurrentSession(session);
    }
}
