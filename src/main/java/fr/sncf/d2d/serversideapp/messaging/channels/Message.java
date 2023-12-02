package fr.sncf.d2d.serversideapp.messaging.channels;

import java.util.Date;
import java.util.UUID;

import lombok.Builder;
import lombok.Getter;
import lombok.NonNull;
import lombok.Setter;

@Builder
@Getter
public class Message {

    @Setter
    private UUID id;
    
    @NonNull
    private final UUID authorId;

    @NonNull
    private final UUID channelId;

    @NonNull
    private final String content;

    @NonNull
    private final Date sentAt;

    private final boolean isDeleted;
}
