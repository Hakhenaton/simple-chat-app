package fr.sncf.d2d.serversideapp.users.models;

import fr.sncf.d2d.serversideapp.common.models.Identifiable;
import lombok.Getter;
import lombok.NonNull;
import lombok.experimental.SuperBuilder;

@Getter
@SuperBuilder
public class User extends Identifiable {

    private static final long serialVersionUID = -962899035100012963L;

    @NonNull
    private final String username;

    @NonNull
    private final String password;

    @NonNull
    private final Role role;

    @Override
    public String toString(){
        return this.username;
    }
}
