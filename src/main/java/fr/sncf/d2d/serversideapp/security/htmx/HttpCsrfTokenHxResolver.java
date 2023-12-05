package fr.sncf.d2d.serversideapp.security.htmx;

import java.util.Collections;
import java.util.Map;
import java.util.Optional;

import org.springframework.security.web.csrf.CsrfToken;
import org.springframework.stereotype.Component;
import org.springframework.web.context.request.RequestAttributes;
import org.springframework.web.context.request.RequestContextHolder;

import fr.sncf.d2d.serversideapp.common.htmx.resolvers.HxResolver;
import fr.sncf.d2d.serversideapp.common.htmx.resolvers.HxResolverScope;
import fr.sncf.d2d.serversideapp.common.htmx.resolvers.Scoped;

@Component
@Scoped(HxResolverScope.HTTP)
public class HttpCsrfTokenHxResolver implements HxResolver {

    private static final String CSRF_REQUEST_ATTRIBUTE = "_csrf";
    private static final String CSRF_KEY = "csrf";

    @Override
    public Map<String, ? extends Object> resolve() {
        return Optional.ofNullable(RequestContextHolder.getRequestAttributes()) 
            .map(attributes -> (CsrfToken)attributes.getAttribute(CSRF_REQUEST_ATTRIBUTE, RequestAttributes.SCOPE_REQUEST))
            .map(token -> Collections.singletonMap(CSRF_KEY, token))
            .orElseGet(Collections::emptyMap);
    }
    
    
}
