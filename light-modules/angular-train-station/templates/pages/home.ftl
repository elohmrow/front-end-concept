<!doctype html>
<html lang="en">
	<head>
		<title>Magnolia Train Station</title>
		<base href="${ctx.contextPath}/train-angular">
		
		<meta charset="UTF-8">
	    <meta name="viewport" content="width=device-width, initial-scale=1">
		
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<link rel="icon" type="image/x-icon" href="favicon.ico">
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.min.css">
		
		[@cms.page /]
		
		<script>
			window.singlePageConfig = ${model.getSinglePageConfig(content)};
		</script>
	</head>
	<body>
		<my-app>Loading AppComponent content here ...</my-app>
		
		<script type="text/javascript" src="${ctx.contextPath}/.resources/angular-train-station/webresources/inline.bundle.js"></script>
		<script type="text/javascript" src="${ctx.contextPath}/.resources/angular-train-station/webresources/polyfills.bundle.js"></script>
		<script type="text/javascript" src="${ctx.contextPath}/.resources/angular-train-station/webresources/vendor.bundle.js"></script>
		<script type="text/javascript" src="${ctx.contextPath}/.resources/angular-train-station/webresources/main.bundle.js"></script>
		<script type="text/javascript" src="${ctx.contextPath}/.resources/angular-train-station/webresources/styles.bundle.js"></script>
	</body>
</html>
