package fr.sncf.d2d.serversideapp.messaging.usecases;

import java.io.IOException;
import java.util.Date;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import fr.sncf.d2d.serversideapp.messaging.channels.exceptions.ChannelNotFoundException;
import fr.sncf.d2d.serversideapp.messaging.channels.persistence.ChannelsRepository;
import fr.sncf.d2d.serversideapp.messaging.messages.exceptions.BadMessageException;
import fr.sncf.d2d.serversideapp.messaging.messages.models.Message;
import fr.sncf.d2d.serversideapp.messaging.messages.persistence.MessagesRepository;
import fr.sncf.d2d.serversideapp.security.exceptions.AccessDeniedException;
import fr.sncf.d2d.serversideapp.security.services.AuthenticationService;
import fr.sncf.d2d.serversideapp.security.services.WebSocketSessionAuthenticationService;

@Service
public class SendMessageUseCase {

    private static final long MAX_MESSAGE_SIZE = 10_000;
    
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
            .anyMatch(client -> client.getUser().filter(connectedUser -> connectedUser.equals(user)).isPresent());

        if (!isConnected)
            throw new AccessDeniedException();

        if (content.isBlank())
            throw new BadMessageException();

        if (content.length() > MAX_MESSAGE_SIZE)
            throw new BadMessageException();

        final var sanitizedMessage = content.trim();

        final var message = Message.builder()
            .content(sanitizedMessage)
            .authorId(user.getId())
            .channelId(channelId)
            .sentAt(new Date())
            .isDeleted(false)
            .build();

        this.messagesRepository.save(message);

        for (final var client: channel.clients().values())
            client.getEventHandlers().getOnMessage().handle(message, user);   

    }
}
