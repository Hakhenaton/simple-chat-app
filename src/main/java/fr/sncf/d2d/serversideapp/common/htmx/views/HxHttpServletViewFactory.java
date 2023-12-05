package fr.sncf.d2d.serversideapp.common.htmx.views;

import java.util.Set;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;

import fr.sncf.d2d.serversideapp.common.htmx.resolvers.HxResolver;
import fr.sncf.d2d.serversideapp.common.htmx.resolvers.HxResolversConfiguration;
import jakarta.servlet.http.HttpServletResponse;

/**
 * Encapsule la création d'objets {@link HxHttpServletView}.
 * @apiNote Cette factory est à utiliser lorsque le scope "request" n'est pas disponible, sinon on peut injecter directement un objet {@link HxView}.
 */
@Component
public class HxHttpServletViewFactory {
    
    private final HxRenderer renderer;
    private final Set<HxResolver> resolvers;

    public HxHttpServletViewFactory(
        @Qualifier(HxResolversConfiguration.HTTP_RESOLVERS) Set<HxResolver> resolvers, 
        HxRenderer renderer) {
        this.renderer = renderer;
        this.resolvers = resolvers;
    }

    public HxHttpServletView forResponse(HttpServletResponse response){
        return new HxHttpServletView(
            response, 
            this.renderer,
            this.resolvers
        );
    }
}
