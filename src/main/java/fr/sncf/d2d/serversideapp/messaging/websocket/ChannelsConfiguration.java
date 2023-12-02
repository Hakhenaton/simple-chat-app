package fr.sncf.d2d.serversideapp.messaging.websocket;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.socket.config.annotation.EnableWebSocket;
import org.springframework.web.socket.config.annotation.WebSocketConfigurer;
import org.springframework.web.socket.config.annotation.WebSocketHandlerRegistry;

import lombok.RequiredArgsConstructor;

@Configuration
@EnableWebSocket
@RequiredArgsConstructor
public class ChannelsConfiguration implements WebSocketConfigurer {

    private final MessagingWebSocketHandler messagesHandler;

    @Override
    public void registerWebSocketHandlers(WebSocketHandlerRegistry registry) {
        registry.addHandler(
            new SessionRegistrationWebSocketHandlerDecorator(this.messagesHandler), 
            "/channels/*"
        );
    }

}
