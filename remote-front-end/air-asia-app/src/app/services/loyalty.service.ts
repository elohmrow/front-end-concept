import { Injectable } 				from '@angular/core';
import { Http, Response }          	from '@angular/http';
import { Observable } 				from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { EnvironmentService } 		from '../../magnolia-app/services/environment.service';

@Injectable()
export class LoyaltyService {

	/**
	 * Constructor
	 */
	constructor(private http: Http, private environmentService: EnvironmentService) {
		
	}
		
	/**
	 * Get the trains from Magnolia
	 */
	getLoyalties(): Observable<any> {
		return this.http.get(this.environmentService.getSelectedEnvironment().loyaltyRestUrl)
    			.map(res => res.json());
	}
}