package fr.sncf.d2d.serversideapp.users.usecases;

import java.util.ArrayList;
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

        final var errors = new ArrayList<String>();

        if (!StringUtils.hasText(params.getUsername()))
            errors.add("Votre nom d'utilisateur ne doit pas être vide.");

        if (params.getRole() == null)
            errors.add("Le rôle doit être fourni.");

        final var isAdmin = this.authenticationService.currentUser()
            .map(u -> u.getRole().equals(Role.ADMINISTRATOR))
            .orElse(false);

        if (!params.getRole().equals(Role.USER) && !isAdmin){
            throw new AccessDeniedException("Seuls les administrateurs peuvent créer des utilisateurs non standards");
        }

        final var passwordComplexityChecks = Stream.<Predicate<String>>of(
            password -> password != null,
            password -> password.length() >= 12,
            password -> Pattern.compile("[a-z]").matcher(password).find(),
            password -> Pattern.compile("[A-Z]").matcher(password).find(),
            password -> Pattern.compile("[0-9]").matcher(password).find()
        );

        if (passwordComplexityChecks.anyMatch(check -> !check.test(params.getPassword())))
            errors.add("Votre mot de passe ne respecte pas les contraintes de sécurité.");

        final var sanitizedUsername = params.getUsername().trim();

        if (this.usersRepository.findByUsername(sanitizedUsername).isPresent()){
            errors.add(String.format("Le nom d'utilisateur %s n'est pas disponible", sanitizedUsername));
        }

        if (!errors.isEmpty())
            throw new UserValidationError(errors);

        final var user = User.builder()
            .username(sanitizedUsername)
            .password(this.passwordEncoder.encode(params.getPassword()))
            .role(params.getRole())
            .build();

        this.usersRepository.save(user);

        return user;
    }
}
