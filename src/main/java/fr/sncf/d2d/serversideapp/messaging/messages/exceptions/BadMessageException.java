package fr.sncf.d2d.serversideapp.messaging.messages.exceptions;

public class BadMessageException extends Exception {
    public BadMessageException(){
        super("bad message format");
    }
}
