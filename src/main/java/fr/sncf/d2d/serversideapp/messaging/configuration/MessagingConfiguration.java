package fr.sncf.d2d.serversideapp.messaging.configuration;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import fr.sncf.d2d.serversideapp.messaging.channels.ChannelsRepository;
import fr.sncf.d2d.serversideapp.messaging.usecases.ConnectToChannelUseCase;
import fr.sncf.d2d.serversideapp.messaging.usecases.DisconnectFromChannelUseCase;
import fr.sncf.d2d.serversideapp.security.service.AuthenticationService;
import fr.sncf.d2d.serversideapp.security.service.WebSocketSessionAuthenticationService;

@Configuration
public class MessagingConfiguration {
    

    @Bean
    public ConnectToChannelUseCase connectToChannelUseCase(
        ChannelsRepository channelsRepository, 
        @Qualifier(WebSocketSessionAuthenticationService.BEAN_NAME) AuthenticationService authenticationService){
        return new ConnectToChannelUseCase(channelsRepository, authenticationService);
    }

    @Bean
    public DisconnectFromChannelUseCase disconnectFromChannelUseCase(){
        
    }
}
