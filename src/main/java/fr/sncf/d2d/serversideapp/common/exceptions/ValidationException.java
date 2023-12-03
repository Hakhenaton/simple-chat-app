package fr.sncf.d2d.serversideapp.common.exceptions;

import java.util.Set;

import lombok.Getter;

@Getter
public class ValidationException extends Exception {
    
    private final Set<String> errors;   
    
    public ValidationException( Set<String> errors){
        super(String.format("%d validation errors were encoutered", errors.size()));
        this.errors = errors;
    }
}
