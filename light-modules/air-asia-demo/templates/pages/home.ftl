<!doctype html>
<html lang="en">
	<head>
		<title>Air Asia demo</title>
		<base href="${ctx.contextPath}/air-asia-demo">
		
		<meta charset="UTF-8">
	    <meta name="viewport" content="width=device-width, initial-scale=1">
		

		<link rel="icon" type="image/x-icon" href="favicon.ico">
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.min.css">
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/3.2.1/css/font-awesome.min.css">
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/3.2.1/font/fontawesome-webfont.eot">
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/3.2.1/font/fontawesome-webfont.svg">
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/3.2.1/font/fontawesome-webfont.ttf">
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/3.2.1/font/fontawesome-webfont.woff">
		
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
		<my-app>Loading AppComponent content here ...</my-app>
	
		<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
		<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/js/bootstrap.min.js"></script>
		
		<script type="text/javascript" src="${ctx.contextPath}/.resources/air-asia-demo/webresources/inline.bundle.js"></script>
		<script type="text/javascript" src="${ctx.contextPath}/.resources/air-asia-demo/webresources/polyfills.bundle.js"></script>
		<script type="text/javascript" src="${ctx.contextPath}/.resources/air-asia-demo/webresources/vendor.bundle.js"></script>
		<script type="text/javascript" src="${ctx.contextPath}/.resources/air-asia-demo/webresources/main.bundle.js"></script>
		<script type="text/javascript" src="${ctx.contextPath}/.resources/air-asia-demo/webresources/styles.bundle.js"></script>
</html>