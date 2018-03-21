import { NgModule}      				from '@angular/core';
import { BrowserModule } 			from '@angular/platform-browser';
import { FormsModule }   			from '@angular/forms';
import { HttpModule }    			from '@angular/http';

//Magnolia module
import { MagnoliaModule } 			from '../magnolia-app/magnolia.module';

//Services
import { LoyaltyService }   			from './services/loyalty.service';

//Components
import { AppRoutingModule }   		from './app-routing.module';
import { AppComponent }  			from './components/app/app.component';
import { HeaderComponent } 			from './components/header/header.component';
import { FooterComponent } 			from './components/footer/footer.component';
import { NavigationComponent } 		from './components/navigation/navigation.component';
import { CarouselComponent } 		from './components/carousel/carousel.component';
import { SectionComponent } 			from './components/section/section.component';
import { DoubleSectionsComponent } 	from './components/double-sections/double-sections.component';
import { BannersComponent } 			from './components/banners/banners.component';
import { LoyaltiesComponent } 		from './components/loyalties/loyalties.component';

@NgModule({
	imports: [
      BrowserModule,
      FormsModule,
      HttpModule,
      AppRoutingModule,
      MagnoliaModule
    ],
  	declarations: [ 
		AppComponent,
		
		HeaderComponent, 
		FooterComponent, 
		NavigationComponent, 
		CarouselComponent, 
		SectionComponent, 
		DoubleSectionsComponent, 
		BannersComponent,
		LoyaltiesComponent
	],
	entryComponents: [ 
	    CarouselComponent,
	    SectionComponent,
	    DoubleSectionsComponent,
	    BannersComponent,
	    LoyaltiesComponent
	],
	providers: [
	    LoyaltyService
    ],
	bootstrap:    [ 
       AppComponent 
    ]
})
export class AppModule { }
