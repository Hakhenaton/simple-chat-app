package fr.sncf.d2d.serversideapp.security.htmx;

import java.util.Collections;
import java.util.Map;

import org.springframework.stereotype.Component;

import fr.sncf.d2d.serversideapp.common.htmx.resolvers.HxResolver;
import fr.sncf.d2d.serversideapp.common.htmx.resolvers.HxResolverScope;
import fr.sncf.d2d.serversideapp.common.htmx.resolvers.Scoped;
import fr.sncf.d2d.serversideapp.messaging.websocket.handlers.CsrfTokenHandshakeInterceptor;
import fr.sncf.d2d.serversideapp.messaging.websocket.session.WebSocketSessionHolder;


@Scoped(HxResolverScope.WEBSOCKET)
@Component
public class WebSocketCsrfTokenHxResolver implements HxResolver {

    private static final String CSRF_KEY = "csrf";

    @Override
    public Map<String, ? extends Object> resolve() {
        return WebSocketSessionHolder.currentSession() 
            .map(session -> {
                final var parameterName = (String)session.getAttributes()
                    .get(CsrfTokenHandshakeInterceptor.CSRF_PARAMETER_NAME_SESSION_KEY);
                final var tokenValue = (String)session.getAttributes()
                    .get(CsrfTokenHandshakeInterceptor.CSRF_TOKEN_VALUE_SESSION_KEY);
                return parameterName != null && tokenValue != null
                    ? Collections.singletonMap(
                        CSRF_KEY, 
                        Map.of(
                            "parameterName", parameterName,
                            "token", tokenValue
                        )
                    ) : null;
            })
            .orElseGet(Collections::emptyMap);
    }

    
}
