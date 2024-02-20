package fr.sncf.d2d.serversideapp.security.htmx;

import java.util.Collections;
import java.util.Map;
import java.util.Optional;

import org.springframework.stereotype.Component;

import fr.sncf.d2d.serversideapp.common.htmx.resolvers.HxResolver;
import fr.sncf.d2d.serversideapp.common.htmx.resolvers.HxResolverScope;
import fr.sncf.d2d.serversideapp.common.htmx.resolvers.Scoped;
import fr.sncf.d2d.serversideapp.security.filters.CspFilter;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;

@Component
@Scoped(HxResolverScope.HTTP)
@RequiredArgsConstructor
public class HttpCspNonceHxResolver implements HxResolver {

    private static final String NONCE_KEY = "nonce";

    private final HttpServletRequest request;

    @Override
    public Map<String, ? extends Object> resolve() {
        return Optional.ofNullable(this.request.getSession().getAttribute(CspFilter.SCRIPT_NONCE))
            .map(nonce -> Collections.singletonMap(NONCE_KEY, nonce))
            .orElseGet(Collections::emptyMap);
    }
    
}
