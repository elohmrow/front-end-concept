import { Component, OnInit, SecurityContext } from '@angular/core';
import { DomSanitizer, SafeHtml, SafeStyle }	 from '@angular/platform-browser';

import { AbstractComponent } 		from '../../../magnolia-app/component/abstract.component';
import { EnvironmentService } 		from '../../../magnolia-app/services/environment.service';

@Component({
  selector: '[app-section]',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent extends AbstractComponent {
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
	
	public backgroundStyle(): SafeStyle {
		return this._sanitizer.bypassSecurityTrustStyle("url(" + this.env.damUrl + this.component.background + ")");
	}
}
