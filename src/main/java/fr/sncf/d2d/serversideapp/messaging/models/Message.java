package fr.sncf.d2d.serversideapp.messaging.models;

import java.util.Date;

import lombok.Builder;
import lombok.Getter;

@Builder
@Getter
public class Message {
    
    private final String from;

    private final String content;

    private final Date sentAt;

    private final boolean isDeleted;
}
