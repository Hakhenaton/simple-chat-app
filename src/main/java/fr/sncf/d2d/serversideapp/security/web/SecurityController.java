package fr.sncf.d2d.serversideapp.security;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.servlet.ModelAndView;

import lombok.RequiredArgsConstructor;

@Controller
@RequiredArgsConstructor
public class SecurityController {
    
    @GetMapping("/login")
    public ModelAndView loginForm(){
        return new ModelAndView("login");
    }

    @PostMapping("/login")
    public ResponseEntity<?> doLogin(){
        return ResponseEntity.ok()
            .header("HX-Trigger", "login")
            .build();
    }
}
