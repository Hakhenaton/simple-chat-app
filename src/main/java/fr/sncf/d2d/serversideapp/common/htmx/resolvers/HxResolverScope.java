package fr.sncf.d2d.serversideapp.common.htmx.resolvers;

/**
 * Représente les différents contextes dans lequels on envoie des messages HTMX. 
 * Fonctionne avec l'annotation {@link Scoped}.
 * @see Scoped
 */
public enum HxResolverScope {
    HTTP,
    WEBSOCKET
}
