package fr.sncf.d2d.serversideapp.common.web;

import org.springframework.stereotype.Component;

import fr.sncf.d2d.serversideapp.common.htmx.HxRenderer;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;

/**
 * Encapsule la création d'objets {@link HxHttpServletView}.
 * @apiNote Cette factory est à utiliser lorsque le scope "request" n'est pas disponible, sinon on peut injecter directement un objet {@link HxView}.
 */
@Component
@RequiredArgsConstructor
public class HxHttpServletViewFactory {
    
    private final HxRenderer renderer;

    public HxHttpServletView create(HttpServletResponse response){
        return new HxHttpServletView(response, this.renderer);
    }
}
