package fr.sncf.d2d.serversideapp.messaging.websocket.handlers;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.socket.config.annotation.EnableWebSocket;
import org.springframework.web.socket.config.annotation.WebSocketConfigurer;
import org.springframework.web.socket.config.annotation.WebSocketHandlerRegistry;
import org.springframework.web.socket.server.support.HttpSessionHandshakeInterceptor;

import fr.sncf.d2d.serversideapp.messaging.websocket.errors.MessagingExceptionsWebSocketHandlerDecorator;
import fr.sncf.d2d.serversideapp.messaging.websocket.events.WebSocketChannelEventsHandlersFactory;
import fr.sncf.d2d.serversideapp.messaging.websocket.session.SessionRegistrationWebSocketHandlerDecorator;
import lombok.RequiredArgsConstructor;

@Configuration
@EnableWebSocket
@RequiredArgsConstructor
public class MessagingConfiguration implements WebSocketConfigurer {

    private final MessagingWebSocketHandler messagesHandler;
    private final ChannelIdHandshakeInterceptor handshakeInterceptor;
    private final WebSocketChannelEventsHandlersFactory eventsHandlersFactory;

    @Override
    public void registerWebSocketHandlers(WebSocketHandlerRegistry registry) {
        registry.addHandler(
            new SessionRegistrationWebSocketHandlerDecorator(
                new MessagingExceptionsWebSocketHandlerDecorator(
                    this.messagesHandler, 
                    this.eventsHandlersFactory
                )
            ), 
            "/channels/*"
        )
        .addInterceptors(new HttpSessionHandshakeInterceptor(), this.handshakeInterceptor);
    }
}
