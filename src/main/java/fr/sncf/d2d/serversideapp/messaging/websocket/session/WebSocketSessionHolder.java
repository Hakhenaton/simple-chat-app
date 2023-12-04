package fr.sncf.d2d.serversideapp.messaging.websocket.session;

import java.util.Optional;

import org.springframework.core.NamedInheritableThreadLocal;
import org.springframework.web.socket.WebSocketSession;



/** Similaire au {@link org.springframework.web.context.request.RequestContextHolder}, mais pour les {@link WebSocketSession}. */
public class WebSocketSessionHolder {
    
    private static final NamedInheritableThreadLocal<WebSocketSession> SESSION = 
        new NamedInheritableThreadLocal<>("Current WS session");

    public static void setCurrentSession(WebSocketSession session){
        SESSION.set(session);
    }

    public static Optional<WebSocketSession> currentSession(){
        return Optional.ofNullable(SESSION.get());
    }

    public static WebSocketSession getCurrentSession(){
        return currentSession()
            .orElseThrow(() -> new IllegalStateException("there is no WS session associated with this thread"));
    }
}
