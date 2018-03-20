import { Component, AfterViewInit, Input, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';

import { MagnoliaComponentMapperService } 	from '../services/magnolia-component-mapper.service';
import { WindowRef } 						from '../services/windowref.service';
import { AbstractComponent } 				from './abstract.component';

@Component({
  selector: 'mgn-router',
  template: "nbsp;"
})
export class RouterComponent implements AfterViewInit {
	/** Component config.*/
	@Input() component: any;
	/** Native window object. */
	nativeWindow: any;

	/**
	 * Constructor
	 */
	constructor(
		private resolver: ComponentFactoryResolver, 
		private mapper: MagnoliaComponentMapperService,
		private viewContainerRef: ViewContainerRef,
		private winRef: WindowRef
	) { 
		this.nativeWindow = winRef.nativeWindow;
	}

	/**
	 * Loads component after init
	 */
	ngAfterViewInit() {
		let componentClass = this.mapper.getComponent(this.component["mgnl:template"]);
		
		if (typeof componentClass!=="undefined") {
			this.loadComponent(componentClass);
		}
	}
	
	/**
	 * Loads the components thanks to its cmsTemplateId
	 */
	loadComponent(componentClass:any) {
		//Gets the component factory
		let componentFactory = this.resolver.resolveComponentFactory(componentClass);
		
		//Get the view container
		this.viewContainerRef.clear();
		let componentRef = this.viewContainerRef.createComponent(componentFactory);
		(<AbstractComponent>componentRef.instance).component = this.component;
	}
}