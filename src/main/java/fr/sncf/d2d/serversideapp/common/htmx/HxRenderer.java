package fr.sncf.d2d.serversideapp.common.htmx;

import java.io.IOException;
import java.io.OutputStream;
import java.io.OutputStreamWriter;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Component;

import fr.sncf.d2d.serversideapp.common.templates.MustacheTemplateService;
import lombok.RequiredArgsConstructor;

@Component
@RequiredArgsConstructor
public class HxRenderer {

    private final MustacheTemplateService mustache;
    private final List<HxResolver> resolvers;
    
    public void render(OutputStream stream, Map<String, Map<String, Object>> partials) throws IOException {
        final var data = new HashMap<String, Object>();

        for (final var resolver: this.resolvers)
            data.putAll(resolver.resolve());

        try(final var writer = new OutputStreamWriter(stream)){
            for (final var partial: partials.entrySet()){
                final var name = partial.getKey();
                data.putAll(partial.getValue());
                this.mustache.writeTemplate(name, data, writer);
            }
        }
    }
}
