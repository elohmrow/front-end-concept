import { Injectable } 				from '@angular/core';

import { WindowRef } 				from './windowref.service';
import { environment } 				from '../../environments/environment';

@Injectable()
export class EnvironmentService {
	/** Native window object. */
	nativeWindow: any;
	/** Environment.*/
	selectedEnvironment: any;

	/**
	 * Constructor
	 */
	constructor(private winRef: WindowRef) {
		this.nativeWindow = winRef.nativeWindow;
		this.selectedEnvironment = this.nativeWindow.editorEnvironment;
		if (this.selectedEnvironment == null) {
			this.selectedEnvironment = environment;
		}
	}

	/**
	 * Return the selected environment
	 */
	getSelectedEnvironment(): any {		
		return this.selectedEnvironment;
	}
}