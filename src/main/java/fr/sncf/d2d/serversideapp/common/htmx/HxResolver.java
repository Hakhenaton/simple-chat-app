package fr.sncf.d2d.serversideapp.common.htmx;

import java.util.Map;

/**
 * Small middlewares used to resolve some data before view rendering.
 * See it as lightweight Spring interceptors, but only for the model data part.
 */
@FunctionalInterface
public interface HxResolver {

    /**
     * Resolve data before view rendering.
     * @return 
     */
    Map<String, ? extends Object> resolve();
}
