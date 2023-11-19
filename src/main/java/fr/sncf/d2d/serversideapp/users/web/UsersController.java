package fr.sncf.d2d.serversideapp.users.web;

import java.util.Collections;
import java.util.Map;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import fr.sncf.d2d.serversideapp.common.web.Htmx;
import fr.sncf.d2d.serversideapp.users.exceptions.UserValidationError;
import fr.sncf.d2d.serversideapp.users.usecases.CreateUserParams;
import fr.sncf.d2d.serversideapp.users.usecases.CreateUserUseCase;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Controller
@RequestMapping("/users")
@RequiredArgsConstructor
@Slf4j
public class UsersController {
    
    private final CreateUserUseCase createUserUseCase;
    private final Htmx hx;

    @GetMapping("/signup")
    public ModelAndView signupForm(){
        return new ModelAndView("signup/modal");
    }

    @PostMapping("/signup")
    public ModelAndView signupAction(SignupForm form, HttpServletResponse response) throws Exception {

        try {
            final var params = CreateUserParams.builder()
                        .username(form.getUsername())
                        .password(form.getPassword())
                        .build();
    
            final var user = this.createUserUseCase.create(params);

            log.info("\"{}\" signed up", user.getUsername());
            
            this.hx.sendEvent("signup", response);
            this.hx.retarget("#signup-modal", response);
            this.hx.reswap("outerHTML", response);
            
            return new ModelAndView(
                "login/form", 
                Collections.singletonMap("afterSignup", true)
            );
        
        } catch (UserValidationError validationException){
            return new ModelAndView(
                "signup/server-validation-errors", 
                Map.of(
                    "hasError", true,
                    "errors", validationException.getErrors()
                )
            );
        }
    }
}
