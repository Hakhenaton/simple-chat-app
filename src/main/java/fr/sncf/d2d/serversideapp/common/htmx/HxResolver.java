package fr.sncf.d2d.serversideapp.common.htmx;

import java.util.Map;

public interface HxResolver {
    Map<String, ? extends Object> resolve();
}
