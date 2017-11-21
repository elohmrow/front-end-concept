import React from 'react';

import AbstractComponent from "../magnolia/AbstractComponent"
import axios from 'axios';

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
		
		//Loads the trains
		axios
			.get("http://localhost:8080/.rest/trains/all")
			.then(response => {
				this.setState( {trains: response.data} );
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
					cells.push(<td>{train.from}</td>);
				}
				if (selectedColumn === 'arrivalStation') {
					cells.push(<td>{train.to}</td>);
				}
				if (selectedColumn === 'departure') {
					cells.push(<td>{train.start}</td>);
				}
				if (selectedColumn === 'arrival') {
					cells.push(<td>{train.end}</td>);
				}
				if (selectedColumn === 'length') {
					cells.push(<td>{train.length}</td>);
				}
				if (selectedColumn === 'stops') {
					cells.push(<td>{train.numStops}</td>);
				}
				if (selectedColumn === 'type') {
					cells.push(<td>{train.type}</td>);
				}
				if (selectedColumn === 'price') {
					cells.push(<td>{train.price}</td>);
				}
				if (selectedColumn === 'flexPrice') {
					cells.push(<td>{train.flexPrice}</td>);
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