import { NgModule }      					from '@angular/core';
import { CommonModule }        				from '@angular/common';

//Services
import { WindowRef }         				from './services/windowref.service';
import { MagnoliaContextService }   			from './services/magnolia-context.service';
import { MagnoliaComponentMapperService }   	from './services/magnolia-component-mapper.service';
import { EnvironmentService }   				from './services/environment.service';

//Directives
import { AreaDirective } 					from './directives/area.directive';
import { ComponentDirective } 				from './directives/component.directive';

//Components
import { AbstractArea } 					from './area/abstract.area';
import { ListArea } 						from './area/list.area';
import { AbstractComponent } 				from './component/abstract.component';
import { RouterComponent } 					from './component/router.component';

@NgModule({
	imports: [CommonModule],
	declarations: [ 
       AreaDirective,
       ComponentDirective, 
       
       AbstractArea,
       ListArea,
       AbstractComponent,
       RouterComponent
	],               
	providers: [ 
	   WindowRef,
	   MagnoliaContextService,
	   MagnoliaComponentMapperService,
	   EnvironmentService
    ],
    exports:      [
	   AreaDirective,
	   ListArea,
	   ComponentDirective,
	   RouterComponent
    ]
})
export class MagnoliaModule { }