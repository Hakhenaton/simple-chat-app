package fr.sncf.d2d.serversideapp.common.web;

import java.util.Collections;

import org.springframework.stereotype.Component;

import com.fasterxml.jackson.databind.ObjectMapper;

import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;

@Component
@RequiredArgsConstructor
public class HxHelpers {

    private static final String HX_TRIGGER = "HX-Trigger";
    private static final String HX_RETARGET = "HX-Retarget";
    private static final String HX_RESWAP = "HX-Reswap";

    private final ObjectMapper objectMapper;
    
    public void sendEvent(String name, HttpServletResponse response) throws Exception {
        response.setHeader(HX_TRIGGER, name);
    }

    public void sendEventWithData(String name, Object data, HttpServletResponse response) throws Exception {
        final var serialized = this.objectMapper.writeValueAsString(Collections.singletonMap(name, data));
        response.setHeader(HX_TRIGGER, serialized);
    }

    public void retarget(String target, HttpServletResponse response) throws Exception {
        response.setHeader(HX_RETARGET, target);
    }

    public void reswap(String strategy, HttpServletResponse response) throws Exception {
        response.setHeader(HX_RESWAP, strategy);
    }
}
