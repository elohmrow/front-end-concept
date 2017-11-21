import React from 'react';

import AbstractArea from '../magnolia/AbstractArea';

class Column extends AbstractArea {
		
	/**
	 * Render the component
	 */
	render() {	
		return (
	    	<div className={this.props.column.className}>
	    	{
	    		this.state.components.map(component => (
	    			this.instantiateComponent(component)
	    		))
	    	}
	    	</div>
	    );
	}
}

export default Column;