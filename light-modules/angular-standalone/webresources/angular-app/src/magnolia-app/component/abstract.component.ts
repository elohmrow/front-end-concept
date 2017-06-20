import { Component, OnInit, Input } from '@angular/core';

@Component({
  template: "nbsp;"
})
export class AbstractComponent implements OnInit {
	/** Component config.*/
	@Input() component: any;
	
	/**
	 * Constructor
	 */
	constructor() {
		
	}

	ngOnInit() {
	}
}