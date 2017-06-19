import { Component, OnInit, Input } from '@angular/core';

import { AbstractComponent } from '../../../magnolia-app/component/abstract.component';
import { TrainService } from '../../services/train.service';

@Component({
  selector: '[app-time-table]',
  templateUrl: './time-table.component.html',
  styleUrls: ['./time-table.component.css']
})
export class TimeTableComponent extends AbstractComponent {
	/** List of trains. */
	trains: any[];

	/**
	 * Constructor
	 */
	constructor(private trainService: TrainService) {
		super();
	}
	
	/**
	 * On init
	 */
  	ngOnInit() {
  		super.ngOnInit();
  		
  		this.trains = this.trainService.getTrains();
  	}
}