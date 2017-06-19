<!doctype html>
<html lang="en">
	<head>
		<title>Angular4Heroes</title>
		<base href="/deutsche-bahn-poc-webapp/bahn">
		
		<meta charset="UTF-8">
	    <meta name="viewport" content="width=device-width, initial-scale=1">
		
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<link rel="icon" type="image/x-icon" href="favicon.ico">
		<link rel="stylesheet" type="text/css" href="https://www.bahn.de/common/view/static/1495468621/responsive/css/portal.min.css">
		
		[@cms.page /]
		
		<script>
			window.singlePageConfig = ${model.getSinglePageConfig(content)};
		</script>
	</head>
	<body>
		<my-app>Loading AppComponent content here ...</my-app>
		
		<script type="text/javascript" src="/deutsche-bahn-poc-webapp/.resources/deutsche-bahn/webresources/angular-app/dist/inline.bundle.js"></script>
		<script type="text/javascript" src="/deutsche-bahn-poc-webapp/.resources/deutsche-bahn/webresources/angular-app/dist/polyfills.bundle.js"></script>
		<script type="text/javascript" src="/deutsche-bahn-poc-webapp/.resources/deutsche-bahn/webresources/angular-app/dist/vendor.bundle.js"></script>
		<script type="text/javascript" src="/deutsche-bahn-poc-webapp/.resources/deutsche-bahn/webresources/angular-app/dist/main.bundle.js"></script>
		<script type="text/javascript" src="/deutsche-bahn-poc-webapp/.resources/deutsche-bahn/webresources/angular-app/dist/styles.bundle.js"></script>
	</body>
</html>
