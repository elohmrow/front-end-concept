import { Directive, ElementRef, OnInit, Input } from '@angular/core';

import { MagnoliaContextService } from '../services/magnolia-context.service';

@Directive({ 
	selector: '[cms-area]' 
})
export class AreaDirective implements OnInit {
	/** Area name. */
	@Input() areaName: string;
	/** Tag name.*/
	tag = "cms:area";

	/**
	 * Constructor.
	 */
    constructor(private el: ElementRef, private mgnCtxService: MagnoliaContextService) {

    }
    
	/**
	 * On init
	 */
	ngOnInit() {
		if (this.mgnCtxService.isEditionMode()) {
			//Get the area
			var area = this.mgnCtxService.getArea(this.areaName);
			
			//Get parent
			var parentDiv = this.el.nativeElement.parentNode;
			//Create comment before
			var commentBefore = this.before(area);
			parentDiv.appendChild(commentBefore);
			//Create comment after
			var commentAfter = this.after();
			parentDiv.appendChild(commentAfter);
			//Insert comment before
			parentDiv.insertBefore(commentBefore, this.el.nativeElement);
			//Insert comment after
			parentDiv.insertBefore(commentAfter, this.el.nativeElement.nextSibling);
		}
	}
    
    /**
     * Insert the area comment before the area starts
     * 
     * @param area The area config
     * @return The DOM comment
     */
    before(area: Object): Comment {
    	var complete = `${this.tag} content="website:${this.getContent()}/${this.areaName}"
    	name="${this.areaName}"
    	availableComponents="${this.getAvailableComponents(area)}"
    	type="${this.getType(area)}"
    	label="${this.getLabel(area)}"
    	inherit="${false}"
    	optional="${this.getOptional(area)}"
    	createAreaNode="${this.getCreateAreaNode(area)}"
    	showAddButton="${this.getShowAddButton(area)}"
    	showNewComponentArea="${this.getShowNewComponentArea(area)}"
    	description="${this.getDescription(area)}"
    	activationStatus="${0}"`;
    	
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
    
    //Return the content
    getAvailableComponents(area: any): string {
    	var components = "";
    	
    	if (area.availableComponents!=null) {    			    	
	    	for (var key in area.availableComponents) {
	    	    var component = area.availableComponents[key];
	    	    components += component.id + ",";
	    	}
	    	
	    	components = components.substring(0, components.length-1);
    	}
    	
    	return components;
    }
    
    //Return the area type (default list)
    getType(area: any): string {
    	if (area.type==null) {
    		return "list";
    	} else {
    		return area.type;
    	}
    }
    
    //Return the area label (default name)
    getLabel(area: any): string {
    	if (area.title==null) {
    		return this.areaName;
    	} else {
    		return area.title;
    	}
    }
    
    //Return the optional flag (default false)
    getOptional(area: any): string {
    	if (area.optional==null) {
    		return "false";
    	} else {
    		return "" + area.optional;
    	}
    }
    
    //Return the create node area flag (default true)
    getCreateAreaNode(area: any): string {
    	if (area.optional==null) {
    		return "true";
    	} else {
    		return "" + area.createAreaNode;
    	}
    }
    
    //Return the create node area flag (default true)
    getShowAddButton(area: any): string {
    	return "true";
    }
    
    //Return the create node area flag (default true)
    getShowNewComponentArea(area: any): string {
    	return "true";
    }
    
    //Return the description
    getDescription(area: any): string {
    	if (area.optional==null) {
    		return "";
    	} else {
    		return area.description;
    	}
    }
}