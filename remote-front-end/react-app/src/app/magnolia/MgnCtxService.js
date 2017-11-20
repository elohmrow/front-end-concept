import reactSessionStore from '../state/ReactSessionStore';

/**
 * Magnolia context service.
 */
function MgnCtxService() {

}

/**
 * Get the area configuration
 * 
 * @return The comment string
 */
MgnCtxService.prototype.getArea = function(areaName) {
	var config = reactSessionStore.singlePageConfig;
	//console.log(JSON.stringify(config.areaDefinitions, null, 2));
	
	if (config.areaDefinitions !== null) {
		return config.areaDefinitions[areaName];	
	} else {
		return null;
	}
}

/**
 * Get the areas configuration
 * 
 * @return The comment string
 */
MgnCtxService.prototype.getAreas = function() {
	return reactSessionStore.singlePageConfig.areaDefinitions;	
}

/**
 * Returns the current Magnolia JCR node path.
 */
MgnCtxService.prototype.getCurrentNode = function() {
	return reactSessionStore.singlePageConfig.content["@path"];
}

/**
 * Return the area's defined components
 * 
 * @param areaName The name of the area
 */
MgnCtxService.prototype.getAreaComponents = function(areaName) {
	var results = [];
	
	if (typeof(reactSessionStore.singlePageConfig.content) !== "undefined") {
		//Gets the area content
		var content = reactSessionStore.singlePageConfig.content;
		var areaContent = content[areaName];

		if (areaContent!=null) {    			    	
	    	for (var key in areaContent) {
	    	    var value = areaContent[key];
	    	    
	    	    if (typeof(value) === "object" && value["@nodeType"] === "mgnl:component") {
	    	    	if (this.isEditionMode()) {
		    	    	//Gets the template
		    	    	var templateId = value["mgnl:template"];
		    	    	var template = this.getComponent(templateId);
		    	    	value.componentDefinition = template;
	    	    	}
	    	    	
	    	    	results.push(value);
	    	    }
	    	}
    	}
	}

	return results;
}

/**
 * Return the defined component
 * 
 * @param areaName The name of the area
 */
MgnCtxService.prototype.getComponent = function(componentId){		
	if (reactSessionStore.singlePageConfig.componentsDefinitions !== null) {
		return reactSessionStore.singlePageConfig.componentsDefinitions[componentId];	
	} else {
		return null;
	}
}

/**
 * Return whether the page is in edition mode
 * 
 * @return Whether the page is in edition mode
 */
MgnCtxService.prototype.isEditionMode = function() {
	return typeof(reactSessionStore.singlePageConfig.componentsDefinitions) !== "undefined"; 
}

//Instantiate a Magnolia context service
export default MgnCtxService;