package fr.sncf.d2d.serversideapp.messaging.websocket.handlers;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.socket.config.annotation.EnableWebSocket;
import org.springframework.web.socket.config.annotation.WebSocketConfigurer;
import org.springframework.web.socket.config.annotation.WebSocketHandlerRegistry;

import fr.sncf.d2d.serversideapp.messaging.websocket.session.SessionRegistrationWebSocketHandlerDecorator;
import lombok.RequiredArgsConstructor;

@Configuration
@EnableWebSocket
@RequiredArgsConstructor
public class MessagingConfiguration implements WebSocketConfigurer {

    private final MessagingWebSocketHandler messagesHandler;
    private final ChannelIdHandshakeInterceptor handshakeInterceptor;

    @Override
    public void registerWebSocketHandlers(WebSocketHandlerRegistry registry) {
        registry.addHandler(
            new SessionRegistrationWebSocketHandlerDecorator(this.messagesHandler), 
            "/channels/*"
        )
        .addInterceptors(this.handshakeInterceptor);
    }
}
