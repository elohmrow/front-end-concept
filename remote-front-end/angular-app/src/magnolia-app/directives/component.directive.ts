import { Directive, ElementRef, OnInit, Input, ViewContainerRef } from '@angular/core';

import { MagnoliaContextService } from '../services/magnolia-context.service';

@Directive({
  selector: '[cms-component]'
})
export class ComponentDirective implements OnInit {
	/** Native element. */
	nativeElement: any;
	/** Tag name.*/
	tag = "cms:component";
	/** Component config.*/
	@Input() component: any;
	
	/**
	 * Constructor.
	 */
	constructor(
		private el: ElementRef, 
		private mgnCtxService: MagnoliaContextService,
		public viewContainerRef: ViewContainerRef
	) {
		this.nativeElement = el.nativeElement;
	}
	
	/**
	 * On init
	 */
	ngOnInit(): void {
		if (this.mgnCtxService.isEditionMode()) {			
			//Get parent
			var parentDiv = this.nativeElement.parentNode;
			//Create comment before
			var commentBefore = this.before(this.component);
			parentDiv.appendChild(commentBefore);
			//Create comment after
			var commentAfter = this.after();
			parentDiv.appendChild(commentAfter);
			//Insert comment before
			parentDiv.insertBefore(commentBefore, this.nativeElement);
			//Insert comment after
			parentDiv.insertBefore(commentAfter, this.nativeElement.nextSibling);
		}
	}
	
    /**
     * Insert the area comment before the area starts
     * 
     * @param component The component config
     * @return The DOM comment
     */
    before(component: Object): Comment {
    	var complete = `${this.tag} content="website:${this.component['@path']}"
    	dialog="${this.getDialog()}"
    	label="${this.getTitle()}"
    	activationStatus="${2}"`;
    	
    	return document.createComment(complete);
    }
    
    /**
     * Insert the area comment after the area ends
     * 
     * @return The DOM comment
     */
    after(): Comment {
    	return document.createComment("/" + this.tag);
    }
    
    /**
     * Returns the node content path
     * 
     * @return The JCR node path
     */
    getContent(): string {
    	return this.mgnCtxService.getCurrentNode();
    }
    
    /**
     * Returns the associated dialog id (if any)
     * 
     * @return The dialog id
     */
    getDialog(): string {
    	if (this.component.componentDefinition!=null && this.component.componentDefinition.dialog!=null) {
    		return this.component.componentDefinition.dialog;
    	} else {
    		return "";
    	}
    }
    
    /**
     * Returns the associated label (if any)
     * 
     * @return The labrl
     */
    getTitle(): string {
    	if (this.component.componentDefinition!=null && this.component.componentDefinition.title!=null) {
    		return this.component.componentDefinition.title;
    	} else {
    		return "";
    	}
    }
    
    getComponent(): any {
    	return this.component;
    }
}