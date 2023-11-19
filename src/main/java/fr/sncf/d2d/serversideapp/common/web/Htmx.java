package fr.sncf.d2d.serversideapp.common.web;

import java.util.Collections;
import java.util.Locale;
import java.util.Map;

import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.ViewResolver;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;

@Component
@RequiredArgsConstructor
public class Htmx {

    private static final String HX_TRIGGER = "HX-Trigger";
    private static final String HX_RETARGET = "HX-Retarget";
    private static final String HX_RESWAP = "HX-Reswap";

    private final ObjectMapper objectMapper;
    private final ViewResolver viewResolver;
    
    public void emit(String name, HttpServletResponse response) {
        response.setHeader(HX_TRIGGER, name);
    }

    public void emit(String name, Object data, HttpServletResponse response) throws JsonProcessingException {
        final var serialized = this.objectMapper.writeValueAsString(Collections.singletonMap(name, data));
        response.setHeader(HX_TRIGGER, serialized);
    }

    public void retarget(String target, HttpServletResponse response) {
        response.setHeader(HX_RETARGET, target);
    }

    public void reswap(String strategy, HttpServletResponse response) {
        response.setHeader(HX_RESWAP, strategy);
    }

    public void render(String name, HttpServletRequest request, HttpServletResponse response) throws Exception{
        this.render(name, Collections.emptyMap(), request, response);
    }

    public void render(String name, Map<String, Object> data, HttpServletRequest request, HttpServletResponse response) throws Exception{
        this.render(Collections.singletonMap(name, data), request, response);
    }

    public void render(Map<String, Map<String, Object>> partials, HttpServletRequest request, HttpServletResponse response) throws Exception {
        response.setHeader(HttpHeaders.CONTENT_TYPE, MediaType.TEXT_HTML_VALUE);
        for (final var partial: partials.entrySet()){
            final var name = partial.getKey();
            final var data = partial.getValue();
            final var view = this.viewResolver.resolveViewName(name, response.getLocale());
            view.render(data, request, response);
        }
    }
}
