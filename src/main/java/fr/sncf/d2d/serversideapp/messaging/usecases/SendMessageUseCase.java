package fr.sncf.d2d.serversideapp.messaging.usecases;

import java.io.IOException;
import java.util.Date;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import fr.sncf.d2d.serversideapp.common.exceptions.AccessDeniedException;
import fr.sncf.d2d.serversideapp.messaging.channels.ChannelsRepository;
import fr.sncf.d2d.serversideapp.messaging.channels.Message;
import fr.sncf.d2d.serversideapp.messaging.exceptions.BadMessageException;
import fr.sncf.d2d.serversideapp.messaging.exceptions.ChannelNotFoundException;
import fr.sncf.d2d.serversideapp.messaging.persistence.MessagesRepository;
import fr.sncf.d2d.serversideapp.messaging.services.WebSocketSessionAuthenticationService;
import fr.sncf.d2d.serversideapp.security.services.AuthenticationService;

@Service
public class SendMessageUseCase {
    
    private final ChannelsRepository channelsRepository;
    private final AuthenticationService authenticationService;
    private final MessagesRepository messagesRepository;

    public SendMessageUseCase(
        ChannelsRepository channelsRepository, 
        @Qualifier(WebSocketSessionAuthenticationService.BEAN_NAME)
        AuthenticationService authenticationService,
        MessagesRepository messagesRepository
    ) {
        this.channelsRepository = channelsRepository;
        this.authenticationService = authenticationService;
        this.messagesRepository = messagesRepository;
    }

    public void send(UUID channelId, String content) throws AccessDeniedException, BadMessageException, ChannelNotFoundException, IOException {
        
        final var channel = this.channelsRepository.findById(channelId)
            .orElseThrow(ChannelNotFoundException::new);

        final var user = this.authenticationService.currentUser()
            .orElseThrow(AccessDeniedException::new);

        final var isConnected = channel.clients()
            .values()
            .stream()
            .anyMatch(client -> client.getUser()
                .map(connectedUser -> connectedUser.equals(user))
                .orElse(false)
            );

        if (!isConnected)
            throw new AccessDeniedException();

        final var sanitizedMessage = content.trim();

        if (sanitizedMessage.length() == 0)
            throw new BadMessageException();

        final var message = Message.builder()
            .content(sanitizedMessage)
            .authorId(user.getId())
            .channelId(channelId)
            .sentAt(new Date())
            .isDeleted(false)
            .build();

        this.messagesRepository.save(message);

        for (final var client: channel.clients().values())
            client.getConnection().sendMessage(message, user);   

    }
}
