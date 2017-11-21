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

import info.magnolia.concept.frontend.integration.bean.Train;
import info.magnolia.concept.frontend.integration.bean.TrainJcrAdaptor;
import info.magnolia.context.MgnlContext;
import info.magnolia.rest.AbstractEndpoint;
import info.magnolia.rest.EndpointDefinition;

import java.util.ArrayList;
import java.util.List;

import javax.inject.Inject;
import javax.jcr.Node;
import javax.jcr.NodeIterator;
import javax.jcr.RepositoryException;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;

/**
 * Page endpoint for accessing trains.
 *
 * @param <D>
 *            The endpoint definition
 */
@Api(value = "/trains", description = "The trains API")
@Path("/trains")
public class Trains<D extends EndpointDefinition> extends AbstractEndpoint<D> {
    private static final String STATUS_MESSAGE_OK = "OK";
    private static final String STATUS_MESSAGE_UNAUTHORIZED = "Unauthorized";
    private static final String STATUS_MESSAGE_NODE_NOT_FOUND = "Node not found";
    private static final String STATUS_MESSAGE_ERROR_OCCURRED = "Error occurred";

    /**
     * @param endpointDefinition
     */
    @Inject
    protected Trains(D endpointDefinition) {
        super(endpointDefinition);
    }

    @GET
    @Path("/all")
    @Produces({ MediaType.APPLICATION_JSON })
    @ApiOperation(value = "Get all trains", notes = "Returns all the trains")
    @ApiResponses(value = { @ApiResponse(code = 200, message = STATUS_MESSAGE_OK),
            @ApiResponse(code = 401, message = STATUS_MESSAGE_UNAUTHORIZED),
            @ApiResponse(code = 404, message = STATUS_MESSAGE_NODE_NOT_FOUND),
            @ApiResponse(code = 500, message = STATUS_MESSAGE_ERROR_OCCURRED) })
    public Response getAllTrains() throws RepositoryException {
        List<Train> trains = new ArrayList<>();

        NodeIterator it = MgnlContext.getJCRSession("trains").getRootNode().getNodes();
        while (it.hasNext()) {
            Node node = it.nextNode();
            if ("mgnl:train".equals(node.getPrimaryNodeType().getName())) {
                trains.add(new TrainJcrAdaptor(node));
            }
        }

        return Response.ok(trains).build();
    }
}