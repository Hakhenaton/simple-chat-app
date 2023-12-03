package fr.sncf.d2d.serversideapp.security.web;

import java.io.IOException;

import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.AuthenticationFailureHandler;
import org.springframework.stereotype.Component;

import fr.sncf.d2d.serversideapp.common.web.HxHttpServletViewFactory;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;

@Component
@RequiredArgsConstructor
public class ApplicationAuthenticationFailureHandler implements AuthenticationFailureHandler {

    private final HxHttpServletViewFactory servletViewFactory;

    @Override
    public void onAuthenticationFailure(HttpServletRequest request, HttpServletResponse response,
            AuthenticationException exception) throws IOException, ServletException {
        this.servletViewFactory.create(response)
            .render("login/error");
    }
    
}
