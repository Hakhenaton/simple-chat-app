package fr.sncf.d2d.serversideapp.messaging.channels.events;

@FunctionalInterface
public interface MessagingExceptionHandler {
    
    void handle(Exception exception) throws Exception;
}
