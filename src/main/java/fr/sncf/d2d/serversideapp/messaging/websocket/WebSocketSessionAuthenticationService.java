package fr.sncf.d2d.serversideapp.messaging.websocket;

import java.util.Optional;

import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.socket.WebSocketSession;

import fr.sncf.d2d.serversideapp.security.services.AuthenticationService;
import fr.sncf.d2d.serversideapp.security.userdetails.ApplicationUserDetails;
import fr.sncf.d2d.serversideapp.users.models.User;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public class WebSocketSessionAuthenticationService implements AuthenticationService {

    public static final String BEAN_NAME = "webSocketSessionAuthenticationService";

    private final WebSocketSession session;

    @Override
    public Optional<User> currentUser(){
        return Optional.ofNullable(this.session.getPrincipal())
            .filter(javaPrincipal -> javaPrincipal instanceof UsernamePasswordAuthenticationToken)
            .map(javaPrincipal -> ((UsernamePasswordAuthenticationToken)javaPrincipal).getPrincipal())
            .filter(springPrincipal -> springPrincipal instanceof ApplicationUserDetails)
            .map(springPrincipal -> ((ApplicationUserDetails)springPrincipal).getDomainUser());

    }
}
