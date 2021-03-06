import React from 'react';

import AbstractComponent from "../magnolia/AbstractComponent"

import ENVIRONMENT from "../../environments/environment"

class TextImage extends AbstractComponent {
	
	/**
	 * Render the element
	 */
	render() {
		var damURL = ENVIRONMENT.damUrl + this.props.component.image;
	
	    return (
	    	<div className="row">
	    		<div className="col-xs-12">
	    			<img className="img-responsive" src={damURL} alt=""/>
	    		</div>
	    		<div className="col-xs-12">
	    			<h2 className="light">{this.props.component.title}</h2>
	    		</div>		
	    	</div>
	    );
	}
}

export default TextImage;