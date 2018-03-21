var DefinitionExtractor = function () {
    
    /**
     * Extract the definition from the registry.
     *
     * @param templateName
     *            The definition id.
     * @return The definition
     */
    this.getTemplateDefinition = function(templateName) {
        return templateRegistry.getProvider(templateName).get();
    }
	
    /**
     * Return all the areas defined
     *
     * @param templateName
     *            The template name
     */
    this.getAreaDefinitions = function(templateName) {
        var areas = null;
        
        var definition = this.getTemplateDefinition(templateName);
        if (definition !== null) {
        	areas = definition.getAreas();
        }

        return areas;
    }
    
    /**
     * Return the JSON representation of all areas defined
     *
     * @param templateName
     *            The template name
     */
    this.getAreaDefinitionsJson = function(templateName) {
        return this.toJson(this.getAreaDefinitions(templateName));
    }
    
    /**
     * Return the JSON representation of all components defined
     *
     * @param templateName
     *            The template name
     */
    this.getComponentDefinitionsJson = function(templateName) {
    	var HashMap = Java.type("java.util.HashMap");
    	var MapUtils = Java.type("org.apache.commons.collections4.MapUtils");
        var components = new HashMap();
        var areas = this.getAreaDefinitions(templateName);

        if (MapUtils.isNotEmpty(areas)) {
            // Browse all area, and extract only once the related defined components
        	for each (var area in areas.values()) {
                var availableComponents = area.getAvailableComponents();
                if (MapUtils.isNotEmpty(availableComponents)) {
                	for each (var availableComponent in availableComponents.values()) {
                        var id = availableComponent.getId();

                        // If not already loaded
                        if (!components.containsKey(id)) {
                            components.put(id, this.getTemplateDefinition(id));
                        }
                    }
                }
            }
        }

        return this.toJson(components);
    }
    
    /**
     * Extract the page content.
     *
     * @param pageName
     *            The page name
     * @return The page content
     */
    this.getPageContent = function(pageName) {
		var url = ctx.request.scheme + "://" + ctx.request.serverName + ":" + ctx.request.serverPort + ctx.contextPath;
		var response = this.httpGet(url + "/.rest/delivery/pages/v1/" + pageName);
        
        return response.data;
    }
    
    /**
     * To JSON.
     *
     * @param object
     * @return The json string representation
     */
    this.toJson = function(object) {
    	var ObjectMapper = Java.type("com.fasterxml.jackson.databind.ObjectMapper");
    	var MapperFeature = Java.type("com.fasterxml.jackson.databind.MapperFeature");
    	var JsonAutoDetect = Java.type("com.fasterxml.jackson.annotation.JsonAutoDetect");
    
    	// Get the object mapper
        var mapper = new ObjectMapper();

        // Get serialization config
        var serializationConfig = mapper.getSerializationConfig();

        // Don't fail on empty beans
        mapper.configure(MapperFeature.AUTO_DETECT_FIELDS, false);

        // Set visibilities
        mapper.setVisibility(
                serializationConfig.getDefaultVisibilityChecker()
                		.withFieldVisibility(JsonAutoDetect.Visibility.NONE)
                        .withGetterVisibility(JsonAutoDetect.Visibility.PUBLIC_ONLY)
                        .withSetterVisibility(JsonAutoDetect.Visibility.PUBLIC_ONLY)
                        .withCreatorVisibility(JsonAutoDetect.Visibility.NONE));

        return mapper.writeValueAsString(object);
    }
    
    this.httpGet = function(theUrl){
        var con = new java.net.URL(theUrl).openConnection();
        con.requestMethod = "GET";

        return this.asResponse(con);
    }
    
    this.asResponse = function(con){
        var d = this.read(con.inputStream);
        
        return {data : d, statusCode : con.responseCode};
    }
    
    this.read = function(inputStream){
        var inReader = new java.io.BufferedReader(new java.io.InputStreamReader(inputStream));
        var inputLine;
        var response = new java.lang.StringBuffer();

        while ((inputLine = inReader.readLine()) != null) {
               response.append(inputLine);
        }
        inReader.close();
        return response.toString();
    }
};

new DefinitionExtractor();