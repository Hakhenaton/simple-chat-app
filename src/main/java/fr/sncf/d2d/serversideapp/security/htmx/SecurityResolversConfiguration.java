package fr.sncf.d2d.serversideapp.security.htmx;

import java.util.Collections;
import java.util.Optional;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.context.request.RequestAttributes;
import org.springframework.web.context.request.RequestContextHolder;

import fr.sncf.d2d.serversideapp.common.htmx.HxResolver;
import fr.sncf.d2d.serversideapp.security.service.AuthenticationService;

@Configuration
public class SecurityResolversConfiguration {

    private static final String USER_KEY = "user";

    private static final String CSRF_KEY = "csrf";
    private static final String CSRF_REQUEST_ATTRIBUTE = "_csrf";
    
    @Bean
    public HxResolver userContextResolver(AuthenticationService authenticationService){
        return () -> authenticationService.currentUser()
            .map(user -> Collections.singletonMap(USER_KEY, user))
            .orElseGet(Collections::emptyMap);
    }

    @Bean
    public HxResolver csrfTokenResolver(){
        return () -> Optional.ofNullable(RequestContextHolder.getRequestAttributes()) 
            .flatMap(attributes -> Optional.ofNullable(
                attributes.getAttribute(
                    CSRF_REQUEST_ATTRIBUTE, 
                    RequestAttributes.SCOPE_REQUEST
                )
            ))
            .map(token -> Collections.singletonMap(CSRF_KEY, token))
            .orElseGet(Collections::emptyMap);
    }
}
