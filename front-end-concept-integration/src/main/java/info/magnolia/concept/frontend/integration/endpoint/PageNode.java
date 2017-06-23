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
package info.magnolia.concept.frontend.integration.endpoint;

import info.magnolia.concept.frontend.integration.util.JsonFnUtil;
import info.magnolia.context.MgnlContext;
import info.magnolia.jcr.util.ContentMap;
import info.magnolia.rest.AbstractEndpoint;
import info.magnolia.rest.EndpointDefinition;

import javax.inject.Inject;
import javax.jcr.Node;
import javax.jcr.RepositoryException;
import javax.ws.rs.DefaultValue;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;

/**
 * Page endpoint for accessing and manipulating nodes.
 *
 * @param <D>
 *            The endpoint definition
 */
@Api(value = "/nodes/page", description = "The custom nodes API")
@Path("/nodes/page")
public class PageNode<D extends EndpointDefinition> extends AbstractEndpoint<D> {
    private static final String STATUS_MESSAGE_OK = "OK";
    private static final String STATUS_MESSAGE_UNAUTHORIZED = "Unauthorized";
    private static final String STATUS_MESSAGE_NODE_NOT_FOUND = "Node not found";
    private static final String STATUS_MESSAGE_ERROR_OCCURRED = "Error occurred";

    /** The JSON Fn util. */
    private final JsonFnUtil jsonUtil;

    /**
     * @param endpointDefinition
     */
    @Inject
    protected PageNode(D endpointDefinition, final JsonFnUtil jsonUtil) {
        super(endpointDefinition);

        this.jsonUtil = jsonUtil;
    }

    /**
     * Returns a node including its properties and child nodes down to a certain
     * depth.
     */
    @GET
    @Path("{path:(/.+)?}")
    @Produces({ MediaType.APPLICATION_JSON })
    @ApiOperation(value = "Get a psgr node", notes = "Returns the node from the specified page path")
    @ApiResponses(value = { @ApiResponse(code = 200, message = STATUS_MESSAGE_OK),
            @ApiResponse(code = 401, message = STATUS_MESSAGE_UNAUTHORIZED),
            @ApiResponse(code = 404, message = STATUS_MESSAGE_NODE_NOT_FOUND),
            @ApiResponse(code = 500, message = STATUS_MESSAGE_ERROR_OCCURRED) })
    public Response readNode(@PathParam("path") @DefaultValue("/") String path,
            @QueryParam("depth") @DefaultValue("0") int depth) throws RepositoryException {
        // Gets the node
        Node content = MgnlContext.getJCRSession("website").getNode(path);

        return Response.ok(this.jsonUtil.serialize(new ContentMap(content), depth)).build();
    }
}