package fr.sncf.d2d.serversideapp.messaging.channels;

import fr.sncf.d2d.serversideapp.messaging.channels.handlers.MessageDeletionHandler;
import fr.sncf.d2d.serversideapp.messaging.channels.handlers.MessageHandler;
import fr.sncf.d2d.serversideapp.messaging.channels.handlers.StateHandler;
import lombok.Builder;
import lombok.Getter;
import lombok.NonNull;

@Builder
@Getter
public class ChannelEventsHandlers {

    @NonNull
    private final StateHandler onState;

    @NonNull
    private final MessageHandler onMessage;

    @NonNull
    private final MessageDeletionHandler onMessageDeleted;
}
