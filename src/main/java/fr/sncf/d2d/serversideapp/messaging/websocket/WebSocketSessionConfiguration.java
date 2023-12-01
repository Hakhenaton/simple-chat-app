package fr.sncf.d2d.serversideapp.messaging.websocket;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Scope;
import org.springframework.context.annotation.ScopedProxyMode;
import org.springframework.web.socket.WebSocketSession;

@Configuration
public class WebSocketSessionConfiguration {
    
    @Bean
    @Scope(scopeName = "prototype", proxyMode = ScopedProxyMode.TARGET_CLASS)
    public WebSocketSession webSocketSession(){
        return WebSocketSessionHolder.getCurrentSession();
    }
}
