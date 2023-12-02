package fr.sncf.d2d.serversideapp.common.exceptions;

public class AccessDeniedException extends Exception {
    public AccessDeniedException(){
        super("access is denied");
    }
}
