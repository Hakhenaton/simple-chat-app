package fr.sncf.d2d.serversideapp.messaging.exceptions;

public class BadMessageException extends Exception {
    public BadMessageException(){
        super("bad message format");
    }
}
