import React, { Component } from 'react';

import axios from 'axios';

import Header from './app/component/Header';
import Footer from './app/component/Footer';
import Navigation from './app/component/Navigation';
import Main from './app/component/Main';

import reactSessionStore from './app/state/ReactSessionStore';
import ENVIRONMENT from "./environments/environment"

class App extends Component {

	/**
	 * On init
	 */
	constructor(props) {	
		super(props);

		this.state = {init: false};
    }
	
	/**
	 * Once the component and all his children are rendered
	 */
	componentDidMount() {
		console.log("Init the react session");
		
		if (window.singlePageConfig!=null) {
			reactSessionStore.singlePageConfig = window.singlePageConfig;
			this.setState( {init: true} );
		} else {
			//Loads the single page config
			axios
				.get(ENVIRONMENT.restUrl)
				.then(response => {
					reactSessionStore.singlePageConfig.content = response.data;
					this.setState( {init: true} );
				}).catch(error => {
				    console.log(error);
				});	
		}
	}
		
    render() {
    	return (
	    	<div>
	    		<Header/>
		
	    		<Navigation/>
		
				<Main/>
		
				<Footer/>
			</div>
	    );
	}
}

export default App;
