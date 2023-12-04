package fr.sncf.d2d.serversideapp.security.web;

import java.io.IOException;
import java.util.Collections;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.stereotype.Component;

import fr.sncf.d2d.serversideapp.common.web.HxHttpServletViewFactory;
import fr.sncf.d2d.serversideapp.messaging.websocket.handlers.MessagingHandshakeInterceptor;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;

@Component
@RequiredArgsConstructor
public class ApplicationAuthenticationSuccessHandler implements AuthenticationSuccessHandler {

    private final HxHttpServletViewFactory servletViewFactory;

    @Override
    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response, 
        Authentication authentication) throws IOException, ServletException {

        final var partials = new HashMap<String, Map<String, Object>>();

        partials.putAll(Map.of(
            "main/navbar", Collections.singletonMap("oob", true),
            "login/success", Collections.emptyMap()
        ));

        Optional.ofNullable(request.getSession().getAttribute(MessagingHandshakeInterceptor.CHANNEL_ID_KEY))
            .ifPresent(channelId -> {
                partials.put(
                    "channels/channel", 
                    Map.of(
                        "oob", true,
                        "channelId", request.getSession().getAttribute(MessagingHandshakeInterceptor.CHANNEL_ID_KEY)
                    )
                );
            });

        this.servletViewFactory.create(response).render(partials);
    }

}
