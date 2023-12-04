package fr.sncf.d2d.serversideapp.security.services;

import java.util.Optional;

import fr.sncf.d2d.serversideapp.users.models.User;

public interface AuthenticationService {
    /**
     * @return L'utilisateur authentifié dans le fil d'exécution courant, si présent. Vide si anonyme.
     */
    Optional<User> currentUser();
}
