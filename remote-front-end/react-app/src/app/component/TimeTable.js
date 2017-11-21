import React from 'react';

import AbstractComponent from "../magnolia/AbstractComponent"

class TimeTable extends AbstractComponent {
	
	/**
	 * Render the element
	 */
	render() {
		return (
			<table className="mgn-train-time-table" cellSpacing="0">
			<tbody>
				<tr>
					{
						this.props.component.selectColumns.map((selectColumn, index) => (
							<th key={index}>{selectColumn}</th>
							)
						)
					}
				</tr>			
				<tr>
				{
					this.props.component.selectColumns.map((selectColumn, index) => (
						<td key={index}>{selectColumn}</td>
						)
					)
				}
				</tr>
			</tbody>
			</table>
	    );
	}
}

export default TimeTable;