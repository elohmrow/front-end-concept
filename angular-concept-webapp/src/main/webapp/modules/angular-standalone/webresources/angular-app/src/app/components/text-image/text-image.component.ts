import { Component, OnInit, Input } from '@angular/core';

import { AbstractComponent } 		from '../../../magnolia-app/component/abstract.component';
import { environment } 				from '../../../environments/environment';

@Component({
  selector: '[app-text-image]',
  templateUrl: './text-image.component.html',
  styleUrls: ['./text-image.component.css']
})
export class TextImageComponent extends AbstractComponent {
	env: any;

	/**
	 * Constructor
	 */
	constructor() {
		super();
		
		this.env = environment;
	}
}