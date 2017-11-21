import MgnCtxService from './MgnCtxService';

/**
 * Magnolia area helper.
 */
function AreaHelper(area) {
	/** Tag name. */
	this.tag = "cms:area";	
	/** Area. */
	this.area = area;		
}

/**
 * Insert the area comment before the area starts
 * 
 * @return The comment string
 */
AreaHelper.prototype.before = function() {
	// Magnolia context service.
	var mgnCtxService = new MgnCtxService();
	var pagePath = mgnCtxService.getCurrentNode();
	
	return "  " + this.tag + " content=\"website:" + pagePath + "/" + this.area.name + "\" "
		+"name=\"" + this.area.name + "\" "
		+"availableComponents=\"" + this.getAvailableComponents() + "\" "
		+"type=\"" + this.getType() + "\" "
		+"label=\"" + this.getLabel() + "\" "
		+"inherit=\"false\" "
		+"optional=\"" + this.getOptional() + "\" "
		+"createAreaNode=\"" + this.getCreateAreaNode() + "\" "
		+"showAddButton=\"" + this.getShowAddButton() + "\" "
		+"showNewComponentArea=\"" + this.getShowNewComponentArea() + "\" "
		+"description=\"" + this.getDescription() + "\" "
		+"activationStatus=\"0\" ";
}

/**
 * Insert the area comment after the area 
 *  
 * @return The comment string
 */
AreaHelper.prototype.after = function() {
	return " /" + this.tag + " ";
}

//Return the content
AreaHelper.prototype.getAvailableComponents = function() {
	var components = "";
	
	if (this.area.availableComponents!=null) {    			    	
    	for (var key in this.area.availableComponents) {
    	    var component = this.area.availableComponents[key];
    	    components += component.id + ",";
    	}
    	
    	components = components.substring(0, components.length-1);
	}
	
	return components;
}

//Return the area type (default list)
AreaHelper.prototype.getType = function() {
	if (this.area.type==null) {
		return "list";
	} else {
		return this.area.type;
	}
}

//Return the area label (default name)
AreaHelper.prototype.getLabel = function() {
	if (this.area.title==null) {
		return this.area.name;
	} else {
		return this.area.title;
	}
}

//Return the optional flag (default false)
AreaHelper.prototype.getOptional = function() {
	if (this.area.optional==null) {
		return "false";
	} else {
		return "" + this.area.optional;
	}
}

//Return the create node area flag (default true)
AreaHelper.prototype.getCreateAreaNode = function() {
	if (this.area.optional==null) {
		return "true";
	} else {
		return "" + this.area.createAreaNode;
	}
}

//Return the create node area flag (default true)
AreaHelper.prototype.getShowAddButton = function() {
	return "true";
}

//Return the create node area flag (default true)
AreaHelper.prototype.getShowNewComponentArea = function() {
	return "true";
}

//Return the description
AreaHelper.prototype.getDescription = function() {
	if (this.area.optional==null) {
		return "";
	} else {
		return this.area.description;
	}
}

//Instantiate a Magnolia area helper
export default AreaHelper;