package fr.sncf.d2d.serversideapp.common.web;

import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Component
public class CsrfTokenInterceptor implements HandlerInterceptor {

    private static final String VIEW_KEY = "csrf";
    private static final String REQUEST_ATTRIBUTE = "_csrf";

    @Override
    public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler, ModelAndView modelAndView) throws Exception {
        
        if (modelAndView == null){
            return;
        }

        modelAndView.addObject(VIEW_KEY, request.getAttribute(REQUEST_ATTRIBUTE));
    }
}
