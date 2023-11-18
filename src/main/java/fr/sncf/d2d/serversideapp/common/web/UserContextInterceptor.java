package fr.sncf.d2d.serversideapp.common.web;

import java.util.Optional;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import fr.sncf.d2d.serversideapp.security.service.ApplicationUserDetails;
import fr.sncf.d2d.serversideapp.security.service.AuthenticationService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;

@Component
@RequiredArgsConstructor
public class UserContextInterceptor implements HandlerInterceptor {
    
    private final AuthenticationService authenticationService;

    private final String USER_KEY = "user";
    
    @Override
    public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler, ModelAndView modelAndView) throws Exception {
        if (modelAndView == null){
            return;
        }
        this.authenticationService.currentUser()
            .ifPresent(user -> {
                modelAndView.addObject(USER_KEY, user);
            });   
    }
}
