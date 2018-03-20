import { Injectable } 				from '@angular/core';
import { Http, Response }          	from '@angular/http';
import { Observable } 				from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { environment } 				from '../../environments/environment';

@Injectable()
export class TrainService {

	/**
	 * Constructor
	 */
	constructor(private http: Http) {
		
	}
		
	/**
	 * Get the trains from Magnolia
	 */
	getTrains(): Observable<any> {
		return this.http.get(environment.trainRestUrl)
    		.map(res => res.json());
	}
}