package fr.sncf.d2d.serversideapp.security.exceptions;

/**
 * Erreur d'accès interdit.
 */
public class AccessDeniedException extends Exception {

    public AccessDeniedException(String message){
        super(message);
    }

    public AccessDeniedException(){
        super("access is denied");
    }
}
