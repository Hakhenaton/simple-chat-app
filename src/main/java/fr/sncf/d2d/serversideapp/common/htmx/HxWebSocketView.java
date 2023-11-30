package fr.sncf.d2d.serversideapp.common.htmx;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.util.Map;

import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public class HxWebSocketView implements HxView {

    private static final int DEFAULT_OUTPUT_ALLOC_SIZE = 8192; 

    @Getter
    private final WebSocketSession session;
    
    private final HxRenderer renderer;

    @Override
    public void render(Map<String, Map<String, Object>> partials) throws IOException {
        final var responseStream = new ByteArrayOutputStream(DEFAULT_OUTPUT_ALLOC_SIZE);
        renderer.render(responseStream, partials);
        this.session.sendMessage(new TextMessage(responseStream.toString(StandardCharsets.UTF_8)));
    }
}
