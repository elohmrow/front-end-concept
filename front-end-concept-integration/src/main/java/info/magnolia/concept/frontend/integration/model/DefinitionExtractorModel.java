/**
 * This file Copyright (c) 2016 Magnolia International
 * Ltd.  (http://www.magnolia-cms.com). All rights reserved.
 *
 *
 * This program and the accompanying materials are made
 * available under the terms of the Magnolia Network Agreement
 * which accompanies this distribution, and is available at
 * http://www.magnolia-cms.com/mna.html
 *
 * Any modifications to this file must keep this entire header
 * intact.
 *
 */
package info.magnolia.concept.frontend.integration.model;

import info.magnolia.concept.frontend.integration.util.JsonFnUtil;
import info.magnolia.jcr.util.ContentMap;
import info.magnolia.jcr.util.PropertyUtil;
import info.magnolia.rendering.model.RenderingModel;
import info.magnolia.rendering.model.RenderingModelImpl;
import info.magnolia.rendering.template.AreaDefinition;
import info.magnolia.rendering.template.ComponentAvailability;
import info.magnolia.rendering.template.TemplateDefinition;
import info.magnolia.rendering.template.configured.ConfiguredTemplateDefinition;
import info.magnolia.rendering.template.registry.TemplateDefinitionRegistry;

import java.util.HashMap;
import java.util.Map;

import javax.inject.Inject;
import javax.jcr.Node;

import org.apache.commons.collections4.MapUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.fasterxml.jackson.annotation.JsonAutoDetect;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.MapperFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationConfig;

/**
 * Extract the full configuration of a page
 *
 * @author Magnolia International Ltd.
 */
public class DefinitionExtractorModel<RD extends ConfiguredTemplateDefinition>
        extends RenderingModelImpl<ConfiguredTemplateDefinition> {
    /** Logger. */
    private static final Logger LOG = LoggerFactory.getLogger(DefinitionExtractorModel.class);

    /** The template registry. */
    private final TemplateDefinitionRegistry registry;
    /** The JSON Fn util. */
    private final JsonFnUtil jsonUtil;

    /**
     * Constructor.
     *
     * @param content
     * @param definition
     * @param parent
     */
    @Inject
    public DefinitionExtractorModel(Node content, ConfiguredTemplateDefinition definition, RenderingModel<?> parent,
            final TemplateDefinitionRegistry registry, final JsonFnUtil jsonUtil) {
        super(content, definition, parent);

        this.registry = registry;
        this.jsonUtil = jsonUtil;
    }

    /**
     * Return the single page configuration
     *
     * @param content
     *            The content node
     */
    public String getSinglePageConfig(ContentMap content) {
        String json = "";

        // Gets the template name
        String templateName = PropertyUtil.getString(content.getJCRNode(), "mgnl:template");

        try {
            // Areas definitions
            Map<String, AreaDefinition> areas = this.getAllAreaDefinitions(templateName);
            String areaDefinitions = toJson(areas);
            // Component definitions
            String componentsDefinitions = toJson(this.getAllComponentDefinitions(areas));
            // Content
            String contentString = this.jsonUtil.serialize(content, 10);

            json = String.format("{\"areaDefinitions\": %s, \"componentsDefinitions\": %s, \"content\": %s}",
                    areaDefinitions, componentsDefinitions, contentString);
        } catch (JsonProcessingException e) {
            LOG.error("An error occurred while serializing the single page configuration " + templateName, e);
        }

        return json;
    }

    /**
     * Return the JSON representation of all areas defined
     *
     * @param templateName
     *            The template name
     */
    protected Map<String, AreaDefinition> getAllAreaDefinitions(String templateName) {
        Map<String, AreaDefinition> areas = null;

        TemplateDefinition definition = this.getDefinition(templateName);
        if (definition != null) {
            areas = definition.getAreas();
        }

        return areas;
    }

    /**
     * Return the JSON representation of all components defined
     *
     * @param areas
     *            The template defined areas
     */
    protected Map<String, TemplateDefinition> getAllComponentDefinitions(Map<String, AreaDefinition> areas) {
        Map<String, TemplateDefinition> components = new HashMap<String, TemplateDefinition>();

        if (MapUtils.isNotEmpty(areas)) {
            // Browse all area, and extract only once the related defined
            // components
            for (AreaDefinition area : areas.values()) {
                Map<String, ComponentAvailability> availableComponents = area.getAvailableComponents();
                if (MapUtils.isNotEmpty(availableComponents)) {
                    for (ComponentAvailability availableComponent : availableComponents.values()) {
                        String id = availableComponent.getId();

                        // If not already loaded
                        if (!components.containsKey(id)) {
                            components.put(id, this.getDefinition(id));
                        }
                    }
                }
            }
        }

        return components;
    }

    /**
     * Extract the definition from the registry.
     *
     * @param id
     *            The definition id.
     * @return The definition
     */
    private TemplateDefinition getDefinition(String id) {
        return this.registry.getProvider(id).get();
    }

    /**
     * To JSON.
     *
     * @param object
     * @return
     * @throws JsonProcessingException
     */
    private static String toJson(Object object) throws JsonProcessingException {
        ObjectMapper mapper = new ObjectMapper();

        // Get serialization config
        SerializationConfig serializationConfig = mapper.getSerializationConfig();

        // Don't fail on empty beans
        mapper.configure(MapperFeature.AUTO_DETECT_FIELDS, false);

        // Set visibilities
        mapper.setVisibility(
                serializationConfig.getDefaultVisibilityChecker().withFieldVisibility(JsonAutoDetect.Visibility.NONE)
                        .withGetterVisibility(JsonAutoDetect.Visibility.PUBLIC_ONLY)
                        .withSetterVisibility(JsonAutoDetect.Visibility.PUBLIC_ONLY)
                        .withCreatorVisibility(JsonAutoDetect.Visibility.NONE));

        return mapper.writerWithDefaultPrettyPrinter().writeValueAsString(object);
    }

}