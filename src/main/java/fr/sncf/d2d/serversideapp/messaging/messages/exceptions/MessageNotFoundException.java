package fr.sncf.d2d.serversideapp.messaging.messages.exceptions;

public class MessageNotFoundException extends Exception {
    public MessageNotFoundException(){
        super("message was not found");
    }
}
