import React, { Component } from 'react';


class Header extends Component {
  render() {
    return (
    	<nav className="navbar navbar-default mgn-train-header">
			<div className="container">
				<div className="navbar-header">
					<button className="navbar-toggle collapsed" type="button" data-target="#menu-main-dropdown-mobile" data-toggle="collapse">
						<span className="icon-bar"></span> 
						<span className="icon-bar"></span> 
						<span className="icon-bar"></span>
					</button>
					<a className="navbar-brand" href="index.html"> 
						<img width="120px" className="img-responsive" src="{{env.staticFilePath}}/assets/img/logo-magnolia.svg" alt=""/>
					</a>
				</div>
				
			    <div className="collapse navbar-collapse">
			      <ul className="nav navbar-nav">
			          <li><a>Home</a></li>
			          <li><a>Contact</a></li>
			          <li><a>Sitemap</a></li>
			          <li><a>Login</a></li>
			      </ul>
			    </div>
			</div>	
		</nav>
    );
  }
}

export default Header;