package fr.sncf.d2d.serversideapp.common.web;

import java.io.OutputStreamWriter;
import java.util.Locale;
import java.util.Map;

import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.web.servlet.View;
import org.springframework.web.servlet.ViewResolver;

import com.github.mustachejava.DefaultMustacheFactory;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

public class MustacheViewResolver implements ViewResolver {

    private static final String TEMPLATES_LOCATION = "templates/";

    private static final String TEMPLATE_FILE_EXT = ".mustache";

    private final DefaultMustacheFactory mustacheFactory = new DefaultMustacheFactory(TEMPLATES_LOCATION);

    @Override
    public View resolveViewName(String viewName, Locale locale) throws Exception {
        
        return new View() {

            @Override
            public void render(Map<String, ?> model, HttpServletRequest request, HttpServletResponse response) throws Exception {
                final var mustache = mustacheFactory.compile(viewName + TEMPLATE_FILE_EXT);
                try (final var responseWriter = new OutputStreamWriter(response.getOutputStream())){
                    mustache.execute(responseWriter, model).flush();
                }
            }

            @Override
            public String getContentType() {
                return MediaType.TEXT_HTML_VALUE;
            }
        };
    }
        
    
    
}
