package fr.sncf.d2d.serversideapp.common.web;

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
    public ModelAndView main(){
        return new ModelAndView("main");
    }

    @GetMapping("navbar")
    public ModelAndView navbar(){
        return new ModelAndView("navbar");
    }
}
