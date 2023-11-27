package fr.sncf.d2d.serversideapp.common.htmx;

import java.io.OutputStream;

import org.springframework.stereotype.Component;
import org.springframework.web.socket.WebSocketSession;

import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;

@Component
@RequiredArgsConstructor
public class HxViewFactory {

    private final HxRenderer renderer;
    
    public HxHttpServletView forHttpServlet(HttpServletResponse response){
        return new HxHttpServletView(response, this.renderer);
    }

    public HxWebSocketView forWebSocket(WebSocketSession session){
        return new HxWebSocketView(session, this.renderer);
    }
}
