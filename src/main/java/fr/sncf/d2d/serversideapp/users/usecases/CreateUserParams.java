package fr.sncf.d2d.serversideapp.users.usecases;

import fr.sncf.d2d.serversideapp.users.models.Role;
import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class CreateUserParams {
    
    private final String username;

    private final String password;

    @Builder.Default
    private final Role role = Role.USER;
}
