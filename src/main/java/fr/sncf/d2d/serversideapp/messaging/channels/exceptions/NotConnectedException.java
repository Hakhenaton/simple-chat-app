package fr.sncf.d2d.serversideapp.messaging.channels.exceptions;

public class NotConnectedException extends Exception {
    public NotConnectedException(){
        super("not connected");
    }
}
