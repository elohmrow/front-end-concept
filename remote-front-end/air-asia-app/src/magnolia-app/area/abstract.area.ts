import { Component, OnInit, ElementRef, ComponentFactoryResolver, AfterViewInit, ViewChildren, QueryList } from '@angular/core';

import { MagnoliaContextService } 			from '../services/magnolia-context.service';
import { MagnoliaComponentMapperService } 	from '../services/magnolia-component-mapper.service';
import { ComponentDirective } 				from '../directives/component.directive';
import { AbstractComponent } 				from '../component/abstract.component';

@Component({
	template: ""
})
export class AbstractArea implements OnInit, AfterViewInit {
	/** Area name. */
	areaName: string;
	/** List of area's components. */
	components: any[];
	/** List of the component view containers. */
	@ViewChildren(ComponentDirective) templates: QueryList<ComponentDirective>;

	/**
	 * Constructor
	 */ 
	constructor(
		private elementRef: ElementRef, 
		private mgnCtxService: MagnoliaContextService,
		private resolver: ComponentFactoryResolver, 
		private mapper: MagnoliaComponentMapperService
	) {
		this.areaName = elementRef.nativeElement.getAttribute("areaName");
	}

	/**
	 * On init
	 */ 
  	ngOnInit() {
  		this.getComponents();
  	}
  	
	/**
	 * Loads component after init
	 */
	ngAfterViewInit() {
		var abstractArea = this;
				
		this.templates.forEach(function(item: ComponentDirective, index: number, array: ComponentDirective[]){
			//Gets the component
			let component = item.getComponent();
			// Gets the component class
			let componentClass = abstractArea.mapper.getComponent(component["mgnl:template"]);
			
			if (typeof componentClass!=="undefined") {
				setTimeout(() => {
					abstractArea.loadComponent(componentClass, item, component);
				}, 1);
			}
		});
	}
  	
	/**
	 *  Get list of configured components
	 */
  	getComponents(): void {
  		this.components =  this.mgnCtxService.getAreaComponents(this.areaName);
	}
  	
	/**
	 * Loads the components thanks to its cmsTemplateId
	 */
	loadComponent(componentClass:any, item: ComponentDirective, component: any) {
		//Gets the component factory
		let componentFactory = this.resolver.resolveComponentFactory(componentClass);
		
		//Get the view container
		item.viewContainerRef.clear();
		let componentRef = item.viewContainerRef.createComponent(componentFactory);
		(<AbstractComponent>componentRef.instance).component = component;
	}
}