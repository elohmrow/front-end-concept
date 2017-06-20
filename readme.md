# Set up


### Installation steps
* Change the rest tools base URL
* Add the rest role to anonymous
* Allow the anonymous role to access the website page node (read-only)
* Allow the rest role to access the /.rest/nodes/page
* Remove default config in the CORS filter
* Create a symbolic link: /light-modules/angular-standalone to /angular-concept-webapp/src/main/webapp/modules


### Angular
* Download the [Angular CLI library](https://cli.angular.io/)
* Execute **npm install** to install the necessary library (root: ../angular-app)
* Execute **ng build** to generate the distribution files anf make your change available in the pages app
* Execute **ng serve** to start the [Angular app](http://localhost:4200/)
* All the constants (DAM URL, REST URL, page node name, ...) are defined in the Angular environment file.
* IMPORTANT: **ng serve** delete the dist files generated by **ng build**. Therefore, execute that command after **ng serve**.


### Magnolia
* When using freemarker, Magnolia creates the area node on the first page opening
* With Angular template, you need to create the area node manually in the JCR browser app.
* Add the following code at then end of the HEAD tag

```
<script>
	window.singlePageConfig = ${model.getSinglePageConfig(content)};
</script>
```

* Add the following line in the page descriptor

```
modelClass: info.magnolia.concept.angular.integration.model.DefinitionExtractorModel
```


# API


### Area
* **cms-area** defines a Magnolia area. This attribute is listened by a directive which adds the **pages app** required HTML comments.
* **list-area** is the default implementation of the area (check Component section to see its code)
* **area-name** makes the link between the area name defined in Magnolia and the Angular area

Example:
```
<div areaName="left" cms-area list-area></div>
```


### Component
* **cms-component** defines a Magnolia component. This attribute is listened by a directive which adds the **pages app** required HTML comments.
* **[component]="component"** passes as parameter the Magnolia component content.

Example:
```
<ng-template ngFor let-component [ngForOf]="components">
    <ng-template [component]="component" cms-component></ng-template>
</ng-template>
```


### Mapping between the Magnolia components and the Angular ones
The mapping must be defined in the **src/environments/mapping.ts** angular file.

Example:
```
import { TitleComponent } 		from '../app/components/title/title.component';
import { TextImageComponent } 	from '../app/components/text-image/text-image.component';
import { SubtitleComponent } 	from '../app/components/subtitle/subtitle.component';
import { TimeTableComponent } 	from '../app/components/time-table/time-table.component';

export const COMPONENTS = {
	"angular-standalone:components/title": TitleComponent,
	"angular-standalone:components/text-image": TextImageComponent,
	"angular-standalone:components/subtitle": SubtitleComponent,
	"angular-standalone:components/time-table": TimeTableComponent
};
```