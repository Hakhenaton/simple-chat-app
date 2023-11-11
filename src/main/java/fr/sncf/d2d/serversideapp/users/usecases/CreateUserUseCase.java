package fr.sncf.d2d.serversideapp.users.usecases;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Predicate;
import java.util.regex.Pattern;
import java.util.stream.Stream;

import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;

import fr.sncf.d2d.serversideapp.security.service.AuthenticationService;
import fr.sncf.d2d.serversideapp.users.exceptions.UserValidationError;
import fr.sncf.d2d.serversideapp.users.models.Role;
import fr.sncf.d2d.serversideapp.users.models.User;
import fr.sncf.d2d.serversideapp.users.persistence.UsersRepository;
import lombok.RequiredArgsConstructor;

@Component
@RequiredArgsConstructor
public class CreateUserUseCase {

    private final UsersRepository usersRepository;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationService authenticationService;

    public User create(CreateUserParams params) throws UserValidationError {

        this.authenticationService.currentUser()
            .ifPresentOrElse(
                authenticatedUser -> {
                    if (params.getRole().equals(Role.USER)){
                        return;
                    }
                    if (authenticatedUser.getRole().equals(Role.ADMINISTRATOR)){
                        return;
                    }
                    throw new AccessDeniedException("Seul les administrateurs peuvent créer des compte d'administration");
                },
                () -> {
                    if (params.getRole().equals(Role.USER)){
                        return;
                    }
                    throw new AccessDeniedException("Seul le rôle standard est autorisé pour les anonymes.");
                }
            );

        final var errors = new ArrayList<String>();

        if (!StringUtils.hasText(params.getUsername()))
            errors.add("Votre nom d'utilisateur ne doit pas être vide.");

        if (params.getRole() == null)
            errors.add("Le rôle doit être fourni.");

        final var passwordComplexityChecks = Stream.<Predicate<String>>of(
            password -> password != null,
            password -> password.length() > 12,
            password -> Pattern.matches("[a-z]+", password),
            password -> Pattern.matches("[A-Z]+", password),
            password -> Pattern.matches("[0-9]+", password)
        );

        if (passwordComplexityChecks.anyMatch(check -> !check.test(params.getPassword())))
            errors.add("Votre mot de passe ne respecte pas les contraintes de sécurité.");

        if (!errors.isEmpty())
            throw new UserValidationError(errors);

        final var sanitizedUsername = params.getUsername().trim();
        final var hashedPassword = this.passwordEncoder.encode(params.getPassword());

        final var user = User.builder()
            .username(sanitizedUsername)
            .password(hashedPassword)
            .role(params.getRole())
            .build();

        this.usersRepository.save(user);

        return user;
    }
}
