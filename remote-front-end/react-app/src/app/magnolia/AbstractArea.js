import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import AreaHelper from '../magnolia/AreaHelper';
import MgnCtxService from './MgnCtxService';
import reactSessionStore from '../state/ReactSessionStore';
import COMPONENTS from '../mapping';

class AbstractArea extends Component {
	
	/**
	 * Constructor.
	 */
	constructor(props) {
		super(props);
		this.state = {
			components: []
		};
	}
	
	/**
	 * Before updating the rendering
	 */
	componentWillReceiveProps(nextProps){
		if (reactSessionStore.singlePageConfig!=null) {
			var areaName = this.props.column.cmsArea;		
			if (areaName != null) {
				// Magnolia context service.
				var mgnCtxService = new MgnCtxService();
								
				// Sets the components list in the state
				this.setState(
					{components: Object.values(mgnCtxService.getAreaComponents(areaName))}
				);
			}
		}
	}
	
	/**
	 * Once rendered
	 */
	componentDidUpdate() {
		// Magnolia context service.
		var mgnCtxService = new MgnCtxService();
		
		if (mgnCtxService.isEditionMode()) {
			var areaName = this.props.column.cmsArea;		
			if (areaName != null) {				
				// Get the area
				var area = mgnCtxService.getArea(areaName);
		        // Get the area helper
				var areaHelper = new AreaHelper(area);
				
				// Get current node
		        let currentNode = ReactDOM.findDOMNode(this);
			    // Get parent node
			    let parentNode = currentNode.parentNode;
			    // Create the comment to insert before
			    let commentBefore = document.createComment(areaHelper.before());
			    parentNode.insertBefore(commentBefore, currentNode);
			    // Create the comment to insert after
			    let commentAfter = document.createComment(areaHelper.after());
			    parentNode.insertBefore(commentAfter, currentNode.nextSibling);
			}
		}
	}
	
	/**
	 * Instantiate the react component thanks to the external mapping
	 */
	instantiateComponent(component) {
		var componentClass = COMPONENTS[component["mgnl:template"]];
		
		if (componentClass!=null) {
			return React.createElement(
					componentClass, 
					{"key": component["jcr:uuid"], "component": component});
		} else {
			return React.createElement(
					"div",
					{"key": component["jcr:uuid"]});
		}
	}
}

export default AbstractArea;