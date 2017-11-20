import React, { Component } from 'react';


class Navigation extends Component {
  render() {
    return (
        <nav className="navbar navbar-default affix-top mgn-train-navigation">
	    	<div className="container">
	    	    <div className="collapse navbar-collapse" id="menu-main-dropdown-mobile">
	    	      <ul className="nav navbar-nav">
	    	          <li><a>Tickets</a></li>
	    	          <li><a>Travel & Services</a></li>
	    	          <li><a>Magnolia Card</a></li>
	    	          <li><a>Customer Program</a></li>
	    	      </ul>
	    	    </div>
	    	</div>
	    </nav>
    );
  }
}

export default Navigation;