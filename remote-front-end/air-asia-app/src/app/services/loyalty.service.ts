import { Injectable } 				from '@angular/core';
import { Http, Response }          	from '@angular/http';
import { Observable } 				from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { environment } 				from '../../environments/environment';

@Injectable()
export class LoyaltyService {

	/**
	 * Constructor
	 */
	constructor(private http: Http) {
		
	}
		
	/**
	 * Get the trains from Magnolia
	 */
	getLoyalties(): Observable<any> {
		return this.http.get(environment.loyaltyRestUrl)
    			.map(res => res.json());
	}
}