import { Component } from 'react';
import ReactDOM from 'react-dom';

import ComponentHelper from '../magnolia/ComponentHelper';
import MgnCtxService from './MgnCtxService';

class AbstractComponent extends Component {
		
	/**
	 * After initial rendering
	 */
	componentDidMount() {
		// Magnolia context service.
		var mgnCtxService = new MgnCtxService();
		
		if (mgnCtxService.isEditionMode() && this.props.component != null) {
		    //Get the area helper
			var componentHelper = new ComponentHelper(this.props.component);
				
			// Get current node
		    let currentNode = ReactDOM.findDOMNode(this);
		    // Get parent node
		    let parentNode = currentNode.parentNode;
		    // Create the comment to insert before
		    let commentBefore = document.createComment(componentHelper.before());
		    parentNode.insertBefore(commentBefore, currentNode);
		    // Create the comment to insert after
		    let commentAfter = document.createComment(componentHelper.after());
		    parentNode.insertBefore(commentAfter, currentNode.nextSibling);
		}
	}
}

export default AbstractComponent;