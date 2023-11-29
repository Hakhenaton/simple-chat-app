package fr.sncf.d2d.serversideapp.messaging.channels;

import java.io.IOException;

public interface Connection {

    void sendState(ChannelState state) throws IOException;
        
    void sendMessage(Message message) throws IOException;
}
