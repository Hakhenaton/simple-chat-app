package fr.sncf.d2d.serversideapp.messaging.websocket.handlers;

import java.util.Map;

import org.springframework.http.server.ServerHttpRequest;
import org.springframework.http.server.ServerHttpResponse;
import org.springframework.http.server.ServletServerHttpRequest;
import org.springframework.security.web.csrf.CsrfToken;
import org.springframework.stereotype.Component;
import org.springframework.web.socket.WebSocketHandler;
import org.springframework.web.socket.server.HandshakeInterceptor;

/**
 * {@link HandshakeInterceptor} prévu pour placer le token CSRF depuis les attributs de requête HTTP vers la session WebSocket.
 */
@Component
public class CsrfTokenHandshakeInterceptor implements HandshakeInterceptor {

    private static final String CSRF_REQUEST_ATTRIBUTE = "_csrf";
    public static final String CSRF_PARAMETER_NAME_SESSION_KEY = 
        CsrfTokenHandshakeInterceptor.class.getCanonicalName() + ".parameterName";
    public static final String CSRF_TOKEN_VALUE_SESSION_KEY = 
        CsrfTokenHandshakeInterceptor.class.getCanonicalName() + ".token";

    @Override
    public boolean beforeHandshake(ServerHttpRequest request, ServerHttpResponse response, WebSocketHandler wsHandler,
            Map<String, Object> attributes) throws Exception {

        if (!(request instanceof ServletServerHttpRequest servletRequest))
            return false;
            
        final var csrf = (CsrfToken)servletRequest.getServletRequest().getAttribute(CSRF_REQUEST_ATTRIBUTE);

        attributes.putAll(Map.of(
            CSRF_PARAMETER_NAME_SESSION_KEY, csrf.getParameterName(),
            CSRF_TOKEN_VALUE_SESSION_KEY, csrf.getToken()
        ));

        return true;
    }

    @Override
    public void afterHandshake(ServerHttpRequest request, ServerHttpResponse response, WebSocketHandler wsHandler, 
        Exception exception) {}
    
}
