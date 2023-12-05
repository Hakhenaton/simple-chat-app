package fr.sncf.d2d.serversideapp.security.htmx;

import java.util.Collections;
import java.util.Map;

import org.springframework.security.web.csrf.CsrfToken;
import org.springframework.stereotype.Component;

import fr.sncf.d2d.serversideapp.common.htmx.resolvers.HxResolver;
import fr.sncf.d2d.serversideapp.common.htmx.resolvers.HxResolverScope;
import fr.sncf.d2d.serversideapp.common.htmx.resolvers.Scoped;
import fr.sncf.d2d.serversideapp.messaging.websocket.session.WebSocketSessionHolder;


@Scoped(HxResolverScope.WEBSOCKET)
@Component
public class WebSocketCsrfTokenHxResolver implements HxResolver {

    private static final String CSRF_REQUEST_ATTRIBUTE = "_csrf";
    private static final String CSRF_KEY = "csrf";

    @Override
    public Map<String, ? extends Object> resolve() {
        return WebSocketSessionHolder.currentSession() 
            .map(session -> (CsrfToken)session.getAttributes().get(CSRF_REQUEST_ATTRIBUTE))
            .map(token -> Collections.singletonMap(CSRF_KEY, token))
            .orElseGet(Collections::emptyMap);
    }

    
}
