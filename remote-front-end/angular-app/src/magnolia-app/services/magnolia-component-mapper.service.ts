import { Injectable } 	from '@angular/core';

import { COMPONENTS } 		from '../../environments/mapping';

@Injectable()
export class MagnoliaComponentMapperService {
	
	/**
	 * Returns the Angular component linked to the template id.
	 */
	getComponent(id:string) {
	    return COMPONENTS[id];
	}
}