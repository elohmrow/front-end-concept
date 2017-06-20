import { Injectable } from '@angular/core';

import { TitleComponent } 		from '../../app/components/title/title.component';
import { TextImageComponent } 	from '../../app/components/text-image/text-image.component';
import { SubtitleComponent } 	from '../../app/components/subtitle/subtitle.component';
import { TimeTableComponent } 	from '../../app/components/time-table/time-table.component';

@Injectable()
export class MagnoliaComponentMapperService {
	COMPONENTS = {
		"angular-standalone:components/title": TitleComponent,
		"angular-standalone:components/text-image": TextImageComponent,
		"angular-standalone:components/subtitle": SubtitleComponent,
		"angular-standalone:components/time-table": TimeTableComponent
	};
	
	/**
	 * Constructor
	 */
	constructor() {
		
	}
	
	getComponent(id:string) {
	    return this.COMPONENTS[id];
	}
}