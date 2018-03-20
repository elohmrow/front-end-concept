import { NgModule}      				from '@angular/core';
import { BrowserModule } 			from '@angular/platform-browser';
import { FormsModule }   			from '@angular/forms';
import { HttpModule }    			from '@angular/http';

//Magnolia module
import { MagnoliaModule } 			from '../magnolia-app/magnolia.module';

//Services
import { TrainService }   			from './services/train.service';

//Components
import { AppRoutingModule }   		from './app-routing.module';
import { AppComponent }  			from './components/app/app.component';
import { TitleComponent } 			from './components/title/title.component';
import { SubtitleComponent } 		from './components/subtitle/subtitle.component';
import { HeaderComponent } 			from './components/header/header.component';
import { FooterComponent } 			from './components/footer/footer.component';
import { NavigationComponent } 		from './components/navigation/navigation.component';
import { TextImageComponent } 		from './components/text-image/text-image.component';
import { TimeTableComponent } 		from './components/time-table/time-table.component';
import { CarouselComponent } 		from './components/carousel/carousel.component';
import { SectionComponent } 			from './components/section/section.component';
import { DoubleSectionsComponent } 	from './components/double-sections/double-sections.component';
import { BannersComponent } 			from './components/banners/banners.component';

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
		
		TitleComponent, 
		SubtitleComponent, 
		HeaderComponent, 
		FooterComponent, 
		NavigationComponent, 
		TextImageComponent, 
		TimeTableComponent, 
		CarouselComponent, 
		SectionComponent, 
		DoubleSectionsComponent, 
		BannersComponent
	],
	entryComponents: [ 
	    TitleComponent,
	    TextImageComponent,
	    SubtitleComponent,
	    TimeTableComponent,
	    CarouselComponent,
	    SectionComponent,
	    DoubleSectionsComponent,
	    BannersComponent
	],
	providers: [
	    TrainService 
    ],
	bootstrap:    [ 
       AppComponent 
    ]
})
export class AppModule { }
