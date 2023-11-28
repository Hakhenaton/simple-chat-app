package fr.sncf.d2d.serversideapp.common.htmx;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;
import org.springframework.context.annotation.Scope;
import org.springframework.context.annotation.ScopedProxyMode;
import org.springframework.web.context.annotation.RequestScope;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.client.standard.WebSocketContainerFactoryBean;

import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;

@Configuration
@RequiredArgsConstructor
public class HxConfiguration {

    public static final String HTTP_RENDERER = "httpServletRenderer";
    public static final String WS_RENDERER = "webSocketRenderer"; 
    
    private final HxViewFactory rendererFactory;

    @Bean(HTTP_RENDERER)
    @Primary
    @RequestScope
    public HxHttpServletView httpServletRenderer(HttpServletResponse response){
        return this.rendererFactory.forHttpServlet(response);
    }

    @Bean(WS_RENDERER)
    @Scope(scopeName = "websocket", proxyMode = ScopedProxyMode.TARGET_CLASS)
    public HxWebSocketView webSocketRenderer(WebSocketSession session){
        return this.rendererFactory.forWebSocket(session);
    }
}
