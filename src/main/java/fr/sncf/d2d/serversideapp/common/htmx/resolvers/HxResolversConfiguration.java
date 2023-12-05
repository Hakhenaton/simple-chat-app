package fr.sncf.d2d.serversideapp.common.htmx.resolvers;

import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class HxResolversConfiguration {
    
    public static final String HTTP_RESOLVERS = "httpHxResolvers";
    public static final String WS_RESOLVERS = "wsHxResolvers";

    @Bean
    @Qualifier(HTTP_RESOLVERS)
    Set<HxResolver> httpResolvers(List<HxResolver> resolvers){
        return this.filterScopedResolvers(resolvers, HxResolverScope.HTTP);
    }

    @Bean
    @Qualifier(WS_RESOLVERS)
    Set<HxResolver> wsResolvers(List<HxResolver> resolvers){
        return this.filterScopedResolvers(resolvers, HxResolverScope.WEBSOCKET);
    }

    private Set<HxResolver> filterScopedResolvers(List<HxResolver> resolvers, HxResolverScope requestedScope){
        return resolvers.stream()
            .filter(resolver -> {
                final var scoped = resolver.getClass().getDeclaredAnnotation(Scoped.class);
                if (scoped == null)
                    return true;
                for (final var scope: scoped.value())
                    if (scope.equals(requestedScope))
                        return true;
                return false;
            })
            .collect(Collectors.toUnmodifiableSet());
    }
}
