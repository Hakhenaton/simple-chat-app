package fr.sncf.d2d.serversideapp.messaging.websocket.handlers;

import java.util.Map;

import org.springframework.stereotype.Component;
import org.springframework.web.socket.WebSocketSession;

import fr.sncf.d2d.serversideapp.common.htmx.HxRenderer;
import fr.sncf.d2d.serversideapp.messaging.channels.ChannelEventsHandlers;
import fr.sncf.d2d.serversideapp.messaging.channels.handlers.MessageDeletionHandler;
import fr.sncf.d2d.serversideapp.messaging.channels.handlers.MessageHandler;
import fr.sncf.d2d.serversideapp.messaging.channels.handlers.StateHandler;
import fr.sncf.d2d.serversideapp.messaging.websocket.MessagingWebSocketHandler;
import lombok.RequiredArgsConstructor;

@Component
@RequiredArgsConstructor
public class WebSocketChannelEventHandlersFactory {

    private final HxRenderer hxRenderer;

    public ChannelEventsHandlers forSession(WebSocketSession session){

        final var view = new HxWebSocketView(session, this.hxRenderer);

        return ChannelEventsHandlers.builder()
            .onMessage(messageHandler(view))
            .onMessageDeleted(deleteHandler(view))
            .onState(stateHandler(view))
            .build();
    }

    private MessageHandler messageHandler(HxWebSocketView view){
        return (message, author) -> {
            final var channelId = view.getSession()
                .getAttributes()
                .get(MessagingWebSocketHandler.CHANNEL_ID_ATTRIBUTE_NAME);

            view.render(
                "channels/message", 
                Map.of(
                    "channelId", channelId,
                    "message", message,
                    "author", author
                )
            );
        };
    }

    private StateHandler stateHandler(HxWebSocketView view){
        return state -> {
            final var channelId = view.getSession()
                .getAttributes()
                .get(MessagingWebSocketHandler.CHANNEL_ID_ATTRIBUTE_NAME);

            view.render(
                "channels/state", 
                Map.of(
                    "channelId", channelId,
                    "state", state
                )
            );
        };
    }

    private MessageDeletionHandler deleteHandler(HxWebSocketView view) {
        return messageId -> {
            final var channelId = view.getSession()
            .getAttributes()
            .get(MessagingWebSocketHandler.CHANNEL_ID_ATTRIBUTE_NAME);

            view.render(
                "channels/delete-message", 
                Map.of(
                    "channelId", channelId,
                    "messageId", messageId
                )
            );
        };
    }
}
