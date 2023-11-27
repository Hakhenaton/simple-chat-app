package fr.sncf.d2d.serversideapp.common.htmx;

import java.io.IOException;
import java.util.Map;

import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;

import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public class HxHttpServletView implements HxView {
    
    private final HttpServletResponse response;
    private final HxRenderer renderer;

    @Override
    public void render(Map<String, Map<String, Object>> partials) throws IOException {
        response.setHeader(HttpHeaders.CONTENT_TYPE, MediaType.TEXT_HTML_VALUE);
        this.renderer.render(response.getOutputStream(), partials);
    }
}
