import { Component, OnInit, SecurityContext } from '@angular/core';
import { DomSanitizer, SafeHtml }			 from '@angular/platform-browser';

import { AbstractComponent } from '../../../magnolia-app/component/abstract.component';
import { EnvironmentService } 		from '../../../magnolia-app/services/environment.service';

@Component({
  selector: '[app-carousel]',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent extends AbstractComponent {
	env: any;

	/**
	 * Constructor
	 */
	constructor(private _sanitizer: DomSanitizer, private environmentService: EnvironmentService) {
		super();
		
		this.env = environmentService.getSelectedEnvironment();
	}	
		
	public sanitize(text) : SafeHtml {
		return this._sanitizer.bypassSecurityTrustHtml(text);
	}
}