package fr.sncf.d2d.serversideapp.messaging.websocket.handlers;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.socket.config.annotation.EnableWebSocket;
import org.springframework.web.socket.config.annotation.WebSocketConfigurer;
import org.springframework.web.socket.config.annotation.WebSocketHandlerRegistry;

import fr.sncf.d2d.serversideapp.messaging.websocket.errors.MessagingExceptionsWebSocketHandlerDecorator;
import fr.sncf.d2d.serversideapp.messaging.websocket.events.WebSocketChannelEventsHandlersFactory;
import fr.sncf.d2d.serversideapp.messaging.websocket.session.SessionRegistrationWebSocketHandlerDecorator;
import lombok.RequiredArgsConstructor;

@Configuration
@EnableWebSocket
@RequiredArgsConstructor
public class MessagingConfiguration implements WebSocketConfigurer {

    private final ChannelIdHandshakeInterceptor channelIdInterceptor;
    private final NonceHandshakeInterceptor nonceHandshakeInterceptor;
    private final CsrfTokenHandshakeInterceptor csrfTokenHandshakeInterceptor;

    private final MessagingWebSocketHandler messagesHandler;
    
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
        .addInterceptors(
            this.csrfTokenHandshakeInterceptor, 
            this.channelIdInterceptor,
            this.nonceHandshakeInterceptor
        );
    }
}
