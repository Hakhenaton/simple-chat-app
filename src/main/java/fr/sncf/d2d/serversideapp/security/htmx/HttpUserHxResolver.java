package fr.sncf.d2d.serversideapp.security.htmx;

import java.util.Collections;
import java.util.Map;

import org.springframework.stereotype.Component;

import fr.sncf.d2d.serversideapp.common.htmx.resolvers.HxResolver;
import fr.sncf.d2d.serversideapp.common.htmx.resolvers.HxResolverScope;
import fr.sncf.d2d.serversideapp.common.htmx.resolvers.Scoped;
import fr.sncf.d2d.serversideapp.security.services.SecurityContextAuthenticationService;
import lombok.RequiredArgsConstructor;

@Component
@RequiredArgsConstructor
@Scoped(HxResolverScope.HTTP)
public class HttpUserHxResolver implements HxResolver {

    private static final String USER_KEY = "user";

    private final SecurityContextAuthenticationService securityContextAuthenticationService;

    @Override
    public Map<String, ? extends Object> resolve(){
        return this.securityContextAuthenticationService.currentUser()
            .map(user -> Collections.singletonMap(USER_KEY, user))
            .orElseGet(Collections::emptyMap);
    }
    
}
