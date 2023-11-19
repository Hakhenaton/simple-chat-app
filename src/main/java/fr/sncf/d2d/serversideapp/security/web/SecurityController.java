package fr.sncf.d2d.serversideapp.security.web;

import java.util.Collections;
import java.util.Map;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

import fr.sncf.d2d.serversideapp.common.web.Htmx;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;

@Controller
@RequiredArgsConstructor
public class SecurityController {

    private final Htmx htmx;
    
    @GetMapping("/login")
    public String loginForm(){
        return "login/form";
    }

    @PostMapping("/login/error")
    public String loginError(){
        return "login/error";
    }

    @PostMapping("/login/success")
    public void loginSuccess(HttpServletRequest request, HttpServletResponse response) throws Exception{
        this.htmx.render(
            Collections.singletonMap(
                "main/navbar", 
                Collections.emptyMap()
            ), 
            request, 
            response
        );
    }
}
