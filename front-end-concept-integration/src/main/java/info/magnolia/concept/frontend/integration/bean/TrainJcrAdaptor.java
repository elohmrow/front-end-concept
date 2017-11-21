/**
 * This file Copyright (c) 2017 Magnolia International
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
package info.magnolia.concept.frontend.integration.bean;

import info.magnolia.jcr.util.PropertyUtil;

import javax.jcr.Node;
import javax.jcr.RepositoryException;

/**
 *
 * @author Magnolia International Ltd.
 * @date 21 Nov 2017
 *
 */
public class TrainJcrAdaptor extends Train {
    /**
     * Constructor.
     */
    public TrainJcrAdaptor(Node node) {

        try {
            if (node.hasProperty("from")) {
                this.setFrom(PropertyUtil.getString(node, "from"));
            }

            if (node.hasProperty("to")) {
                this.setTo(PropertyUtil.getString(node, "to"));
            }

            if (node.hasProperty("start")) {
                this.setStart(PropertyUtil.getString(node, "start"));
            }

            if (node.hasProperty("end")) {
                this.setEnd(PropertyUtil.getString(node, "end"));
            }

            if (node.hasProperty("length")) {
                this.setLength(PropertyUtil.getString(node, "length"));
            }

            if (node.hasProperty("numStops")) {
                this.setNumStops(PropertyUtil.getString(node, "numStops"));
            }

            if (node.hasProperty("price")) {
                this.setPrice(PropertyUtil.getString(node, "price"));
            }

            if (node.hasProperty("flexPrice")) {
                this.setFlexPrice(PropertyUtil.getString(node, "flexPrice"));
            }

            if (node.hasProperty("type")) {
                this.setType(PropertyUtil.getString(node, "type"));
            }
        } catch (RepositoryException e) {
            e.printStackTrace();
        }

    }
}
