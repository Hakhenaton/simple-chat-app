package fr.sncf.d2d.serversideapp.messaging.websocket.events;

import java.util.Collections;
import java.util.Map;
import java.util.UUID;

import org.springframework.stereotype.Component;

import fr.sncf.d2d.serversideapp.common.htmx.resolvers.HxResolver;
import fr.sncf.d2d.serversideapp.common.htmx.resolvers.HxResolverScope;
import fr.sncf.d2d.serversideapp.common.htmx.resolvers.Scoped;
import fr.sncf.d2d.serversideapp.messaging.websocket.handlers.ChannelIdHandshakeInterceptor;
import fr.sncf.d2d.serversideapp.messaging.websocket.session.WebSocketSessionHolder;

@Component
@Scoped(HxResolverScope.WEBSOCKET)
public class ChannelIdHxResolver implements HxResolver {

    @Override
    public Map<String, ? extends Object> resolve() {
        return WebSocketSessionHolder.currentSession()
            .map(session -> (UUID)session.getAttributes().get(ChannelIdHandshakeInterceptor.CHANNEL_ID_KEY))
            .map(channelId -> Collections.singletonMap("channelId", channelId))
            .orElseGet(Collections::emptyMap);
    }
}
