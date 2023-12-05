package fr.sncf.d2d.serversideapp.security.web;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import fr.sncf.d2d.serversideapp.common.htmx.views.HxView;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/login")
@RequiredArgsConstructor
public class LoginController {

    private final HxView view;
    
    @GetMapping
    public void loginForm() throws Exception {
        this.view.render("login/form");
    }
}
