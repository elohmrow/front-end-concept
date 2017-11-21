/**
 * Magnolia area helper.
 */
function ComponentHelper(component) {
	/** Tag name. */
	this.tag = "cms:component";	
	/** Component. */
	this.component = component;
}

/**
 * Insert the area comment before the area starts
 * 
 * @return The comment string
 */
ComponentHelper.prototype.before = function() {	
	return " " + this.tag + " content=\"website:" + this.component["@path"] + "\" "
		+"dialog=\"" + this.getDialog() + "\" "
		+"label=\"" + this.getTitle() + "\" "
		+"activationStatus=\"2\" ";
}

/**
 * Insert the area comment after the area 
 *  
 * @return The comment string
 */
ComponentHelper.prototype.after = function() {
	return " /" + this.tag + " ";
}

/**
 * Returns the associated dialog id (if any)
 * 
 * @return The dialog id
 */
ComponentHelper.prototype.getDialog = function() {
	if (this.component.componentDefinition!=null && this.component.componentDefinition.dialog!=null) {
		return this.component.componentDefinition.dialog;
	} else {
		return "";
	}
}

/**
 * Returns the associated label (if any)
 * 
 * @return The labrl
 */
ComponentHelper.prototype.getTitle = function() {
	if (this.component.componentDefinition!=null && this.component.componentDefinition.title!=null) {
		return this.component.componentDefinition.title;
	} else {
		return "";
	}
}

//Instantiate a Magnolia component helper
export default ComponentHelper;