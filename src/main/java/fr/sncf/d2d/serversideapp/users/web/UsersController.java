package fr.sncf.d2d.serversideapp.users.web;

import java.util.Collection;
import java.util.Collections;
import java.util.Map;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import fr.sncf.d2d.serversideapp.common.web.HxHelpers;
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
    private final HxHelpers hx;

    @GetMapping("/signup")
    public ModelAndView signupForm(){
        return new ModelAndView("signup/modal");
    }

    @PostMapping("/signup")
    public ModelAndView signupAction(SignupForm form, HttpServletResponse response) throws Exception {
        
        final var params = CreateUserParams.builder()
                    .username(form.getUsername())
                    .password(form.getPassword())
                    .build();
        
        try {
            final var user = this.createUserUseCase.create(params);

            log.info("\"{}\" signed up", user.getUsername());
            
            this.hx.sendEvent("signup", response);
            
            return new ModelAndView(
                "signup/login", 
                Collections.singletonMap("afterSignup", true)
            );
        
        } catch (UserValidationError validationException){
            return new ModelAndView(
                "signup/form", 
                Map.of(
                    "hasError", true,
                    "errors", validationException.getErrors()
                )
            );
        }
    }
}
