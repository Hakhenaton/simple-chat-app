package fr.sncf.d2d.serversideapp.security.configuration;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.csrf.XorCsrfTokenRequestAttributeHandler;
import org.springframework.security.web.header.HeaderWriterFilter;

import fr.sncf.d2d.serversideapp.security.filters.CspFilter;
import fr.sncf.d2d.serversideapp.security.web.ApplicationAuthenticationFailureHandler;
import fr.sncf.d2d.serversideapp.security.web.ApplicationAuthenticationSuccessHandler;
import fr.sncf.d2d.serversideapp.security.web.ApplicationLogoutSuccessHandler;
import lombok.RequiredArgsConstructor;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class SecurityConfiguration {

    private final ApplicationAuthenticationSuccessHandler loginSuccessHandler;
    private final ApplicationAuthenticationFailureHandler loginFailureHandler;
    private final ApplicationLogoutSuccessHandler logoutSuccessHandler;

    @Bean
    SecurityFilterChain securityFilterChain(HttpSecurity httpSecurity) throws Exception {
        return httpSecurity
            .formLogin(login -> login
                .loginPage("/login")
                .successHandler(this.loginSuccessHandler)
                .failureHandler(this.loginFailureHandler)
            )
            .logout(logout -> logout
                .logoutUrl("/logout")
                .logoutSuccessHandler(this.logoutSuccessHandler)
                .invalidateHttpSession(false)
            )
            .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.ALWAYS))
            .csrf(csrf -> csrf.csrfTokenRequestHandler(new XorCsrfTokenRequestAttributeHandler()))
            .authorizeHttpRequests(requests -> requests.anyRequest().permitAll())
            .addFilterAfter(new CspFilter(), HeaderWriterFilter.class)
            .build();
    }

    @Bean
    PasswordEncoder passwordEncoder(){
        return new BCryptPasswordEncoder();
    }
}
