package fr.sncf.d2d.serversideapp.security.filters;

import java.io.IOException;
import java.security.SecureRandom;
import java.util.HashSet;
import java.util.HexFormat;
import java.util.Set;
import java.util.stream.Collectors;

import jakarta.servlet.Filter;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.ServletRequest;
import jakarta.servlet.ServletResponse;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

/**
 * Génerer une valeur aléatoire stockée en session.
 * Cette valeur (nonce) est positionnée au niveau de l'attribut "nonce" des balises <script>.
 */
public class CspFilter implements Filter {

    private static final String CSP_HEADER = "Content-Security-Policy";

    public static final String SCRIPT_NONCE = CspFilter.class.getCanonicalName() + ".scriptNonce";

    private final SecureRandom random = new SecureRandom();

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
        
        if (!(request instanceof HttpServletRequest httpRequest) || !(response instanceof HttpServletResponse httpResponse)){
            chain.doFilter(request, response);
            return;
        }

        final var randomData = new byte[32];
        this.random.nextBytes(randomData);
        final var nonce = HexFormat.of().formatHex(randomData);
        httpRequest.getSession().setAttribute(SCRIPT_NONCE, nonce);

        httpResponse.setHeader(CSP_HEADER, new HashSet<String>(){{
            add("default-src 'none'");
            add(String.format("script-src 'strict-dynamic' 'nonce-%s'", nonce));
            add(String.format("style-src 'nonce-%s'", nonce));
            add(String.format("font-src 'nonce-%s' https://fonts.gstatic.com", nonce));
            add("img-src 'self'");
            add("connect-src 'self'");
        }}.stream().collect(Collectors.joining("; ")));

        chain.doFilter(request, response);
    }
    
}
