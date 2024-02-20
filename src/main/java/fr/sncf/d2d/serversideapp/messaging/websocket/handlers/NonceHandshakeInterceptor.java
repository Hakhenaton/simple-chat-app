package fr.sncf.d2d.serversideapp.messaging.websocket.handlers;

import java.util.Map;
import java.util.UUID;

import org.springframework.http.server.ServerHttpRequest;
import org.springframework.http.server.ServerHttpResponse;
import org.springframework.http.server.ServletServerHttpRequest;
import org.springframework.stereotype.Component;
import org.springframework.web.socket.WebSocketHandler;
import org.springframework.web.socket.server.HandshakeInterceptor;

import fr.sncf.d2d.serversideapp.security.filters.CspFilter;

@Component
public class NonceHandshakeInterceptor implements HandshakeInterceptor {

    public static final String WS_NONCE_KEY = NonceHandshakeInterceptor.class.getCanonicalName() + ".nonce";

    @Override
    public boolean beforeHandshake(ServerHttpRequest request, ServerHttpResponse response, WebSocketHandler wsHandler,
            Map<String, Object> attributes) throws Exception {
        
        if (!(request instanceof ServletServerHttpRequest serverHttpRequest))
            return false;

        final var httpSession = serverHttpRequest.getServletRequest().getSession();

        attributes.put(WS_NONCE_KEY, httpSession.getAttribute(CspFilter.SCRIPT_NONCE));

        return true;
    }

    @Override
    public void afterHandshake(ServerHttpRequest arg0, ServerHttpResponse arg1, WebSocketHandler arg2, Exception arg3) {}
}
