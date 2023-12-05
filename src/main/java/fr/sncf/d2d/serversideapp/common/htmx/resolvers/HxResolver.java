package fr.sncf.d2d.serversideapp.common.htmx.resolvers;

import java.util.Map;

/**
 * Simple middleware permettant d'enrichir les données disponibles au sein des modèles HTMX.
 */
@FunctionalInterface
public interface HxResolver {

    /**
     * @return Les données à mettre à disposition lors du rendu de modèle. 
     */
    Map<String, ? extends Object> resolve();
}
