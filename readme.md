### Installation steps
* Change the rest tools base URL
* Add the rest role to anonymous
* Allow anonymous to access the website node
* Remove default config in the CORS filter

### Angular
* Download the [Angular CLI library](https://cli.angular.io/)
* Execute **npm install** to install the necessary library (root: ../angular-app)
* Execute **ng build** to generate the distribution files anf make your change available in the pages app
* Execute **ng serve** to start the [Angular app](http://localhost:4200/)
* All the constants (DAM URL, REST URL, page node name, ...) are defined in the Angular environment file.

### Magnolia
* When using freemarker, Magnolia creates the area node on the first page opening
* With Angular template, you need to create the area node manually in the JCR browser app.
* Add the following code at then end of the HEAD tag

```
<script>
	window.singlePageConfig = ${model.getSinglePageConfig(content)};window.singlePageConfig = ${model.getSinglePageConfig(content)};
</script>
```

* Add the following line in the page descriptor

```
modelClass: info.magnolia.concept.angular.integration.model.DefinitionExtractorModel
```
