package fr.sncf.d2d.serversideapp.common.htmx;

import java.io.IOException;
import java.util.Collections;
import java.util.Map;

public interface HxView {

    void render(Map<String, Map<String, Object>> partials) throws IOException;
    
    default void render(String name) throws IOException {
        this.render(name, Collections.emptyMap());
    }

    default void render(String name, Map<String, Object> data) throws IOException {
        this.render(Collections.singletonMap(name, data));
    }
}
