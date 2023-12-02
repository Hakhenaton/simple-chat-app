package fr.sncf.d2d.serversideapp.messaging.exceptions;

public class ChannelNotFoundException extends Exception {
    public ChannelNotFoundException(){
        super("channel was not found");
    }
}
