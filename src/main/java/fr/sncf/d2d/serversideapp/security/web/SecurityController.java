package fr.sncf.d2d.serversideapp.security.web;

import java.util.Collections;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import lombok.RequiredArgsConstructor;

@Controller
@RequiredArgsConstructor
public class SecurityController {
    
    @GetMapping("/login")
    public String loginForm(){
        return "login";
    }

    @PostMapping("/login-error")
    public String loginError() throws InterruptedException{
        return "login-error";
    }
}
