package fr.sncf.d2d.serversideapp.messaging.websocket.session;

import java.util.Optional;

import org.springframework.core.NamedInheritableThreadLocal;
import org.springframework.web.socket.WebSocketSession;



/** 
 * Similaire au {@link org.springframework.web.context.request.RequestContextHolder}, 
 * mais pour les objets {@link WebSocketSession} représentant la session courante.
 * La {@link WebSocketSession} est stockée au niveau du thread courant lorsqu'une méthode est
 * appelée sur un {@link WebSocketHandler} décoré avec un {@link SessionRegistrationWebSocketHandler} et peut être
 * injecté dans des implémentations de services de la couche métier.
 */
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
