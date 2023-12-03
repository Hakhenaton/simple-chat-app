package fr.sncf.d2d.serversideapp.messaging.usecases;

import java.io.IOException;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import fr.sncf.d2d.serversideapp.common.exceptions.AccessDeniedException;
import fr.sncf.d2d.serversideapp.messaging.channels.ChannelsRepository;
import fr.sncf.d2d.serversideapp.messaging.exceptions.ChannelNotFoundException;
import fr.sncf.d2d.serversideapp.messaging.exceptions.MessageNotFoundException;
import fr.sncf.d2d.serversideapp.messaging.persistence.MessagesRepository;
import fr.sncf.d2d.serversideapp.security.services.AuthenticationService;
import fr.sncf.d2d.serversideapp.security.services.WebSocketSessionAuthenticationService;
import fr.sncf.d2d.serversideapp.users.models.Role;

@Service
public class RemoveMessageUseCase {

    private final ChannelsRepository channelsRepository;
    private final MessagesRepository repository;
    private final AuthenticationService authenticationService;

    public RemoveMessageUseCase(
        MessagesRepository messagesRepository, 
        @Qualifier(WebSocketSessionAuthenticationService.BEAN_NAME)
        AuthenticationService authenticationService,
        ChannelsRepository channelsRepository
    ) {
        this.repository = messagesRepository;
        this.channelsRepository = channelsRepository;
        this.authenticationService = authenticationService;
    }

    public void remove(UUID messageId) throws MessageNotFoundException, AccessDeniedException, ChannelNotFoundException, IOException {

        final var user = this.authenticationService.currentUser()
            .orElseThrow(AccessDeniedException::new);

        final var message = this.repository.findById(messageId)
            .orElseThrow(MessageNotFoundException::new);

        final var channel = this.channelsRepository.findById(message.getChannelId())
            .orElseThrow(ChannelNotFoundException::new);

        if (!message.getAuthorId().equals(user.getId()) || !user.getRole().equals(Role.ADMINISTRATOR))
            throw new AccessDeniedException();
        
        this.repository.markDeleted(message);

        for (final var client: channel.clients().values())
            client.getEventHandlers().getOnMessageDeleted().handle(messageId);
    }
}
