package fr.sncf.d2d.serversideapp.messaging.dtos;

import java.util.UUID;

import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class RemoveMessageDto extends MessagingDto {
    
    @NotNull
    private UUID messageId;
}
