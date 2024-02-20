package fr.sncf.d2d.serversideapp.users.usecases;

import java.util.ArrayList;
import java.util.regex.Pattern;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import fr.sncf.d2d.serversideapp.security.exceptions.AccessDeniedException;
import fr.sncf.d2d.serversideapp.security.services.AuthenticationService;
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

    public User create(CreateUserParams params) throws UserValidationError, AccessDeniedException {

        final var errors = new ArrayList<String>();

        if (params.getUsername().isBlank())
            errors.add("Votre nom d'utilisateur ne doit pas être vide.");

        final var isAdmin = this.authenticationService.currentUser()
            .filter(u -> u.getRole().equals(Role.ADMINISTRATOR))
            .isPresent();

        if (!params.getRole().equals(Role.USER) && !isAdmin)
            throw new AccessDeniedException("Seuls les administrateurs peuvent créer des utilisateurs non standards");
        
        final var password = params.getPassword();
        final var validPassword = password.length() >= 12 &&
            Pattern.compile("[a-z]").matcher(password).find() &&
            Pattern.compile("[A-Z]").matcher(password).find() &&
            Pattern.compile("[0-9]").matcher(password).find();

        if (!validPassword)
            errors.add("Votre mot de passe ne respecte pas les contraintes de sécurité.");

        final var sanitizedUsername = params.getUsername().trim().toLowerCase();

        if (sanitizedUsername.length() > 25)
            errors.add("Votre nom d'utilisateur ne doit pas dépasser 25 caractères");

        if (Pattern.compile("^[a-z0-9_\\-]$").matcher(sanitizedUsername).find())
            errors.add("Votre nom d'utilisateur doit être alphanumérique et ne peut contenir que des tirets: _ -");

        if (this.usersRepository.findByUsername(sanitizedUsername).isPresent())
            errors.add(String.format("Le nom d'utilisateur \"%s\" n'est pas disponible", sanitizedUsername));

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
