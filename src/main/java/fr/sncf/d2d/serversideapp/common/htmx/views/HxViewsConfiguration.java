package fr.sncf.d2d.serversideapp.common.htmx.views;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.context.annotation.RequestScope;

import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;


@Configuration
@RequiredArgsConstructor
public class HxViewsConfiguration {
    
    private final HxHttpServletViewFactory httpServletViewFactory;

    @Bean
    @RequestScope
    HxHttpServletView servletView(HttpServletResponse response){
        return this.httpServletViewFactory.forResponse(response);
    } 
}
