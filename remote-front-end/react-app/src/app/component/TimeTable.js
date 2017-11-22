import React from 'react';

import AbstractComponent from "../magnolia/AbstractComponent"
import axios from 'axios';

import ENVIRONMENT from "../../environments/environment"

class TimeTable extends AbstractComponent {
	
	/**
	 * On init
	 */
	constructor(props) {
		super(props);
		this.state = {
			trains: []
		};
	}
	
	/**
	 * Once rendered
	 */
	componentDidMount() {
		super.componentDidMount();
		
		let component = this;
		
		// Load the trains for the first time
		this.fetchTrainsData(component);
		
		// Then trigger an uodate every 5 seconds
		setInterval(function() {
			component.fetchTrainsData(component);
		}, 5000);

	}
	
	/**
	 * Fetch the trains data
	 */
	fetchTrainsData(component) {
		axios
			.get(ENVIRONMENT.trainRestUrl)
			.then(response => {
				component.setState( {trains: response.data.results} );
				console.log("Train loaded");
			}).catch(error => {
			    console.log(error);
			});		
	}
	
	renderTrain(train, rowIndex) {
		var cells = [];

		if (this.props.component.selectColumns!=null) {
			this.props.component.selectColumns.forEach(function(selectedColumn) {
				if (selectedColumn === 'departStation') {
					cells.push(<td key={selectedColumn}>{train.from}</td>);
				}
				if (selectedColumn === 'arrivalStation') {
					cells.push(<td key={selectedColumn}>{train.to}</td>);
				}
				if (selectedColumn === 'departure') {
					cells.push(<td key={selectedColumn}>{train.start}</td>);
				}
				if (selectedColumn === 'arrival') {
					cells.push(<td key={selectedColumn}>{train.end}</td>);
				}
				if (selectedColumn === 'length') {
					cells.push(<td key={selectedColumn}>{train.length}</td>);
				}
				if (selectedColumn === 'stops') {
					cells.push(<td key={selectedColumn}>{train.numStops}</td>);
				}
				if (selectedColumn === 'type') {
					cells.push(<td key={selectedColumn}>{train.type}</td>);
				}
				if (selectedColumn === 'price') {
					cells.push(<td key={selectedColumn}>{train.price}</td>);
				}
				if (selectedColumn === 'flexPrice') {
					cells.push(<td key={selectedColumn}>{train.flexPrice}</td>);
				}
			})
		}

		return cells;
	}
	
	/**
	 * Render the element
	 */
	render() {
		const trains = this.state.trains;

		return (
			<table className="mgn-train-time-table" cellSpacing="0">
			<tbody>
				<tr>
					{
						this.props.component.selectColumns.map((selectColumn, index) => (
							<th key={index}>{selectColumn}</th>	
						))
					}
				</tr>			
				
				{
					trains.map((train, index) => (
						<tr key={index}>{this.renderTrain(train, index)}</tr>
					))
				}
				
			</tbody>
			</table>
	    );
	}
}

export default TimeTable;