import React from 'react';

import AbstractComponent from "../magnolia/AbstractComponent"

class SubTitle extends AbstractComponent {
	
	/**
	 * Render the element
	 */
	render() {
		return (
	    	<h2>{this.props.component.subTitle}</h2>
	    );
	}
}

export default SubTitle;