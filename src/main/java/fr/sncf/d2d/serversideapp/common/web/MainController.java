package fr.sncf.d2d.serversideapp.common.web;

import java.util.Collections;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import fr.sncf.d2d.serversideapp.common.htmx.HxView;
import fr.sncf.d2d.serversideapp.messaging.channels.persistence.GlobalChannelRepository;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/")
@RequiredArgsConstructor
public class MainController {

    private static final String CHANNEL_ID_KEY = "channelId";

    private final HxView view;
   
    @GetMapping
    public void home() throws Exception {
        this.view.render(
            "main/home", 
            Collections.singletonMap(
                CHANNEL_ID_KEY, GlobalChannelRepository.GLOBAL_CHANNEL_ID
            )
        );
    }
}
