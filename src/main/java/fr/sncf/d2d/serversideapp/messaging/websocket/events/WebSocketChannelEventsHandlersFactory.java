package fr.sncf.d2d.serversideapp.messaging.websocket.events;

import java.util.Collections;
import java.util.Map;

import org.springframework.stereotype.Component;
import org.springframework.web.socket.WebSocketSession;

import fr.sncf.d2d.serversideapp.common.htmx.views.HxWebSocketView;
import fr.sncf.d2d.serversideapp.common.htmx.views.HxWebSocketViewFactory;
import fr.sncf.d2d.serversideapp.messaging.channels.events.ChannelEventsHandlers;
import fr.sncf.d2d.serversideapp.messaging.channels.events.MessageDeletionHandler;
import fr.sncf.d2d.serversideapp.messaging.channels.events.MessageHandler;
import fr.sncf.d2d.serversideapp.messaging.channels.events.MessagingExceptionHandler;
import fr.sncf.d2d.serversideapp.messaging.channels.events.ClientConnectionsStateHandler;
import fr.sncf.d2d.serversideapp.security.exceptions.AccessDeniedException;
import lombok.RequiredArgsConstructor;

@Component
@RequiredArgsConstructor
public class WebSocketChannelEventsHandlersFactory {

    private final HxWebSocketViewFactory hxWebSocketViewFactory;

    public ChannelEventsHandlers forSession(WebSocketSession session){

        final var view = this.hxWebSocketViewFactory.forSession(session);

        return ChannelEventsHandlers.builder()
            .onMessage(messageHandler(view))
            .onMessageDeleted(deleteHandler(view))
            .onClientConnectionsState(stateHandler(view))
            .onMessagingException(messagingExceptionHandler(view))
            .build();
    }

    private MessageHandler messageHandler(HxWebSocketView view){
        return (message, author) -> view.render(
            "channels/message", 
            Map.of(
                "message", message,
                "author", author
            )
        );
    }

    private ClientConnectionsStateHandler stateHandler(HxWebSocketView view){
        return state -> view.render(
            "channels/state", 
            Collections.singletonMap("state", state)
        );
        
    }

    private MessageDeletionHandler deleteHandler(HxWebSocketView view) {
        return messageId -> view.render(
            "channels/delete-message", 
            Collections.singletonMap("messageId", messageId)
        );
    }

    private MessagingExceptionHandler messagingExceptionHandler(HxWebSocketView view){
        return exception -> {

            if (exception instanceof AccessDeniedException){
                view.render("login/form");
                return;
            }

            throw exception;
        };
    }
}
