package fr.sncf.d2d.serversideapp.security.service;

import java.util.Optional;

import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import fr.sncf.d2d.serversideapp.security.userdetails.ApplicationUserDetails;
import fr.sncf.d2d.serversideapp.users.models.User;
import fr.sncf.d2d.serversideapp.users.persistence.UsersRepository;
import lombok.RequiredArgsConstructor;


public interface AuthenticationService {
    
    public Optional<User> currentUser();
}
