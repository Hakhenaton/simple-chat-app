package fr.sncf.d2d.serversideapp.messaging.channels;

import java.util.Date;

import fr.sncf.d2d.serversideapp.users.models.User;
import lombok.Builder;
import lombok.Getter;

@Builder
@Getter
public class Message {
    
    private final User from;

    private final String content;

    private final Date sentAt;

    private final boolean isDeleted;
}
