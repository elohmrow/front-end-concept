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
package info.magnolia.concept.angular.integration.util;

import info.magnolia.jcr.util.ContentMap;
import info.magnolia.templating.jsonfn.JsonTemplatingFunctions;

import javax.inject.Inject;

/**
 * JSON FN util class.
 *
 * @author Magnolia International Ltd.
 */
public class JsonFnUtil {
    /** JSON fn. */
    private final JsonTemplatingFunctions jsonFn;

    /**
     * Constructor.
     *
     * @param jsonFn
     *            The JSON FN
     */
    @Inject
    public JsonFnUtil(final JsonTemplatingFunctions jsonFn) {
        this.jsonFn = jsonFn;
    }

    /**
     * Serialize the current node.
     *
     * @param content
     *            The content map
     * @param depth
     *            The depth
     * @return The serialized node
     */
    public String serialize(ContentMap content, int depth) {
        return this.jsonFn.from(content).down(depth).addAll().exclude("jcr.*").print();
    }
}