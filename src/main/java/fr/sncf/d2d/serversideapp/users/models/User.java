package fr.sncf.d2d.serversideapp.users.models;

import java.util.UUID;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Builder
public class User {

    @Setter
    private UUID id;

    private final String username;

    private final String password;

    private final Role role;
}
