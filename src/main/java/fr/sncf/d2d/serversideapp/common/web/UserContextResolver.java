package fr.sncf.d2d.serversideapp.common.web;

import java.util.Collections;
import java.util.Map;

import org.springframework.stereotype.Component;
import fr.sncf.d2d.serversideapp.common.htmx.HxResolver;
import fr.sncf.d2d.serversideapp.security.service.AuthenticationService;
import lombok.RequiredArgsConstructor;

@Component
@RequiredArgsConstructor
public class UserContextResolver implements HxResolver {

    private static final String USER_KEY = "user";
    
    private final AuthenticationService authenticationService;

    @Override
    public Map<String, ? extends Object> resolve(){
        return this.authenticationService.currentUser()
            .map(user -> Collections.singletonMap(USER_KEY, user))
            .orElseGet(Collections::emptyMap);
    }
}
