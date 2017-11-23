var DefinitionExtractor = function () {
    this.getRandomNumber = function () {
        return Math.random();
    }
    
    /**
     * Return the JSON representation of all areas defined
     *
     * @param templateName
     *            The template name
     */
    this.getAllAreaDefinitions = function (templateName) {
        var areas = null;

        var definition = this.templateRegistry.getProvider(templateName).get();
        if (definition !== null) {
            areas = definition.getAreas();
        }

        return areas;
    }
};

new DefinitionExtractor();