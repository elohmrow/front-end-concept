import { Component, OnInit } 	from '@angular/core';

import { environment } 			from '../../../environments/environment';

@Component({
  selector: '.mgn-air-asia-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
	id: string;
	env: any;

  	constructor() {
  		this.env = environment;
  	}

  	ngOnInit() {
  	}
}