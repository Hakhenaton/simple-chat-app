package fr.sncf.d2d.serversideapp.security.htmx;

import java.util.Collections;
import java.util.Optional;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.web.csrf.CsrfToken;
import org.springframework.web.context.request.RequestAttributes;
import org.springframework.web.context.request.RequestContextHolder;

import fr.sncf.d2d.serversideapp.common.htmx.HxResolver;
import fr.sncf.d2d.serversideapp.security.services.AuthenticationService;

@Configuration
public class SecurityResolversConfiguration {

    private static final String USER_KEY = "user";

    private static final String CSRF_KEY = "csrf";
    private static final String CSRF_REQUEST_ATTRIBUTE = "_csrf";
    
    /**
     * @return Un {@link HxResolver} prévu pour résoudre l'utilisateur connecté.
     */
    @Bean
    HxResolver userContextResolver(AuthenticationService authenticationService){
        return () -> authenticationService.currentUser()
            .map(user -> Collections.singletonMap(USER_KEY, user))
            .orElseGet(Collections::emptyMap);
    }

    /**
     * @return Un {@link HxResolver} prévu pour récupérer les informations liées au token CSRF.
     */
    @Bean
    HxResolver csrfTokenResolver(){
        return () -> Optional.ofNullable(RequestContextHolder.getRequestAttributes()) 
            .map(attributes -> (CsrfToken)attributes.getAttribute(CSRF_REQUEST_ATTRIBUTE, RequestAttributes.SCOPE_REQUEST))
            .map(token -> Collections.singletonMap(CSRF_KEY, token))
            .orElseGet(Collections::emptyMap);
    }
}
