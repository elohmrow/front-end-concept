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

/**
 *
 * @author Magnolia International Ltd.
 */
public class Train {
    private String from;

    /**
     * @return the from
     */
    public String getFrom() {
        return this.from;
    }

    /**
     * @param from
     *            the from to set
     */
    public void setFrom(String from) {
        this.from = from;
    }

    /**
     * @return the to
     */
    public String getTo() {
        return this.to;
    }

    /**
     * @param to
     *            the to to set
     */
    public void setTo(String to) {
        this.to = to;
    }

    /**
     * @return the start
     */
    public String getStart() {
        return this.start;
    }

    /**
     * @param start
     *            the start to set
     */
    public void setStart(String start) {
        this.start = start;
    }

    /**
     * @return the end
     */
    public String getEnd() {
        return this.end;
    }

    /**
     * @param end
     *            the end to set
     */
    public void setEnd(String end) {
        this.end = end;
    }

    /**
     * @return the length
     */
    public String getLength() {
        return this.length;
    }

    /**
     * @param length
     *            the length to set
     */
    public void setLength(String length) {
        this.length = length;
    }

    /**
     * @return the price
     */
    public String getPrice() {
        return this.price;
    }

    /**
     * @param price
     *            the price to set
     */
    public void setPrice(String price) {
        this.price = price;
    }

    /**
     * @return the flexPrice
     */
    public String getFlexPrice() {
        return this.flexPrice;
    }

    /**
     * @param flexPrice
     *            the flexPrice to set
     */
    public void setFlexPrice(String flexPrice) {
        this.flexPrice = flexPrice;
    }

    /**
     * @return the type
     */
    public String getType() {
        return this.type;
    }

    /**
     * @param type
     *            the type to set
     */
    public void setType(String type) {
        this.type = type;
    }

    /**
     * @return the numStops
     */
    public String getNumStops() {
        return this.numStops;
    }

    /**
     * @param numStops
     *            the numStops to set
     */
    public void setNumStops(String numStops) {
        this.numStops = numStops;
    }

    private String to;
    private String start;
    private String end;
    private String length;
    private String price;
    private String flexPrice;
    private String type;
    private String numStops;
}