package fr.sncf.d2d.serversideapp.security.services;

import java.util.Optional;

import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.stereotype.Service;
import org.springframework.web.socket.WebSocketSession;

import fr.sncf.d2d.serversideapp.security.userdetails.ApplicationUserDetails;
import fr.sncf.d2d.serversideapp.users.models.User;
import lombok.RequiredArgsConstructor;

/**
 * Le contexte exposé par SecurityContextHolder n'est pas propagé dans les threads
 * appelant un {@link org.springframework.web.socket.WebSocketHandler}.
 * Le service par défaut {@link SecurityContextAuthenticationService} est substitué par ce service
 * qui fourni un support en se basant sur la {@link WebSocketSession}.
 * Les traitements réalisés dans des {@link org.springframework.web.socket.WebSocketHandler} qui dépendent
 * du contexte utilisateur doivent être décorés avec un {@link fr.sncf.d2d.serversideapp.messaging.websocket.session.SessionRegistrationWebSocketHandlerDecorator}.
 */
@Service(WebSocketSessionAuthenticationService.BEAN_NAME)
@RequiredArgsConstructor
public class WebSocketSessionAuthenticationService implements AuthenticationService {

    public static final String BEAN_NAME = "webSocketSessionAuthenticationService";

    private final WebSocketSession session;

    @Override
    public Optional<User> currentUser(){
        return Optional.ofNullable(this.session.getPrincipal())
            .map(javaPrincipal -> javaPrincipal instanceof UsernamePasswordAuthenticationToken token 
                ? token.getPrincipal() 
                : null
            )
            .map(springPrincipal -> springPrincipal instanceof ApplicationUserDetails details
                ? details.getDomainUser()
                : null
            );
    }
}
