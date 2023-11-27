package fr.sncf.d2d.serversideapp.common.web;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import fr.sncf.d2d.serversideapp.common.htmx.HxView;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/")
@RequiredArgsConstructor
public class MainController {

    private final HxView view;
   
    @GetMapping
    public void home() throws Exception {
        this.view.render("main/home");
    }
}
