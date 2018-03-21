import { Injectable } 				from '@angular/core';
import { Http, Response }          	from '@angular/http';
import { Observable } 				from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { WindowRef } 				from './windowref.service';
import { EnvironmentService } 		from './environment.service';

@Injectable()
export class MagnoliaContextService {
	/** Native window object. */
	nativeWindow: any;
	/** Is edition mode. */
	editionMode: boolean;
	/** Single page config.*/
	singlePageConfig: any;

	/**
	 * Constructor
	 */
	constructor(private winRef: WindowRef, private http: Http, private environmentService: EnvironmentService) {
		this.nativeWindow = winRef.nativeWindow;
		this.singlePageConfig = this.nativeWindow.singlePageConfig;
		
		//Sets the edit mode
		this.editionMode = typeof(this.singlePageConfig) !== "undefined";
	}
	
	/**
	 * Initialize the service
	 */
	init(app: any) {		
		//If production mode, then gather content through a REST call
		if (!this.editionMode) {
			this.singlePageConfig = new Object();
			
			this.getMagnoliaData().subscribe(
				content => {
					this.singlePageConfig.content = content;
					app.isDataLoaded = true;
				}
			);
		} else {
			app.isDataLoaded = true;
		}
	}
		
	/**
	 * Return whether the page is in edition mode
	 * 
	 * @return Whether the page is in edition mode
	 */
	isEditionMode(): boolean {
		return this.editionMode; 
	}
	
	/**
	 * Return the Javascript window object reference
	 * 
	 * @return The window object reference
	 */
	getWindowObject(): any {
		return this.nativeWindow;
	}
	
	/**
	 * Returns the current Magnolia JCR node path.
	 */
	getCurrentNode(): string {
		return this.singlePageConfig.content["@path"];
	}
	
	/**
	 * Return the list of defined areas in the Magnolia context
	 */
	getAreas(): any[] {
		return this.singlePageConfig.areaDefinitions;	
	}
	
	/**
	 * Return the the defined area in the Magnolia context
	 * 
	 * @param areaName The name of the area
	 */
	getArea(areaName: string): any {
		if (this.singlePageConfig.areaDefinitions !== null) {
			return this.singlePageConfig.areaDefinitions[areaName];	
		} else {
			return null;
		}
	}
	
	/**
	 * Return the area's defined components
	 * 
	 * @param areaName The name of the area
	 */
	getAreaComponents(areaName: string): any {
		var results = new Array();
		
		if (typeof(this.singlePageConfig.content) !== "undefined") {
			//Gets the area content
			var content = this.singlePageConfig.content;
			var areaContent = content[areaName];
			
			if (areaContent!=null) {    			    	
				var components = areaContent["@nodes"];
				components.map(nodeName => {
					var value = areaContent[nodeName];

			    	    if (typeof(value) === "object" && value["@nodeType"] === "mgnl:component") {
			    	    	if (this.editionMode) {
				    	    	//Gets the template
				    	    	var templateId = value["mgnl:template"];
				    	    	var template = this.getComponent(templateId);
				    	    	value.componentDefinition = template;
			    	    	}
		    	    	
			    	    	results.push(value);
		    	    }
		    	});
	    	}
		}

		return results;
	}
	
	/**
	 * Return the defined component
	 * 
	 * @param areaName The name of the area
	 */
	getComponent(componentId: string): any {		
		if (this.singlePageConfig.componentsDefinitions !== null) {
			return this.singlePageConfig.componentsDefinitions[componentId];	
		} else {
			return null;
		}
	}
	
	/**
	 * Contact Magnolia and gets the node content back.
	 */
	private getMagnoliaData() {
		return this.http.get(this.environmentService.getSelectedEnvironment().restUrl)
    		.map(res => res.json());
	}
	
	/**
	 * Extract JSON from the REST call response
	 */
	private extractData(res: Response) {
		let body = res.json();
		return body.data || { };
	}
}