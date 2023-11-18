package fr.sncf.d2d.serversideapp.common.web;

import java.util.Collections;

import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import lombok.RequiredArgsConstructor;

@Controller
@RequestMapping("/")
@RequiredArgsConstructor
public class MainController {
   
    @GetMapping
    public ModelAndView home(){
        System.out.println(SecurityContextHolder.getContext().getAuthentication());
        return new ModelAndView("main/home");
    }

    @GetMapping("navbar")
    public ModelAndView navbar(){
        return new ModelAndView("main/navbar");
    }
}
