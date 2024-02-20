package fr.sncf.d2d.serversideapp.users.web;

import java.util.Collections;
import java.util.Map;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import fr.sncf.d2d.serversideapp.common.htmx.views.HxCommands;
import fr.sncf.d2d.serversideapp.common.htmx.views.HxView;
import fr.sncf.d2d.serversideapp.users.exceptions.UserValidationError;
import fr.sncf.d2d.serversideapp.users.usecases.CreateUserParams;
import fr.sncf.d2d.serversideapp.users.usecases.CreateUserUseCase;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@RestController
@RequestMapping("/users")
@RequiredArgsConstructor
@Slf4j
public class SignupController {
    
    private final CreateUserUseCase createUserUseCase;
    private final HxView view;

    @GetMapping("/signup")
    public void form() throws Exception{
       this.view.render("signup/form");
    }

    @PostMapping("/signup")
    public void signup(SignupForm form, HttpServletResponse response) throws Exception {

        try {
            final var params = CreateUserParams.builder()
                .username(form.getUsername())
                .password(form.getPassword())
                .build();
    
            final var user = this.createUserUseCase.create(params);

            log.info("\"{}\" signed up", user.getUsername());
            
            this.view.render(
                "login/form", 
                Collections.singletonMap("afterSignup", true)
            );
        
        } catch (UserValidationError validationException){
            this.view.render(
                "signup/server-validation-errors",
                Map.of(
                    "hasError", true,
                    "errors", validationException.getErrors()
                )
            );
        }
    }
}
