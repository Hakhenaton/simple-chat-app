package fr.sncf.d2d.serversideapp.messaging.websocket;

import java.util.Optional;

import org.springframework.core.NamedInheritableThreadLocal;
import org.springframework.web.socket.WebSocketSession;

public class WebSocketSessionHolder {
    
    private static final NamedInheritableThreadLocal<WebSocketSession> SESSION = 
        new NamedInheritableThreadLocal<>("Current WS session");

    public static void setCurrentSession(WebSocketSession session){
        SESSION.set(session);
    }

    public static WebSocketSession getCurrentSession(){
        return Optional.ofNullable(SESSION.get())
            .orElseThrow(() -> new IllegalStateException("there is no WS session associated with this thread"));
    }
}
