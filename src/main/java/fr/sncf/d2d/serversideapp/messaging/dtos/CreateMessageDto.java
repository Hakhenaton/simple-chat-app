package fr.sncf.d2d.serversideapp.messaging.dtos;

import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CreateMessageDto extends MessagingDto {
    
    @NotBlank
    private String message;
}
