package fr.sncf.d2d.serversideapp.messaging.channels.events;

import lombok.Builder;
import lombok.Getter;
import lombok.NonNull;

/**
 * Evénements gérés par un client de channel.
 */
@Builder
@Getter
public class ChannelEventsHandlers {

    @NonNull
    private final StateHandler onState;

    @NonNull
    private final MessageHandler onMessage;

    @NonNull
    private final MessageDeletionHandler onMessageDeleted;

    @NonNull
    private final MessagingExceptionHandler onMessagingException;
}
