package fr.sncf.d2d.serversideapp.common.web;

import java.util.Collections;
import java.util.Map;

import org.springframework.stereotype.Component;
import org.springframework.web.context.request.RequestAttributes;
import org.springframework.web.context.request.RequestContextHolder;

import fr.sncf.d2d.serversideapp.common.htmx.HxResolver;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Component
public class CsrfTokenResolver implements HxResolver {

    private static final String VIEW_KEY = "csrf";
    private static final String REQUEST_ATTRIBUTE = "_csrf";

    @Override
    public Map<String, ? extends Object> resolve() {
        return Collections.singletonMap(
            VIEW_KEY, 
            RequestContextHolder.currentRequestAttributes()
                .getAttribute(REQUEST_ATTRIBUTE, RequestAttributes.SCOPE_REQUEST)
        );
    }
}
