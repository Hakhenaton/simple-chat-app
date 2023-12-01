package fr.sncf.d2d.serversideapp.messaging.configuration;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Scope;
import org.springframework.context.annotation.ScopedProxyMode;
import org.springframework.web.socket.WebSocketSession;

import fr.sncf.d2d.serversideapp.messaging.channels.ChannelsRepository;
import fr.sncf.d2d.serversideapp.messaging.usecases.ConnectToChannelUseCase;
import fr.sncf.d2d.serversideapp.messaging.usecases.DisconnectFromChannelUseCase;
import fr.sncf.d2d.serversideapp.messaging.usecases.SendMessageUseCase;
import fr.sncf.d2d.serversideapp.messaging.websocket.WebSocketSessionAuthenticationService;
import fr.sncf.d2d.serversideapp.security.services.AuthenticationService;
import lombok.RequiredArgsConstructor;

@Configuration
public class MessagingConfiguration {

    public static final String WS_AUTHENTICATION_SERVICE = "wsAuthenticationService";

    @Bean(WS_AUTHENTICATION_SERVICE)
    @Scope(scopeName = "websocket", proxyMode = ScopedProxyMode.TARGET_CLASS)
    public AuthenticationService webSocketAuthenticationService(WebSocketSession session){
        return new WebSocketSessionAuthenticationService(session);
    }
}
