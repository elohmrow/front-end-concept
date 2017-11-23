<!doctype html>
<html lang="en">
	<head>
		<title>Magnolia Train Station</title>
		
		<meta charset="UTF-8">
	    <meta name="viewport" content="width=device-width, initial-scale=1">
		
		<link rel="shortcut icon" href="${ctx.contextPath}/.resources/react-train-station/webresources/favicon.ico">
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.min.css">
		<link rel="manifest" href="${ctx.contextPath}/.resources/react-train-station/webresources/manifest.json">
		<link href="${ctx.contextPath}/.resources/react-train-station/webresources/static/css/main.css" rel="stylesheet">
		
		[@cms.page /]

		<script>
			window.singlePageConfig = {
				areaDefinitions: ${model.getAreaDefinitionsJson(content["mgnl:template"])!}, 
				componentsDefinitions: ${model.getComponentDefinitionsJson(content["mgnl:template"])!}, 
				content: ${model.getPageContent(content["@name"])!}
			}
		</script>
	</head>
	<body>
		<noscript>You need to enable JavaScript to run this app.</noscript>
			
		<div id="root"></div>

		<script type="text/javascript" src="${ctx.contextPath}/.resources/react-train-station/webresources/static/js/main.js"></script>
	</body>
</html>
