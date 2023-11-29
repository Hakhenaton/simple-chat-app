package fr.sncf.d2d.serversideapp.messaging.usecases;

import org.springframework.security.access.AccessDeniedException;
import org.springframework.stereotype.Service;

import fr.sncf.d2d.serversideapp.security.service.AuthenticationService;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service
public class SendMessageUseCase {
    
    private final AuthenticationService authenticationService;

    public void send(String message){
        final var user = this.authenticationService.currentUser()
            .orElseThrow(() -> new AccessDeniedException("authentication is required"));
    }
}
