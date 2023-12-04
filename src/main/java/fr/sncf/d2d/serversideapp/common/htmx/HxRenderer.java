package fr.sncf.d2d.serversideapp.common.htmx;

import java.io.IOException;
import java.io.OutputStream;
import java.io.OutputStreamWriter;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Component;

import com.github.mustachejava.DefaultMustacheFactory;

import lombok.RequiredArgsConstructor;

/**
 * Implémentation du rendu d'un template HTMX via un {@link OutputStream}.
 */
@Component
@RequiredArgsConstructor
public class HxRenderer {

    private static final String TEMPLATES_LOCATION = "templates/";

    private static final String TEMPLATE_FILE_EXT = ".mustache";

    private final DefaultMustacheFactory mustacheFactory = new DefaultMustacheFactory(TEMPLATES_LOCATION);

    private final List<HxResolver> resolvers;
    
    public void render(OutputStream stream, Map<String, Map<String, Object>> partials) throws IOException {
        final var data = new HashMap<String, Object>();

        for (final var resolver: this.resolvers)
            data.putAll(resolver.resolve());

        try(final var writer = new OutputStreamWriter(stream)){
            for (final var partial: partials.entrySet()){
                final var name = partial.getKey();
                data.putAll(partial.getValue());
                final var mustache = mustacheFactory.compile(name + TEMPLATE_FILE_EXT);
                mustache.execute(writer, data);
            }
        }
    }
}
