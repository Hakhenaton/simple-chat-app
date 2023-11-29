package fr.sncf.d2d.serversideapp.messaging.websocket;

import java.io.IOException;
import java.util.Map;

import fr.sncf.d2d.serversideapp.common.htmx.HxWebSocketView;
import fr.sncf.d2d.serversideapp.messaging.channels.ChannelState;
import fr.sncf.d2d.serversideapp.messaging.channels.Connection;
import fr.sncf.d2d.serversideapp.messaging.channels.Message;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public class WebSocketConnection implements Connection {
    
    private static final String CHANNEL_ID_KEY = "channelId";
    private static final String MESSAGE_KEY = "message";
    private static final String STATE_KEY = "state";

    private final HxWebSocketView view;

    @Override
    public void sendMessage(Message message) throws IOException {

        final var channelId = this.view.getSession()
            .getAttributes()
            .get(MessagesHandler.CHANNEL_ID_ATTRIBUTE_NAME);

        this.view.render(
            "channels/message", 
            Map.of(
                CHANNEL_ID_KEY, channelId,
                MESSAGE_KEY, message
            )
        );
    }

    @Override
    public void sendState(ChannelState state) throws IOException {
        
        final var channelId = this.view.getSession()
            .getAttributes()
            .get(MessagesHandler.CHANNEL_ID_ATTRIBUTE_NAME);

        this.view.render(
            "channels/state", 
            Map.of(
                CHANNEL_ID_KEY, channelId,
                STATE_KEY, state
            )
        );
    }
}
