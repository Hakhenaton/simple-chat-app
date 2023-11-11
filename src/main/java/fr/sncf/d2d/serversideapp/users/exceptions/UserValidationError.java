package fr.sncf.d2d.serversideapp.users.exceptions;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Map;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public class UserValidationError extends Exception {

    private final Collection<? extends String> errors;
}
