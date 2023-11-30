package fr.sncf.d2d.serversideapp.users.models;

import java.util.UUID;

import lombok.Builder;
import lombok.Getter;
import lombok.NonNull;
import lombok.Setter;

@Getter
@Builder
public class User {

    @Setter
    private UUID id;

    @NonNull
    private final String username;

    @NonNull
    private final String password;

    @NonNull
    private final Role role;

    @Override
    public boolean equals(Object obj) {
        return obj != null && 
            obj instanceof User user && 
            user.id != null && 
            user.id.equals(obj);
    }

    @Override
    public String toString(){
        return this.username;
    }
}
