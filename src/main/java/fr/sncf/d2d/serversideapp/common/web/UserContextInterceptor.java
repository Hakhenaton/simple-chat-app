package fr.sncf.d2d.serversideapp.common.web;

import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

public class UserContextInterceptor implements HandlerInterceptor {
    
    private final String USER_KEY = "user";
    
    @Override
    public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler, ModelAndView modelAndView) throws Exception {
        if (modelAndView == null){
            return;
        }
        final var authentication = SecurityContextHolder.getContext().getAuthentication();
        
    }
}
