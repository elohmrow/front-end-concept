import { NgModule }      			from '@angular/core';

//Services
import { WindowRef }         		from './services/windowref.service';
import { MagnoliaContextService }   from './services/magnolia-context.service';

//Directives
import { AreaDirective } 			from './directives/area.directive';
import { ComponentDirective } 		from './directives/component.directive';

//Components
import { AbstractArea } 			from './area/abstract.area';
import { AbstractComponent } 		from './component/abstract.component';

@NgModule({
	declarations: [ 
       AreaDirective,
       ComponentDirective, 
       
       AbstractArea,
       AbstractComponent
	],               
	providers: [ 
	   WindowRef,
	   MagnoliaContextService
    ],
    exports:      [
	   AreaDirective,
	   ComponentDirective
    ]
})
export class MagnoliaModule { }