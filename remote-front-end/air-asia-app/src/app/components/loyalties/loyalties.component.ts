import { Component, OnInit, SecurityContext } 	from '@angular/core';
import { Observable } 							from 'rxjs/Observable';
import { DomSanitizer, SafeHtml, SafeStyle }	 	from '@angular/platform-browser';

import { AbstractComponent } 	from '../../../magnolia-app/component/abstract.component';
import { EnvironmentService } 	from '../../../magnolia-app/services/environment.service';
import { LoyaltyService } 		from '../../services/loyalty.service';

@Component({
  selector: '[app-loyalties]',
  templateUrl: './loyalties.component.html',
  styleUrls: ['./loyalties.component.css']
})
export class LoyaltiesComponent  extends AbstractComponent {
	env: any;
	/** List of loyalties. */
	loyalties = [];
	/** Empty loyalty*/
	emptyLoyalty = {
		"@name": "-",
		"destination": "-",
		"points": "-",
	}

	/**
	 * Constructor
	 */
	constructor(private _sanitizer: DomSanitizer, private loyaltyService: LoyaltyService, private environmentService: EnvironmentService) {
		super();
		
		this.env = environmentService.getSelectedEnvironment();
	}	
	
	/**
	 * On init
	 */
  	ngOnInit() {
  		super.ngOnInit();
  		
  		//Loads a first time
  		this.loadLoyalties()
  	}

	public sanitize(text) : SafeHtml {
		return this._sanitizer.bypassSecurityTrustHtml(text);
	}
	
	public backgroundStyle(url): SafeStyle {
		return this._sanitizer.bypassSecurityTrustStyle("url(" + this.env.damUrl + url + ")");
	}
	
	public loyalty(path): any {		
		let result = this.loyalties[path];
		
		if (result==null) {
			return this.emptyLoyalty;
		} else {
			console.log(this.loyalties[path]);
			return this.loyalties[path];
		}
	}
	
  	/**
  	 * Loads the loyalties from Magnolia
  	 */
  	private loadLoyalties() {
  		this.loyaltyService.getLoyalties().subscribe(data => {
  			for (var i=0; i<data.results.length; i++) {
  				var loyalty = data.results[i];
  				
  				this.loyalties[loyalty["@path"]] = loyalty;
  			}
  		});
  	}
}