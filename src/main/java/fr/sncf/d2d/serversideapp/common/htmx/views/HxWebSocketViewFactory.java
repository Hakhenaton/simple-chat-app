package fr.sncf.d2d.serversideapp.common.htmx.views;


import java.util.Set;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;
import org.springframework.web.socket.WebSocketSession;

import fr.sncf.d2d.serversideapp.common.htmx.resolvers.HxResolver;
import fr.sncf.d2d.serversideapp.common.htmx.resolvers.HxResolversConfiguration;

@Component
public class HxWebSocketViewFactory {

    private final HxRenderer hxRenderer;
    private final Set<HxResolver> hxResolvers;

    public HxWebSocketViewFactory(@Qualifier(HxResolversConfiguration.WS_RESOLVERS) Set<HxResolver> hxResolvers, HxRenderer hxRenderer) {
        System.out.println("ws resolver: " + hxResolvers.size());
        for (final var resolver: hxResolvers){
            System.out.println(resolver.getClass().getCanonicalName());
        }
        this.hxRenderer = hxRenderer;
        this.hxResolvers = hxResolvers;
    }

    public HxWebSocketView forSession(WebSocketSession session){
        return new HxWebSocketView(session, this.hxRenderer, this.hxResolvers);
    }
}
