package fr.sncf.d2d.serversideapp.security.web;

import java.io.IOException;

import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.AuthenticationFailureHandler;
import org.springframework.stereotype.Component;

import fr.sncf.d2d.serversideapp.common.htmx.HxRenderer;
import fr.sncf.d2d.serversideapp.common.web.HxHttpServletView;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;

@Component
@RequiredArgsConstructor
public class LoginFailureHandler implements AuthenticationFailureHandler {

    private final HxRenderer hxRenderer;

    @Override
    public void onAuthenticationFailure(HttpServletRequest request, HttpServletResponse response,
            AuthenticationException exception) throws IOException, ServletException {
        new HxHttpServletView(response, this.hxRenderer).render("login/error");
    }
    
}
