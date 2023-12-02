package fr.sncf.d2d.serversideapp.messaging.websocket;

import java.io.IOException;
import java.util.Map;
import java.util.UUID;

import fr.sncf.d2d.serversideapp.messaging.channels.ChannelState;
import fr.sncf.d2d.serversideapp.messaging.channels.Connection;
import fr.sncf.d2d.serversideapp.messaging.channels.Message;
import fr.sncf.d2d.serversideapp.users.models.User;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public class WebSocketConnection implements Connection {
    
    private static final String CHANNEL_ID_KEY = "channelId";
    private static final String MESSAGE_KEY = "message";
    private static final String MESSAGE_ID_KEY = "messageId";
    private static final String AUTHOR_KEY = "author";
    private static final String STATE_KEY = "state";

    private final HxWebSocketView view;

    @Override
    public void sendMessage(Message message, User from) throws IOException {

        final var channelId = this.view.getSession()
            .getAttributes()
            .get(MessagingWebSocketHandler.CHANNEL_ID_ATTRIBUTE_NAME);

        this.view.render(
            "channels/message", 
            Map.of(
                CHANNEL_ID_KEY, channelId.toString(),
                MESSAGE_KEY, message,
                AUTHOR_KEY, from
            )
        );
    }

    @Override
    public void sendState(ChannelState state) throws IOException {
        
        final var channelId = this.view.getSession()
            .getAttributes()
            .get(MessagingWebSocketHandler.CHANNEL_ID_ATTRIBUTE_NAME);

        System.out.println(this.view.getSession().getId());
        System.out.println(this.view.getSession().isOpen());

        this.view.render(
            "channels/state", 
            Map.of(
                CHANNEL_ID_KEY, channelId.toString(),
                STATE_KEY, state
            )
        );
    }

    @Override
    public void deleteMessage(UUID messageId) throws IOException {
        
        final var channelId = this.view.getSession()
            .getAttributes()
            .get(MessagingWebSocketHandler.CHANNEL_ID_ATTRIBUTE_NAME);

        this.view.render(
            "channels/delete-message", 
            Map.of(
                CHANNEL_ID_KEY, channelId.toString(),
                MESSAGE_ID_KEY, messageId
            )
        );
    }
}
