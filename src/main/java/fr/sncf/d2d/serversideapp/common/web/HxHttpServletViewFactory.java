package fr.sncf.d2d.serversideapp.common.web;

import org.springframework.stereotype.Component;

import fr.sncf.d2d.serversideapp.common.htmx.HxRenderer;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;

@Component
@RequiredArgsConstructor
public class HxHttpServletViewFactory {
    
    private final HxRenderer renderer;

    public HxHttpServletView create(HttpServletResponse response){
        return new HxHttpServletView(response, this.renderer);
    }
}
