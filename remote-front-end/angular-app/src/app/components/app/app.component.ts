import { Component, OnInit } 		from '@angular/core';

import { MagnoliaContextService } 	from '../../../magnolia-app/services/magnolia-context.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	/** Is data loaded. */
	isDataLoaded = false;
	
	/**
	 * Constructor
	 */
	constructor(private mgnCtxService: MagnoliaContextService) {
		
	}

	/**
	 * On init
	 */
	ngOnInit() {
		//Initializes the Magnolia service
		this.mgnCtxService.init(this);
	}
}