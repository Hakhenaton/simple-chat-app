package fr.sncf.d2d.serversideapp.common.templates;

import java.io.IOException;
import java.io.Writer;
import java.util.Map;

import org.springframework.stereotype.Component;

import com.github.mustachejava.DefaultMustacheFactory;

@Component
public class MustacheTemplateService { 

    private static final String TEMPLATES_LOCATION = "templates/";

    private static final String TEMPLATE_FILE_EXT = ".mustache";

    private final DefaultMustacheFactory mustacheFactory = new DefaultMustacheFactory(TEMPLATES_LOCATION);

    public void writeTemplate(String name, Map<String, Object> model, Writer writer) throws IOException {
        final var mustache = mustacheFactory.compile(name + TEMPLATE_FILE_EXT);
        mustache.execute(writer, model).flush();
    } 
}
