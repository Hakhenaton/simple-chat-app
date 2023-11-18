package fr.sncf.d2d.serversideapp.common.web;

import java.io.OutputStreamWriter;
import java.util.Locale;
import java.util.Map;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.web.servlet.View;
import org.springframework.web.servlet.ViewResolver;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.ViewResolverRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import com.github.mustachejava.DefaultMustacheFactory;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;

@Configuration
@EnableWebMvc
@RequiredArgsConstructor
public class WebConfiguration implements WebMvcConfigurer {

    private static final String TEMPLATES_LOCATION = "templates/";

    private static final String TEMPLATE_FILE_EXT = ".mustache";

    private final UserContextInterceptor userContextInterceptor;
    private final CsrfTokenInterceptor csrfTokenInterceptor;

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        registry.addResourceHandler("/**")
            .addResourceLocations("classpath:/public/");
    }

    @Override
    public void configureViewResolvers(ViewResolverRegistry registry) { 
        registry.viewResolver(mustacheViewResolver());
    }

    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(this.csrfTokenInterceptor);
        registry.addInterceptor(this.userContextInterceptor);
    }

    @Bean
    public ViewResolver mustacheViewResolver(){

        final var mustacheFactory = new DefaultMustacheFactory(TEMPLATES_LOCATION);

        return new ViewResolver() {

            @Override
            public View resolveViewName(String viewName, Locale locale) throws Exception {
                return new View() {

                    @Override
                    public void render(Map<String, ?> model, HttpServletRequest request, HttpServletResponse response) throws Exception {
                        final var mustache = mustacheFactory.compile(viewName + TEMPLATE_FILE_EXT);
                        try (final var responseWriter = new OutputStreamWriter(response.getOutputStream())){
                            response.setHeader(HttpHeaders.CONTENT_TYPE, MediaType.TEXT_HTML_VALUE);
                            mustache.execute(responseWriter, model).flush();
                        }
                    }
                };
            }
        };
    }
}
