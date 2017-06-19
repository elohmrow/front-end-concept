import { Component, OnInit, ElementRef } from '@angular/core';

import { MagnoliaContextService } from '../services/magnolia-context.service';

@Component({
	template: ""
})
export class AbstractArea implements OnInit {
	/** Area name. */
	areaName: string;
	/** List of area's components. */
	components: any[];

	//Constructor
	constructor(private elementRef: ElementRef, private mgnCtxService: MagnoliaContextService) {
		this.areaName = elementRef.nativeElement.getAttribute("areaName");
	}

	//On init
  	ngOnInit() {
  		this.getComponents();
  	}
  	
	//Get list of configured components
  	getComponents(): void {
  		this.components =  this.mgnCtxService.getAreaComponents(this.areaName);
	}
}