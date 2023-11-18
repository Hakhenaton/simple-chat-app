package fr.sncf.d2d.serversideapp.security.service;

import java.util.Optional;

import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import fr.sncf.d2d.serversideapp.users.models.User;
import fr.sncf.d2d.serversideapp.users.persistence.UsersRepository;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthenticationService implements UserDetailsService {
    
    private final UsersRepository usersRepository;

    public Optional<User> currentUser(){
        final var authentication = SecurityContextHolder.getContext().getAuthentication();
        return authentication.getPrincipal() instanceof ApplicationUserDetails details
            ? Optional.of(details.getDomainUser())
            : Optional.empty();
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return new ApplicationUserDetails(
            this.usersRepository.findByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException(String.format("user %s does not exist", username)))
        );
    }
}
