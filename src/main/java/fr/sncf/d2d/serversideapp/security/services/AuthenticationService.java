package fr.sncf.d2d.serversideapp.security.services;

import java.util.Optional;

import fr.sncf.d2d.serversideapp.users.models.User;


public interface AuthenticationService {
    Optional<User> currentUser();
}
