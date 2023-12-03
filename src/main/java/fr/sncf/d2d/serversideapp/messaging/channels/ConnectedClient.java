package fr.sncf.d2d.serversideapp.messaging.channels;

import java.util.Optional;

import fr.sncf.d2d.serversideapp.users.models.User;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NonNull;

/**
 * Données d'un client connecté à un channel.
 * @see Channel
 */
@Builder
@Getter
public class ConnectedClient {
    
    @Getter(value = AccessLevel.NONE)
    private final User user;

    /**
     * @return L'utilisateur associé à cette connexion. Vide si la connexion est anonyme.
     */
    public Optional<User> getUser(){
        return Optional.ofNullable(this.user);
    }

    @NonNull
    private final ChannelEventsHandlers eventHandlers;
}
