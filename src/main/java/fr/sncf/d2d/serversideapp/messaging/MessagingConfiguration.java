package fr.sncf.d2d.serversideapp.messaging;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.socket.config.annotation.WebSocketConfigurer;
import org.springframework.web.socket.config.annotation.WebSocketHandlerRegistry;

import lombok.RequiredArgsConstructor;

@Configuration
@RequiredArgsConstructor
public class MessagingConfiguration implements WebSocketConfigurer {

    private final MessagesHandler messagesHandler;

    @Override
    public void registerWebSocketHandlers(WebSocketHandlerRegistry registry) {
        registry.addHandler(this.messagesHandler, "/messages");
    }
    
}
