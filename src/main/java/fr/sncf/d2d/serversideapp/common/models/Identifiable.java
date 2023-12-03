package fr.sncf.d2d.serversideapp.common.models;

import java.io.Serializable;
import java.util.Objects;
import java.util.UUID;

import lombok.Getter;
import lombok.Setter;
import lombok.experimental.SuperBuilder;

@Getter
@Setter
@SuperBuilder
public abstract class Identifiable implements Serializable {

    private static final long serialVersionUID = -6155629872739182L;
    
    protected UUID id;

    @Override
    public boolean equals(Object obj) {
        return obj != null && 
            this.getClass().isInstance(obj) && 
            ((Identifiable)obj).id != null && 
            this.id.equals(((Identifiable)obj).id);
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(this.id);
    }
}
