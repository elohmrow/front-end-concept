import React from 'react';

import AbstractComponent from "../magnolia/AbstractComponent"

class Title extends AbstractComponent {
	
	/**
	 * Render the element
	 */
	render() {
		return (
	    	<h1>{this.props.component.title}</h1>
	    );
	}
}

export default Title;