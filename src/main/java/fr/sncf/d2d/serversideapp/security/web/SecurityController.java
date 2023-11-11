package fr.sncf.d2d.serversideapp.security.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

import lombok.RequiredArgsConstructor;

@Controller
@RequiredArgsConstructor
public class SecurityController {
    
    @GetMapping("/login")
    public String loginForm(){
        return "login/form";
    }

    @PostMapping("/login/error")
    public String loginError() throws InterruptedException{
        return "login/error";
    }
}
