package fr.sncf.d2d.serversideapp.messaging.websocket.events;

import java.util.Collections;
import java.util.Map;

import org.springframework.stereotype.Component;

import fr.sncf.d2d.serversideapp.common.htmx.resolvers.HxResolver;
import fr.sncf.d2d.serversideapp.common.htmx.resolvers.HxResolverScope;
import fr.sncf.d2d.serversideapp.common.htmx.resolvers.Scoped;
import fr.sncf.d2d.serversideapp.messaging.websocket.handlers.NonceHandshakeInterceptor;
import fr.sncf.d2d.serversideapp.messaging.websocket.session.WebSocketSessionHolder;

@Component
@Scoped(HxResolverScope.WEBSOCKET)
public class NonceHxWebSocketResolver implements HxResolver {
    
    @Override
    public Map<String, ? extends Object> resolve() {
        return WebSocketSessionHolder.currentSession()
            .map(session -> (String)session.getAttributes().get(NonceHandshakeInterceptor.WS_NONCE_KEY))
            .map(nonce -> Collections.singletonMap("nonce", nonce))
            .orElseGet(Collections::emptyMap);
    }
}
