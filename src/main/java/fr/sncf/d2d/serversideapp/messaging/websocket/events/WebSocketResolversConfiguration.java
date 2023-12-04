package fr.sncf.d2d.serversideapp.messaging.websocket.events;

import java.util.Collections;
import java.util.UUID;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import fr.sncf.d2d.serversideapp.common.htmx.HxResolver;
import fr.sncf.d2d.serversideapp.messaging.websocket.handlers.ChannelIdHandshakeInterceptor;
import fr.sncf.d2d.serversideapp.messaging.websocket.session.WebSocketSessionHolder;

@Configuration
public class WebSocketResolversConfiguration {

    @Bean
    HxResolver channelIdResolver(){
        return () -> WebSocketSessionHolder.currentSession()
            .map(session -> (UUID)session.getAttributes().get(ChannelIdHandshakeInterceptor.CHANNEL_ID_KEY))
            .map(channelId -> Collections.singletonMap("channelId", channelId))
            .orElseGet(Collections::emptyMap);
    }
}
