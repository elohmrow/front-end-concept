import { Component, OnInit, Input } from '@angular/core';
import { Observable } 				from 'rxjs/Observable';

import { AbstractComponent } 		from '../../../magnolia-app/component/abstract.component';
import { TrainService } 			from '../../services/train.service';

@Component({
  selector: '[app-time-table]',
  templateUrl: './time-table.component.html',
  styleUrls: ['./time-table.component.css']
})
export class TimeTableComponent extends AbstractComponent {
	/** List of trains. */
	trains: Observable<any[]>;
	/** Interval. */
	interval: any;

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
  		
  		//Loads a first time
  		this.loadTrains()
  		
  		//Then loads every 5 seconds
  		this.interval = setInterval(() => {
  		    this.loadTrains(); 
  		}, 5000);
  	}
  	  	
	/**
	 * On destroy
	 */
  	ngOnDestroy() {
		if (this.interval) {
		    clearInterval(this.interval);
		}
  	}
  	
  	/**
  	 * Loads the trains from Magnolia
  	 */
  	private loadTrains() {
  		this.trainService.getTrains().subscribe(data => {
  			this.trains = data.results;
  		});
  	}
}