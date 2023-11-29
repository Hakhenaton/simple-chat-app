package fr.sncf.d2d.serversideapp.messaging.channels;

import java.util.Date;

import fr.sncf.d2d.serversideapp.users.models.User;
import lombok.Builder;
import lombok.Getter;
import lombok.NonNull;

@Builder
@Getter
public class Message {
    
    @NonNull
    private final User from;

    @NonNull
    private final String content;

    @NonNull
    private final Date sentAt;

    private final boolean isDeleted;
}
