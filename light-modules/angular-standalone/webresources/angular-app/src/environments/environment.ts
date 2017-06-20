// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
	production: false,
	restUrl: "http://localhost:8080/angular-concept-webapp/.rest/nodes/page/",
	damUrl: "http://localhost:8080/angular-concept-webapp/dam/",
	magnoliaPageNode: "/train",
	magnoliaPageNodeDepth: 10,
	staticFilePath: "http://localhost:8080/angular-concept-webapp/.resources/angular-standalone/webresources/angular-app/src"
};