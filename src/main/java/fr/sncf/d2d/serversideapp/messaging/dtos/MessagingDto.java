package fr.sncf.d2d.serversideapp.messaging.dtos;

import com.fasterxml.jackson.annotation.JsonSubTypes;
import com.fasterxml.jackson.annotation.JsonTypeInfo;
import com.fasterxml.jackson.annotation.JsonSubTypes.Type;
import com.fasterxml.jackson.annotation.JsonTypeInfo.Id;

@JsonTypeInfo(
    property = "type",
    include = JsonTypeInfo.As.PROPERTY,
    use = Id.NAME
)
@JsonSubTypes({
    @Type(value = CreateMessageDto.class, name = "create-message"),
    @Type(value = RemoveMessageDto.class, name = "delete-message")
})
public abstract class MessagingDto {}
