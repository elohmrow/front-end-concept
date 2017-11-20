import React, { Component } from 'react';

import Row from './Row';

class Main extends Component {
	
  /**
   * Render component
   */
  render() {
	var row1 = [
		{
			className: "col-xs-12 col-md-6",
			cmsArea: "left"
		},
		{
			className: "col-xs-12 col-md-6",
			cmsArea: "right"
		}
	];
	
	var row2 = [
		{
			className: "col-xs-12",
			cmsArea: "schedule"
		}
	];
	  
    return (
    	<div className="container">
    		<Row columns={row1}/>
			
    		<Row columns={row2}/>
    	</div>
    );
  }
}

export default Main;