package fr.sncf.d2d.serversideapp.common.htmx.views;

import java.io.IOException;
import java.util.Map;
import java.util.Set;

import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;

import fr.sncf.d2d.serversideapp.common.htmx.resolvers.HxResolver;
import jakarta.servlet.http.HttpServletResponse;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;

/**
 * Implémentation d'une {@link HxView} prévue pour la couche Servlet classique (HTTP).
 * @apiNote L'injection de ce type de bean nécessite que le scope "request" soit actif pour accéder à la réponse. Si le scope est indisponible, on pourra utiliser {@link HxHttpServletViewFactory}.
 */
@RequiredArgsConstructor(access = AccessLevel.PACKAGE)
public class HxHttpServletView implements HxView {
    
    private final HttpServletResponse response;
    private final HxRenderer renderer;
    private final Set<HxResolver> resolvers;

    @Override
    public void render(Map<String, Map<String, Object>> partials) throws IOException {
        response.setHeader(HttpHeaders.CONTENT_TYPE, MediaType.TEXT_HTML_VALUE);
        this.renderer.render(response.getOutputStream(), partials, this.resolvers);
    }
}
