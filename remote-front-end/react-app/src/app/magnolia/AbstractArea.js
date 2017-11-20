import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import AreaHelper from '../magnolia/AreaHelper';
import MgnCtxService from './MgnCtxService';
import reactSessionStore from '../state/ReactSessionStore';
import COMPONENTS from '../mapping';

class AbstractArea extends Component {
	
	/**
	 * Before updating the rendering
	 */
	/*componentWillReceiveProps(nextProps){
		if (reactSessionStore.singlePageConfig!=null) {
			var areaName = this.props.column.cmsArea;		
			if (areaName != null) {
				console.log("Initializing area:  " + areaName);
				
				// Magnolia context service.
				var mgnCtxService = new MgnCtxService();
				
								
				// Sets the components list in the state
				this.setState({components: Object.values(mgnCtxService.getAreaComponents(areaName))});
				
		        // Get the area helper
				var areaHelper = new AreaHelper(area);
				
		        let el = ReactDOM.findDOMNode(this);
		        ReactDOM.unmountComponentAtNode(el);
	
		        // Wrap with the HTML comment
		        el.outerHTML = areaHelper.before() + el.outerHTML + areaHelper.after();
			}
		}
	}*/
	
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
	
	componentDidUpdate() {
		if (reactSessionStore.singlePageConfig!=null) {
			var areaName = this.props.column.cmsArea;		
			if (areaName != null) {
				// Magnolia context service.
				var mgnCtxService = new MgnCtxService();
				
				// Get the area
				var area = mgnCtxService.getArea(areaName);
		        // Get the area helper
				var areaHelper = new AreaHelper(area);
				
		        let el = ReactDOM.findDOMNode(this);
		        ReactDOM.unmountComponentAtNode(el);
	
		        // Wrap with the HTML comment
		        el.outerHTML = areaHelper.before() + el.outerHTML + areaHelper.after();
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
					{"key": component["@id"], "component": component});
		} else {
			return React.createElement(
					"div",
					{"key": component["@id"]});
		}
	}
}

export default AbstractArea;