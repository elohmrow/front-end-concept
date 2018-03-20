import { Component, OnInit, SecurityContext } from '@angular/core';
import { DomSanitizer, SafeHtml, SafeStyle }	 from '@angular/platform-browser';

import { AbstractComponent } from '../../../magnolia-app/component/abstract.component';
import { environment } 		from '../../../environments/environment';


@Component({
  selector: 'app-banners',
  templateUrl: './banners.component.html',
  styleUrls: ['./banners.component.css']
})
export class BannersComponent extends AbstractComponent {
	env: any;

	/**
	 * Constructor
	 */
	constructor(private _sanitizer: DomSanitizer) {
		super();
		
		this.env = environment;
	}	
		
	public sanitize(text) : SafeHtml {
		return this._sanitizer.bypassSecurityTrustHtml(text);
	}
	
	public backgroundStyle(url): SafeStyle {
		return this._sanitizer.bypassSecurityTrustStyle("url(" + this.env.damUrl + url + ")");
	}
}
