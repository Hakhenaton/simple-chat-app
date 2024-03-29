package fr.sncf.d2d.serversideapp.security.web;

import java.io.IOException;
import java.util.Collections;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.stereotype.Component;

import fr.sncf.d2d.serversideapp.common.htmx.views.HxHttpServletViewFactory;
import fr.sncf.d2d.serversideapp.messaging.websocket.handlers.ChannelIdHandshakeInterceptor;
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

        final var fragments = new HashMap<String, Map<String, Object>>();

        fragments.putAll(Map.of(
            "navbar/navbar", Collections.singletonMap("oob", true),
            "login/success", Collections.emptyMap()
        ));

        Optional.ofNullable(request.getSession().getAttribute(ChannelIdHandshakeInterceptor.CHANNEL_ID_KEY))
            .ifPresent(channelId -> {
                fragments.put(
                    "channels/channel", 
                    Map.of(
                        "oob", true,
                        "channelId", channelId
                    )
                );
            });

        this.servletViewFactory.forResponse(response).render(fragments);
    }

}
