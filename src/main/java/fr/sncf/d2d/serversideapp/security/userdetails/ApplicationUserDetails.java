package fr.sncf.d2d.serversideapp.security.userdetails;

import java.util.Collection;
import java.util.Collections;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import fr.sncf.d2d.serversideapp.users.models.User;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Getter
public class ApplicationUserDetails implements UserDetails {

    private static final long serialVersionUID = 1900266451894782778L;

    private final User domainUser;

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return Collections.singleton(this.domainUser.getRole()::name);
    }

    @Override
    public String getPassword() {
        return this.domainUser.getPassword();
    }

    @Override
    public String getUsername() {
        return this.domainUser.getUsername();
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
    
}
