package fr.sncf.d2d.serversideapp.common.htmx;

import java.io.IOException;
import java.util.Collections;
import java.util.Map;

/**
 * Représente un objet capable d'envoyer des vues HTMX à un client.
 */
public interface HxView {

    /**
     * Créer le rendu de plusieurs vues HTMX, et envoyer la réponse.
     * @param partials Un dictionnaire indexé par des noms de vues à inclure dans la réponse. Les valeurs sont des donnée supplémentaires à associer à chaque vue.
     * @throws IOException en cas d'erreur lors de l'envoi.
     */
    void render(Map<String, Map<String, Object>> partials) throws IOException;
    

    /**
     * Créer le rendu d'un message HTMX, et envoyer la réponse.
     * @param name Le nom de la vue.
     * @throws IOException en cas d'erreur lors de l'envoi.
     */
    default void render(String name) throws IOException {
        this.render(name, Collections.emptyMap());
    }

    /**
     * Créer le rendu d'un message HTMX avec des données supplémentaires, et envoyer la réponse.
     * @param name Le nom de la vue.
     * @param data Les données supplémentaires à associer lors du rendu, concatenées à celles résolues par les {@link HxResolver} déclarés dans l'application. 
     * @throws IOException en cas d'erreur lors de l'envoi.
     */
    default void render(String name, Map<String, Object> data) throws IOException {
        this.render(Collections.singletonMap(name, data));
    }
}
