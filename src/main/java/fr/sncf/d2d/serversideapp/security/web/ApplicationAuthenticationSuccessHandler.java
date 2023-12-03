package fr.sncf.d2d.serversideapp.security.web;

import java.io.IOException;
import java.util.Collections;
import java.util.Map;

import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.stereotype.Component;

import fr.sncf.d2d.serversideapp.common.web.HxHttpServletViewFactory;
import fr.sncf.d2d.serversideapp.messaging.websocket.MessagingHandshakeInterceptor;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;

@Component
@RequiredArgsConstructor
public class ApplicationAuthenticationSuccessHandler implements AuthenticationSuccessHandler {

    private static final String OOB_KEY = "oob";
    private static final String CHANNEL_ID_KEY = "channelId";

    private final HxHttpServletViewFactory servletViewFactory;

    @Override
    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response, 
        Authentication authentication) throws IOException, ServletException {
        this.servletViewFactory.create(response).render(
            Map.of(
                "channels/channel", Map.of(
                    OOB_KEY, true,
                    CHANNEL_ID_KEY, request.getSession().getAttribute(MessagingHandshakeInterceptor.CHANNEL_ID_KEY)
                ),
                "main/navbar", Collections.singletonMap(OOB_KEY, true),
                "login/success", Collections.emptyMap()
            )
        );
    }

}
