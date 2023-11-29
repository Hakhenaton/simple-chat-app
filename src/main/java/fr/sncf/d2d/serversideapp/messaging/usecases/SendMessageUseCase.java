package fr.sncf.d2d.serversideapp.messaging.usecases;

import java.io.IOException;
import java.util.Date;
import java.util.UUID;

import org.springframework.stereotype.Service;

import fr.sncf.d2d.serversideapp.common.exceptions.AccessDeniedException;
import fr.sncf.d2d.serversideapp.messaging.channels.ChannelsRepository;
import fr.sncf.d2d.serversideapp.messaging.channels.Message;
import fr.sncf.d2d.serversideapp.messaging.exceptions.BadMessageException;
import fr.sncf.d2d.serversideapp.messaging.exceptions.ChannelNotFoundException;
import fr.sncf.d2d.serversideapp.security.service.AuthenticationService;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service
public class SendMessageUseCase {
    
    private final ChannelsRepository channelsRepository;
    private final AuthenticationService authenticationService;

    public void send(UUID channelId, String content) throws AccessDeniedException, BadMessageException, ChannelNotFoundException, IOException {
        
        final var channel = this.channelsRepository.getChannel(channelId)
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
            .sentAt(new Date())
            .isDeleted(false)
            .build();

        for (final var client: channel.clients().values())
            client.getConnection().sendMessage(message);   
    }
}
