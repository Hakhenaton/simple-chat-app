package fr.sncf.d2d.serversideapp.common.htmx.views;

import java.util.Collections;
import org.springframework.stereotype.Component;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;

/**
 * Utilitaire pour lancer des en-têtes de type HX-*.
 */
@Component
@RequiredArgsConstructor
public class HxCommands {
    
    private static final String HX_TRIGGER = "HX-Trigger";
    private static final String HX_RETARGET = "HX-Retarget";
    private static final String HX_RESWAP = "HX-Reswap";

    private final ObjectMapper objectMapper;
    private final HttpServletResponse response;
    
    public void emit(String name) {
        response.setHeader(HX_TRIGGER, name);
    }

    public void emit(String name, Object data) throws JsonProcessingException {
        final var serialized = this.objectMapper.writeValueAsString(Collections.singletonMap(name, data));
        response.setHeader(HX_TRIGGER, serialized);
    }

    public void retarget(String target) {
        response.setHeader(HX_RETARGET, target);
    }

    public void reswap(String strategy) {
        response.setHeader(HX_RESWAP, strategy);
    }
}
