package fr.sncf.d2d.serversideapp.common.web;

import java.util.Optional;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import fr.sncf.d2d.serversideapp.security.service.ApplicationUserDetails;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

public class UserContextInterceptor implements HandlerInterceptor {
    
    private final String USER_KEY = "user";
    
    @Override
    public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler, ModelAndView modelAndView) throws Exception {
        if (modelAndView == null){
            return;
        }
        final var maybeUser = Optional.ofNullable(SecurityContextHolder.getContext().getAuthentication())
            .map(Authentication::getPrincipal)
            .flatMap(principal -> principal instanceof ApplicationUserDetails
                ? Optional.of(((ApplicationUserDetails)principal).getDomainUser())
                : Optional.empty()
            );
        
        maybeUser.ifPresent(user -> modelAndView.addObject(USER_KEY, user));   
    }
}
