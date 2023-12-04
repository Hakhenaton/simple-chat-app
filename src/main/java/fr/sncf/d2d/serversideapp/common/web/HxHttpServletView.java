package fr.sncf.d2d.serversideapp.common.web;

import java.io.IOException;
import java.util.Map;

import org.springframework.context.annotation.Primary;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Component;

import fr.sncf.d2d.serversideapp.common.htmx.HxRenderer;
import fr.sncf.d2d.serversideapp.common.htmx.HxView;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;

/**
 * Implémentation d'une {@link HxView} prévue pour la couche Servlet classique (HTTP).
 * @apiNote L'injection de ce type de bean nécessite le scope "request" pour accéder à la réponse. Si le scope est indisponible, on pourra utiliser {@link HxHttpServletViewFactory}.
 */
@Primary
@Component
@RequiredArgsConstructor
public class HxHttpServletView implements HxView {
    
    private final HttpServletResponse response;
    private final HxRenderer renderer;

    @Override
    public void render(Map<String, Map<String, Object>> partials) throws IOException {
        response.setHeader(HttpHeaders.CONTENT_TYPE, MediaType.TEXT_HTML_VALUE);
        this.renderer.render(response.getOutputStream(), partials);
    }
}
