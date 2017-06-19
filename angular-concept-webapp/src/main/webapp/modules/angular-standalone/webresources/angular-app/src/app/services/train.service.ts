import { Injectable } from '@angular/core';

@Injectable()
export class TrainService {
	TRAINS = [
		{
			"departStation": "Basel Bad Bf",
			"arrivalStation": "Frankfurt(Main) Hbf",
			"departure": "09:15",
			"arrival": "11:53",
			"length": "2:38",
			"stops": "0",
			"type": "ICE",
			"price": "77,90 EUR",
			"flexPrice": "83,00 EUR"
		},	
		{
			"departStation": "Basel Bad Bf",
			"arrivalStation": "Frankfurt(Main) Hbf",
			"departure": "09:23",
			"arrival": "12:08",
			"length": "2:45",
			"stops": "1",
			"type": "ICE",
			"price": "- EUR",
			"flexPrice": "83,00 EUR"
		},	
		{
			"departStation": "Basel Bad Bf",
			"arrivalStation": "Frankfurt(Main) Hbf",
			"departure": "10:23",
			"arrival": "13:08",
			"length": "2:45",
			"stops": "0",
			"type": "ICE",
			"price": "77,90 EUR",
			"flexPrice": "83,90 EUR"
		}
	];
	
	/**
	 * Constructor
	 */
	constructor() {
		
	}
	
	getTrains() {
		return this.TRAINS;
	}
}