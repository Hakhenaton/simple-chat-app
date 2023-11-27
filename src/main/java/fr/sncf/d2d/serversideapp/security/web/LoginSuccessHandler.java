package fr.sncf.d2d.serversideapp.security.web;

import java.io.IOException;
import java.util.Collections;
import java.util.Map;

import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.stereotype.Component;

import fr.sncf.d2d.serversideapp.common.htmx.HxViewFactory;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;

@Component
@RequiredArgsConstructor
public class LoginSuccessHandler implements AuthenticationSuccessHandler {

    private final HxViewFactory viewFactory;

    @Override
    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response, 
        Authentication authentication) throws IOException, ServletException {
        this.viewFactory.forHttpServlet(response).render(
            Map.of(
                "main/navbar", Collections.singletonMap("oob", true),
                "login/success", Collections.emptyMap()
            )
        );
    }

}
