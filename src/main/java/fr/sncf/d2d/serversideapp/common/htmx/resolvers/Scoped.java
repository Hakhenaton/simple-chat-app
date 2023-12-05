package fr.sncf.d2d.serversideapp.common.htmx.resolvers;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

/**
 * Certains {@link HxResolver} doivent être exclus lorsque l'application est appelée dans un certain contexte.
 * Par exemple, certaines données sont obtenues de manière différents (ou ne sont pas disponibles) lorsqu'on bascule de HTTP à Websocket.
 * On peut restreindre l'utilisation de certains {@link HxResolver} à des scopes précis.
 * L'absence d'annotation {@link Scoped} indique que le {@link HxResolver} est global et appelé quel que soit le scope.
 */
@Target({ ElementType.TYPE })
@Retention(RetentionPolicy.RUNTIME)
public @interface Scoped {
    HxResolverScope[] value();
}
