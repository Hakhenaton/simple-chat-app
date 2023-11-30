package fr.sncf.d2d.serversideapp.users.usecases;

import fr.sncf.d2d.serversideapp.users.models.Role;
import lombok.Builder;
import lombok.Getter;
import lombok.NonNull;

@Getter
@Builder
public class CreateUserParams {
    
    @NonNull
    private final String username;

    @NonNull
    private final String password;

    @Builder.Default
    private final Role role = Role.USER;
}
