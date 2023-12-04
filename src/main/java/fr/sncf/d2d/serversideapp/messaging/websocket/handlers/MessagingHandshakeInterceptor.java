package fr.sncf.d2d.serversideapp.messaging.websocket.handlers;

import java.util.Map;
import java.util.UUID;

import org.springframework.http.server.ServerHttpRequest;
import org.springframework.http.server.ServerHttpResponse;
import org.springframework.http.server.ServletServerHttpRequest;
import org.springframework.stereotype.Component;
import org.springframework.web.socket.WebSocketHandler;
import org.springframework.web.socket.server.HandshakeInterceptor;

import lombok.RequiredArgsConstructor;

@Component
@RequiredArgsConstructor
public class MessagingHandshakeInterceptor implements HandshakeInterceptor {

    public static final String CHANNEL_ID_KEY = "channelId";

    @Override
    public boolean beforeHandshake(ServerHttpRequest request, ServerHttpResponse response, WebSocketHandler wsHandler, Map<String, Object> wsSessionAttributes) throws Exception {

        if (!(request instanceof ServletServerHttpRequest serverHttpRequest))
            return false;

        final var pathVariables = request.getURI().getPath().split("/");
        UUID channelId;
        try {
            channelId = UUID.fromString(pathVariables[2]);
        } catch (IllegalArgumentException badUuid){
            return false;
        }

        final var servletRequest = serverHttpRequest.getServletRequest();

        final var httpSession = servletRequest.getSession();

        httpSession.setAttribute(CHANNEL_ID_KEY, channelId);
        wsSessionAttributes.put(CHANNEL_ID_KEY, channelId);

        return true;
    }

    @Override
    public void afterHandshake(ServerHttpRequest request, ServerHttpResponse response, WebSocketHandler wsHandler, Exception exception) {}
    
}
