webpackJsonp([2,4],{

/***/ 106:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(174);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(238)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js??ref--9-1!../node_modules/postcss-loader/index.js??postcss!./styles.css", function() {
			var newContent = require("!!../node_modules/css-loader/index.js??ref--9-1!../node_modules/postcss-loader/index.js??postcss!./styles.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 174:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, "body {\n\tpadding: 0px;\n\tmargin-top: 0px!important;\n}\n\n/** Header */\n.mgn-air-asia-header {\n\tbackground-color: #1A1A1A;\n\tmargin-bottom: 0px!important;\n\tpadding: 10px 0 10px 0;\n\tfont-size: 16px;\n}\n.navbar-default .navbar-nav > li > a {\n    color: rgba(245, 245, 245, 0.7)!important;\n}\n.navbar-default .navbar-nav > li > a:hover {\n    color: whitesmoke!important;\n}\n\n/** Navigation */\n.mgn-air-asia-navigation {\n\tbackground-color: #151515;\n\tmargin-bottom: 0px!important;\n}\n.mgn-air-asia-navigation .register {\n\tbackground-color: #4e4e4e;  \n\tborder-radius: 10px; \n\tpadding: 5px; \n\tmargin-top: 8px;\n}\n.mgn-air-asia-navigation .register:hover {\n\tbackground-color: #4e4e4e!important;  \n\tborder-radius: 10px!important; \n\tpadding: 5px!important; \n\tcolor: whitesmoke!important;\n}\n\n/** Footer - disclaimer */\n.mgn-air-asia-footer .disclaimer {\n\tpadding-top: 10px;\n\tbackground-color: #E62D2E;\n}\n.list-inline {\n    color: #FFF;\n}\n.list-inline a {\n\tcolor: #FFF;\n    text-decoration: underline;\n}\n\n/** Footer - sitemap */\n.mgn-air-asia-footer .sitemap {\n\tpadding-top: 40px;\n\tpadding-bottom: 40px;\n\tbackground-color: #282828;\n}\n.nav-footer-title {\n    margin-bottom: 10px;\n    color: whitesmoke;\n    font-size: 16px;\n}\n.nav-footer {\n\tlist-style: none;\n\tmargin: 0;\n    padding: 0;\n}\n.nav-footer li {\n\tdisplay: table;\n    padding: 0 0 3px 0;\n}\n.nav-footer li a {\n    font-size: 14px;\n    color: #9e9e9e !important;\n}\n.nav-footer.languages li {\n\tfloat: left;\n    padding: 0 5px 0 0;\n}\n.nav-social-media {\n\tcolor: #c1c1c1 !important;\n\tmargin-bottom: 10px;\n\tfont-size: 16px;\n}\n.mgn-air-asia-footer .social-column {\n\tfloat: left;\n}\n\n.mgn-train-time-table {\n\tborder: 1px;\n}\n\n.navbar-brand {\n\tpadding: 7px 15px 15px 15px!important;\n}\n\n.mgn-air-asia-cell {\n\tpadding: 0px;\n}\n\n.navbar {\n    border-radius: 0px!important;\n}\n.navbar-default {\n    border-width: 0px!important;\n}\n\n/** Carousel */\n.carousel-caption {\n\ttext-align: left!important;\n}\n.carousel-caption h3 {\n\tfont-size: 40px;\n\tmargin-bottom: 20px;\n}\n.carousel-caption p {\n\tmargin-top: 30px;\n\tmargin-bottom: 30px;\n\tfont-size: 12px;\n}\n.carousel-caption a {\n\tpadding: 10px 20px;\n    background-color: red;\n    border-color: transparent;\n    color: #fff;\n    border-radius: 3px;\n}\n\n/** Section */\n.mgn-section {\n\tpadding-top: 80px;\n\tpadding-bottom: 80px;\n    background-position: center;\n    background-size: cover;\n    text-align: center;\n    color: #fff !important;\n    min-height: 410px;\n}\n.mgn-section label {\n    font-size: 24px;\n    padding-bottom: 15px;\n}\n.mgn-section p {\n    font-size: 16px;\n    padding-bottom: 20px;\n}\n.mgn-section .image {\n    padding-bottom: 40px;\n}\n.mgn-section a {\n\tpadding: 10px 20px;\n    background-color: red;\n    border-color: transparent;\n    color: #fff;\n    border-radius: 3px;\n}\n\n/** Banner */\n.mgn-banners {\n\tbackground-color: #383838;\n\tpadding-top: 20px;\n\tpadding-bottom: 20px;\n}\n.mgn-banner {\n\tcursor: pointer;\n    background-repeat: no-repeat;\n    padding: 1.25em !important;\n    padding-left: 2em !important;\n    height: 6em;\n}\n.mgn-banner > a {\n    font-size: 1em;\n    font-weight: bolder;\n    font-size: 16px;\n}\n\n/**Loyalties. */\n.mgn-loyalties {\n\tbackground-color: #F7F7F7;\n\tpadding-top: 50px;\n\tpadding-bottom: 70px;\n}\n\n.mgn-loyalties-header {\n\tpadding-left: 2.5rem;\n    padding-right: 2.5rem;\n    font-size: 1.6em !important;\n    text-align: center;\n    padding-bottom: 50px;\n}\n\n.mgn-loyalty {\n\tbackground-size: cover;\n    background-repeat: no-repeat;\n    background-position: center center;\n    border-radius: 3px;\n    height: 200px;\n    position: relative;\n    box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);\n    color: #4a4a4a;\n}\n.mgn-loyalty .points {\n\tbackground-color: #FFF;\n\tposition: absolute;\n\tbottom: 0px;\n\twidth: 100%;\n}\n.mgn-loyalty .points .destination {\n\tfloat: left;\n\twidth: 50%;\n\tpadding: 5px;\n}\n.mgn-loyalty .points .destination label:first-child {\n\tfont-size: 0.7em !important;\n}\n.mgn-loyalty .points .destination label:last-child {\n\tfont-size: 1.2em !important;\n}\n.mgn-loyalty .points .point {\n\ttext-align: right;\n\tpadding: 5px;\n}\n.mgn-loyalty .points .point label:first-child {\n\tfont-size: 1.4em !important;\n}\n.mgn-loyalty .points .point label:last-child {\n\tfont-size: 0.6em !important;\n}\n\n.mgn-loyalty-sec {\n\tborder-bottom:1px solid #e3e3e3;\n    position: relative;\n    height: 80px;\n}\n.mgn-loyalty-sec .points {\n\tposition: absolute;\n\tbottom: 0px;\n\twidth: 100%;\n}\n.mgn-loyalty-sec .points .destination {\n\tfloat: left;\n\twidth: 50%;\n\tpadding: 5px;\n}\n.mgn-loyalty-sec .points .destination label:first-child {\n\tfont-size: 0.7em !important;\n}\n.mgn-loyalty-sec .points .destination label:last-child {\n\tfont-size: 1.2em !important;\n}\n.mgn-loyalty-sec .points .point {\n\ttext-align: right;\n\tpadding: 5px;\n}\n.mgn-loyalty-sec .points .point label:first-child {\n\tfont-size: 1.4em !important;\n}\n.mgn-loyalty-sec .points .point label:last-child {\n\tfont-size: 0.6em !important;\n}", ""]);

// exports


/***/ }),

/***/ 238:
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ 242:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(106);


/***/ }),

/***/ 7:
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ })

},[242]);
//# sourceMappingURL=styles.bundle.js.map