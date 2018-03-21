import { Component, OnInit } 	from '@angular/core';

import { EnvironmentService } 		from '../../../magnolia-app/services/environment.service';

@Component({
  selector: '.mgn-air-asia-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
	id: string;
	env: any;

  	constructor(private environmentService: EnvironmentService) {
  		this.env = environmentService.getSelectedEnvironment();
  	}

  	ngOnInit() {
  	}
}