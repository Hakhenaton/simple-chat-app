package fr.sncf.d2d.serversideapp.messaging.configuration;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import fr.sncf.d2d.serversideapp.messaging.channels.ChannelsRepository;
import fr.sncf.d2d.serversideapp.messaging.usecases.ConnectToChannelUseCase;
import fr.sncf.d2d.serversideapp.messaging.usecases.DisconnectFromChannelUseCase;
import fr.sncf.d2d.serversideapp.security.service.AuthenticationService;
import fr.sncf.d2d.serversideapp.security.service.WebSocketSessionAuthenticationService;
import lombok.RequiredArgsConstructor;

@Configuration
@RequiredArgsConstructor
public class MessagingConfiguration {
    
    private final ChannelsRepository channelsRepository;

    @Bean
    public ConnectToChannelUseCase connectToChannelUseCase(@Qualifier(WebSocketSessionAuthenticationService.BEAN_NAME) AuthenticationService authenticationService){
        return new ConnectToChannelUseCase(channelsRepository, authenticationService);
    }

    @Bean
    public DisconnectFromChannelUseCase disconnectFromChannelUseCase(@Qualifier(WebSocketSessionAuthenticationService.BEAN_NAME) AuthenticationService authenticationService){
        return new DisconnectFromChannelUseCase(this.channelsRepository);
    }
}
