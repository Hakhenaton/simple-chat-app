package fr.sncf.d2d.serversideapp.messaging.websocket.events;

import java.util.Map;

import org.springframework.context.annotation.Configuration;

import fr.sncf.d2d.serversideapp.messaging.channels.handlers.MessageDeletionHandler;
import fr.sncf.d2d.serversideapp.messaging.channels.handlers.MessageHandler;
import fr.sncf.d2d.serversideapp.messaging.channels.handlers.StateHandler;
import fr.sncf.d2d.serversideapp.messaging.websocket.handlers.MessagingWebSocketHandler;
import lombok.RequiredArgsConstructor;

@Configuration
@RequiredArgsConstructor
public class WebSocketEventHandlerFactory {
    
    private static final String CHANNEL_ID_KEY = "channelId";
    private static final String MESSAGE_KEY = "message";
    private static final String MESSAGE_ID_KEY = "messageId";
    private static final String AUTHOR_KEY = "author";
    private static final String STATE_KEY = "state";

    public MessageHandler messageHandler(HxWebSocketView view){
        return (message, from) -> {
            final var channelId = view.getSession()
                .getAttributes()
                .get(MessagingWebSocketHandler.CHANNEL_ID_ATTRIBUTE_NAME);

            view.render(
                "channels/message", 
                Map.of(
                    CHANNEL_ID_KEY, channelId.toString(),
                    MESSAGE_KEY, message,
                    AUTHOR_KEY, from
                )
            );
        };
    }

    public StateHandler stateHandler(HxWebSocketView view){
        return state -> {
            final var channelId = view.getSession()
                .getAttributes()
                .get(MessagingWebSocketHandler.CHANNEL_ID_ATTRIBUTE_NAME);

            view.render(
                "channels/state", 
                Map.of(
                    CHANNEL_ID_KEY, channelId.toString(),
                    STATE_KEY, state
                )
            );
        };
    }

    public MessageDeletionHandler deleteHandler(HxWebSocketView view) {
        return messageId -> {
            final var channelId = view.getSession()
            .getAttributes()
            .get(MessagingWebSocketHandler.CHANNEL_ID_ATTRIBUTE_NAME);

            view.render(
                "channels/delete-message", 
                Map.of(
                    CHANNEL_ID_KEY, channelId.toString(),
                    MESSAGE_ID_KEY, messageId
                )
            );
        };
    }
}
