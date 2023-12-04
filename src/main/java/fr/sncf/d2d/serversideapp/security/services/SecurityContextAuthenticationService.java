package fr.sncf.d2d.serversideapp.security.services;

import java.util.Optional;

import org.springframework.context.annotation.Primary;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import fr.sncf.d2d.serversideapp.security.userdetails.ApplicationUserDetails;
import fr.sncf.d2d.serversideapp.users.models.User;

/**
 * Implémentation par défaut de l'accès au contexte utilisateur, basée sur le {@link org.springframework.security.core.context.SecurityContext}
 * du thread d'exécution courant.
 */
@Primary
@Service(SecurityContextAuthenticationService.BEAN_NAME)
public class SecurityContextAuthenticationService implements AuthenticationService {

    public static final String BEAN_NAME = "securityContextAuthenticationService";

    public Optional<User> currentUser(){
        return Optional.ofNullable(SecurityContextHolder.getContext().getAuthentication())
            .flatMap(authentication -> {
                final var principal = authentication.getPrincipal();
                return principal instanceof ApplicationUserDetails details
                    ? Optional.of(details.getDomainUser())
                    : Optional.empty();
            });
    }
}
