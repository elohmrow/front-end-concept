import { Component } from 'react';
import ReactDOM from 'react-dom';

import ComponentHelper from '../magnolia/ComponentHelper';
import reactSessionStore from '../state/ReactSessionStore';

class AbstractComponent extends Component {
		
	/**
	 * After initial rendering
	 */
	componentDidMount() {
		if (reactSessionStore.singlePageConfig!=null && this.props.component != null) {
		    //Get the area helper
			var componentHelper = new ComponentHelper(this.props.component);
				
		    let el = ReactDOM.findDOMNode(this);
		    ReactDOM.unmountComponentAtNode(el);
		    
			//Wrap with the HTML comment
		    el.outerHTML = componentHelper.before() + el.outerHTML + componentHelper.after();
		}
	}
}

export default AbstractComponent;