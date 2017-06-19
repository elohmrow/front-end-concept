webpackJsonp([1,4],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__magnolia_app_area_abstract_area__ = __webpack_require__(36);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScheduleComponent; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ScheduleComponent = (function (_super) {
    __extends(ScheduleComponent, _super);
    function ScheduleComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ScheduleComponent;
}(__WEBPACK_IMPORTED_MODULE_1__magnolia_app_area_abstract_area__["a" /* AbstractArea */]));
ScheduleComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: "[schedule-area]",
        template: __webpack_require__(176),
        styles: [__webpack_require__(166)]
    })
], ScheduleComponent);

//# sourceMappingURL=schedule.component.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__magnolia_app_services_magnolia_context_service__ = __webpack_require__(18);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    /**
     * Constructor
     */
    function AppComponent(mgnCtxService) {
        this.mgnCtxService = mgnCtxService;
        /** Is data loaded. */
        this.isDataLoaded = false;
    }
    /**
     * On init
     */
    AppComponent.prototype.ngOnInit = function () {
        //Initializes the Magnolia service
        this.mgnCtxService.init(this);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'my-app',
        template: __webpack_require__(177),
        styles: [__webpack_require__(167)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__magnolia_app_services_magnolia_context_service__["a" /* MagnoliaContextService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__magnolia_app_services_magnolia_context_service__["a" /* MagnoliaContextService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'footer',
        template: __webpack_require__(178),
        styles: [__webpack_require__(168)]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__(25);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = (function () {
    function HeaderComponent() {
        this.env = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */];
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'header',
        template: __webpack_require__(179),
        styles: [__webpack_require__(169)]
    }),
    __metadata("design:paramtypes", [])
], HeaderComponent);

//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavigationComponent = (function () {
    function NavigationComponent() {
    }
    NavigationComponent.prototype.ngOnInit = function () {
    };
    return NavigationComponent;
}());
NavigationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'nav',
        template: __webpack_require__(180),
        styles: [__webpack_require__(170)]
    }),
    __metadata("design:paramtypes", [])
], NavigationComponent);

//# sourceMappingURL=navigation.component.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__magnolia_app_component_abstract_component__ = __webpack_require__(17);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubtitleComponent; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var SubtitleComponent = (function (_super) {
    __extends(SubtitleComponent, _super);
    function SubtitleComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return SubtitleComponent;
}(__WEBPACK_IMPORTED_MODULE_1__magnolia_app_component_abstract_component__["a" /* AbstractComponent */]));
SubtitleComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: '[app-subtitle]',
        template: __webpack_require__(181),
        styles: [__webpack_require__(171)]
    })
], SubtitleComponent);

//# sourceMappingURL=subtitle.component.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__magnolia_app_component_abstract_component__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(25);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TextImageComponent; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TextImageComponent = (function (_super) {
    __extends(TextImageComponent, _super);
    /**
     * Constructor
     */
    function TextImageComponent() {
        var _this = _super.call(this) || this;
        _this.env = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */];
        return _this;
    }
    return TextImageComponent;
}(__WEBPACK_IMPORTED_MODULE_1__magnolia_app_component_abstract_component__["a" /* AbstractComponent */]));
TextImageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: '[app-text-image]',
        template: __webpack_require__(182),
        styles: [__webpack_require__(172)]
    }),
    __metadata("design:paramtypes", [])
], TextImageComponent);

//# sourceMappingURL=text-image.component.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__magnolia_app_component_abstract_component__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_train_service__ = __webpack_require__(63);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimeTableComponent; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TimeTableComponent = (function (_super) {
    __extends(TimeTableComponent, _super);
    /**
     * Constructor
     */
    function TimeTableComponent(trainService) {
        var _this = _super.call(this) || this;
        _this.trainService = trainService;
        return _this;
    }
    /**
     * On init
     */
    TimeTableComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
        this.trains = this.trainService.getTrains();
    };
    return TimeTableComponent;
}(__WEBPACK_IMPORTED_MODULE_1__magnolia_app_component_abstract_component__["a" /* AbstractComponent */]));
TimeTableComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: '[app-time-table]',
        template: __webpack_require__(183),
        styles: [__webpack_require__(173)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_train_service__["a" /* TrainService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_train_service__["a" /* TrainService */]) === "function" && _a || Object])
], TimeTableComponent);

var _a;
//# sourceMappingURL=time-table.component.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__magnolia_app_component_abstract_component__ = __webpack_require__(17);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TitleComponent; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var TitleComponent = (function (_super) {
    __extends(TitleComponent, _super);
    function TitleComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return TitleComponent;
}(__WEBPACK_IMPORTED_MODULE_1__magnolia_app_component_abstract_component__["a" /* AbstractComponent */]));
TitleComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: '[app-title]',
        template: __webpack_require__(184),
        styles: [__webpack_require__(174)]
    })
], TitleComponent);

//# sourceMappingURL=title.component.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_magnolia_context_service__ = __webpack_require__(18);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AreaDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AreaDirective = (function () {
    /**
     * Constructor.
     */
    function AreaDirective(el, mgnCtxService) {
        this.el = el;
        this.mgnCtxService = mgnCtxService;
        /** Tag name.*/
        this.tag = "cms:area";
    }
    /**
     * On init
     */
    AreaDirective.prototype.ngOnInit = function () {
        if (this.mgnCtxService.isEditionMode()) {
            //Get the area
            var area = this.mgnCtxService.getArea(this.areaName);
            //Get parent
            var parentDiv = this.el.nativeElement.parentNode;
            //Create comment before
            var commentBefore = this.before(area);
            parentDiv.appendChild(commentBefore);
            //Create comment after
            var commentAfter = this.after();
            parentDiv.appendChild(commentAfter);
            //Insert comment before
            parentDiv.insertBefore(commentBefore, this.el.nativeElement);
            //Insert comment after
            parentDiv.insertBefore(commentAfter, this.el.nativeElement.nextSibling);
        }
    };
    /**
     * Insert the area comment before the area starts
     *
     * @param area The area config
     * @return The DOM comment
     */
    AreaDirective.prototype.before = function (area) {
        var complete = this.tag + " content=\"website:" + this.getContent() + "/" + this.areaName + "\"\n    \tname=\"" + this.areaName + "\"\n    \tavailableComponents=\"" + this.getAvailableComponents(area) + "\"\n    \ttype=\"" + this.getType(area) + "\"\n    \tlabel=\"" + this.getLabel(area) + "\"\n    \tinherit=\"" + false + "\"\n    \toptional=\"" + this.getOptional(area) + "\"\n    \tcreateAreaNode=\"" + this.getCreateAreaNode(area) + "\"\n    \tshowAddButton=\"" + this.getShowAddButton(area) + "\"\n    \tshowNewComponentArea=\"" + this.getShowNewComponentArea(area) + "\"\n    \tdescription=\"" + this.getDescription(area) + "\"\n    \tactivationStatus=\"" + 0 + "\"";
        return document.createComment(complete);
    };
    /**
     * Insert the area comment after the area ends
     *
     * @return The DOM comment
     */
    AreaDirective.prototype.after = function () {
        return document.createComment("/" + this.tag);
    };
    /**
     * Returns the node content path
     *
     * @return The JCR node path
     */
    AreaDirective.prototype.getContent = function () {
        return this.mgnCtxService.getCurrentNode();
    };
    //Return the content
    AreaDirective.prototype.getAvailableComponents = function (area) {
        var components = "";
        if (area.availableComponents != null) {
            for (var key in area.availableComponents) {
                var component = area.availableComponents[key];
                components += component.id + ",";
            }
            components = components.substring(0, components.length - 1);
        }
        return components;
    };
    //Return the area type (default list)
    AreaDirective.prototype.getType = function (area) {
        if (area.type == null) {
            return "list";
        }
        else {
            return area.type;
        }
    };
    //Return the area label (default name)
    AreaDirective.prototype.getLabel = function (area) {
        if (area.title == null) {
            return this.areaName;
        }
        else {
            return area.title;
        }
    };
    //Return the optional flag (default false)
    AreaDirective.prototype.getOptional = function (area) {
        if (area.optional == null) {
            return "false";
        }
        else {
            return "" + area.optional;
        }
    };
    //Return the create node area flag (default true)
    AreaDirective.prototype.getCreateAreaNode = function (area) {
        if (area.optional == null) {
            return "true";
        }
        else {
            return "" + area.createAreaNode;
        }
    };
    //Return the create node area flag (default true)
    AreaDirective.prototype.getShowAddButton = function (area) {
        return "true";
    };
    //Return the create node area flag (default true)
    AreaDirective.prototype.getShowNewComponentArea = function (area) {
        return "true";
    };
    //Return the description
    AreaDirective.prototype.getDescription = function (area) {
        if (area.optional == null) {
            return "";
        }
        else {
            return area.description;
        }
    };
    return AreaDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Input */])(),
    __metadata("design:type", String)
], AreaDirective.prototype, "areaName", void 0);
AreaDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Directive */])({
        selector: '[cms-area]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* ElementRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_magnolia_context_service__["a" /* MagnoliaContextService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_magnolia_context_service__["a" /* MagnoliaContextService */]) === "function" && _b || Object])
], AreaDirective);

var _a, _b;
//# sourceMappingURL=area.directive.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_magnolia_context_service__ = __webpack_require__(18);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ComponentDirective = (function () {
    /**
     * Constructor.
     */
    function ComponentDirective(el, mgnCtxService) {
        this.el = el;
        this.mgnCtxService = mgnCtxService;
        /** Tag name.*/
        this.tag = "cms:component";
        this.nativeElement = el.nativeElement;
    }
    /**
     * On init
     */
    ComponentDirective.prototype.ngOnInit = function () {
        if (this.mgnCtxService.isEditionMode()) {
            //Get parent
            var parentDiv = this.nativeElement.parentNode;
            //Create comment before
            var commentBefore = this.before(this.component);
            parentDiv.appendChild(commentBefore);
            //Create comment after
            var commentAfter = this.after();
            parentDiv.appendChild(commentAfter);
            //Insert comment before
            parentDiv.insertBefore(commentBefore, this.nativeElement);
            //Insert comment after
            parentDiv.insertBefore(commentAfter, this.nativeElement.nextSibling);
        }
    };
    /**
     * Insert the area comment before the area starts
     *
     * @param component The component config
     * @return The DOM comment
     */
    ComponentDirective.prototype.before = function (component) {
        var complete = this.tag + " content=\"website:" + this.component['@path'] + "\"\n    \tdialog=\"" + this.getDialog() + "\"\n    \tlabel=\"" + this.getTitle() + "\"\n    \tactivationStatus=\"" + 2 + "\"";
        return document.createComment(complete);
    };
    /**
     * Insert the area comment after the area ends
     *
     * @return The DOM comment
     */
    ComponentDirective.prototype.after = function () {
        return document.createComment("/" + this.tag);
    };
    /**
     * Returns the node content path
     *
     * @return The JCR node path
     */
    ComponentDirective.prototype.getContent = function () {
        return this.mgnCtxService.getCurrentNode();
    };
    /**
     * Returns the associated dialog id (if any)
     *
     * @return The dialog id
     */
    ComponentDirective.prototype.getDialog = function () {
        if (this.component.componentDefinition != null && this.component.componentDefinition.dialog != null) {
            return this.component.componentDefinition.dialog;
        }
        else {
            return "";
        }
    };
    /**
     * Returns the associated label (if any)
     *
     * @return The labrl
     */
    ComponentDirective.prototype.getTitle = function () {
        if (this.component.componentDefinition != null && this.component.componentDefinition.title != null) {
            return this.component.componentDefinition.title;
        }
        else {
            return "";
        }
    };
    return ComponentDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Input */])(),
    __metadata("design:type", Object)
], ComponentDirective.prototype, "component", void 0);
ComponentDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Directive */])({
        selector: '[cms-component]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* ElementRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_magnolia_context_service__["a" /* MagnoliaContextService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_magnolia_context_service__["a" /* MagnoliaContextService */]) === "function" && _b || Object])
], ComponentDirective);

var _a, _b;
//# sourceMappingURL=component.directive.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_windowref_service__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_magnolia_context_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__directives_area_directive__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__directives_component_directive__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__area_abstract_area__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__component_abstract_component__ = __webpack_require__(17);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MagnoliaModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

//Services


//Directives


//Components


var MagnoliaModule = (function () {
    function MagnoliaModule() {
    }
    return MagnoliaModule;
}());
MagnoliaModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__directives_area_directive__["a" /* AreaDirective */],
            __WEBPACK_IMPORTED_MODULE_4__directives_component_directive__["a" /* ComponentDirective */],
            __WEBPACK_IMPORTED_MODULE_5__area_abstract_area__["a" /* AbstractArea */],
            __WEBPACK_IMPORTED_MODULE_6__component_abstract_component__["a" /* AbstractComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_1__services_windowref_service__["a" /* WindowRef */],
            __WEBPACK_IMPORTED_MODULE_2__services_magnolia_context_service__["a" /* MagnoliaContextService */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_3__directives_area_directive__["a" /* AreaDirective */],
            __WEBPACK_IMPORTED_MODULE_4__directives_component_directive__["a" /* ComponentDirective */]
        ]
    })
], MagnoliaModule);

//# sourceMappingURL=magnolia.module.js.map

/***/ }),

/***/ 165:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 166:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 167:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 168:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 169:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 17:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AbstractComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AbstractComponent = (function () {
    /**
     * Constructor
     */
    function AbstractComponent() {
    }
    AbstractComponent.prototype.ngOnInit = function () {
    };
    return AbstractComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Input */])(),
    __metadata("design:type", Object)
], AbstractComponent.prototype, "component", void 0);
AbstractComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        template: "nbsp;"
    }),
    __metadata("design:paramtypes", [])
], AbstractComponent);

//# sourceMappingURL=abstract.component.js.map

/***/ }),

/***/ 170:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 171:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 172:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 173:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 174:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 175:
/***/ (function(module, exports) {

module.exports = "<ng-template ngFor let-component [ngForOf]=\"components\">\n    <div app-title *ngIf=\"component['mgnl:template'] === 'deutsche-bahn:components/title'\" [component]=\"component\" cms-component></div>\n    <div app-subtitle *ngIf=\"component['mgnl:template'] === 'deutsche-bahn:components/subtitle'\" [component]=\"component\" cms-component></div>\n    <div app-text-image *ngIf=\"component['mgnl:template'] === 'deutsche-bahn:components/text-image'\" [component]=\"component\" cms-component></div>\n</ng-template>"

/***/ }),

/***/ 176:
/***/ (function(module, exports) {

module.exports = "<ng-template ngFor let-component [ngForOf]=\"components\">\n    <div app-time-table *ngIf=\"component['mgnl:template'] === 'deutsche-bahn:components/time-table'\" [component]=\"component\" cms-component></div>\n</ng-template>"

/***/ }),

/***/ 177:
/***/ (function(module, exports) {

module.exports = "<div id=\"doc\">\n\t<!-- Header -->\n\t<header id=\"header\"></header>\n\t\n\t<!-- Navigation -->\n\t<nav class=\"red\"></nav>\n\t\n\t<!-- Content -->\n\t<div class=\"content clearfix\" *ngIf=\"isDataLoaded\">\n\t\t<!-- Main areas -->\n\t\t<div class=\"section clearfix \">\n\t\t\t<div class=\"modul bild-teaser-auswahlliste js-dropdown-sets-image twoCol\" areaName=\"left\" cms-area main-area></div>\n\t\t\n\t\t\t<div class=\"modul bild-teaser-auswahlliste js-dropdown-sets-image twoCol\" areaName=\"right\" cms-area main-area></div>\n\t\t</div>\n\t\t\n\t\t<!-- Schedule area -->\n\t\t<div class=\"section clearfix full-width\">\n\t\t\t<div class=\"modul marketing-teaser\" areaName=\"schedule\" cms-area schedule-area></div>\n\t\t</div>\n\t</div>\n\t\n\t<!-- Footer -->\n\t<footer class=\"clearfix\"></footer>\n</div>"

/***/ }),

/***/ 178:
/***/ (function(module, exports) {

module.exports = "<div class=\"notice clearfix\"><a class=\"logo-ico logoIcon-oeko\" href=\"/p/view/service/umwelt/unterwegs_mit_oekostrom.shtml?dbkanal_007=L01_S01_D001_KIN0001_LOGOS_1-oekostrom_LZ01\"></a><ul class=\"app-stores\"><li><a class=\"logo-ico logoIcon-app-store\" href=\"https://itunes.apple.com/de/app/db-navigator/id343555245?mt=8\"></a></li><li><a class=\"logo-ico logoIcon-google-play\" href=\"https://play.google.com/store/apps/details?id=de.hafas.android.db\"></a></li><li><a class=\"logo-ico logoIcon-ms-store\" href=\"https://www.microsoft.com/store/apps/9wzdncrfj3th\"></a></li></ul><ul class=\"payment\"><li><a class=\"logo-ico logoIcon-pay-cards\" href=\"/p/view/service/buchung/zahlung/kreditkarte.shtml?dbkanal_007=L01_S01_D001_KIN0001_LOGOS_4-kreditkarte_LZ01\"></a></li><li><a class=\"logo-ico logoIcon-ueberw\" href=\"/p/view/service/buchung/zahlung/sofort-ueberweisung.shtml?dbkanal_007=L01_S01_D001_KIN0001_LOGOS_5-sofortueberweisung_LZ01\"></a></li><li><a class=\"logo-ico logoIcon-paypal\" href=\"/p/view/service/buchung/zahlung/paypal.shtml?dbkanal_007=L01_S01_D001_KIN0001_LOGOS_6-paypal_LZ01\"></a></li><li><a class=\"logo-ico logoIcon-ec\" href=\"/p/view/service/buchung/zahlung/lastschrift.shtml?dbkanal_007=L01_S01_D001_KIN0001_LOGOS_7-lastschrift_LZ01\"></a></li></ul></div>\n\t\n<div class=\"meta clearfix\">\n\t<ul class=\"\">\n\t\t<li><a rel=\"nofollow\" href=\"/p/view/home/info/impressum.shtml?dbkanal_007=L01_S01_D001_KIN0001_footer-impressum_LZ01\">Impressum</a></li>\n\t\t<li><a rel=\"nofollow\" href=\"/p/view/home/agb/agb.shtml?dbkanal_007=L01_S01_D001_KIN0001_footer-agb_LZ01\">AGB</a></li>\n\t\t<li><a rel=\"nofollow\" href=\"/p/view/home/agb/nutzungsbedingungen.shtml?dbkanal_007=L01_S01_D001_KIN0001_footer-nutzungsbedingungen_LZ01\">Nutzungsbedingungen</a></li>\n\t\t<li><a rel=\"nofollow\" href=\"/p/view/home/datenschutz/schutz.shtml?dbkanal_007=L01_S01_D001_KIN0001_footer-datenschutz_LZ01\">Datenschutz</a></li>\n\t\t<li><a rel=\"nofollow\" href=\"http://www.deutschebahn.com?dbkanal_007=L01_S01_D001_KIN0001_footer-deutschebahn_LZ01\" target=\"_blank\">deutschebahn.com</a></li>\n\t\t<li><a rel=\"nofollow\" href=\"/wmedia/view/mdb/media/intern/karriere/karriere.html\">Karriere</a></li>\n\t\t<li><a rel=\"nofollow\" href=\"/p/view/home/partnerprogramm/online_partnerprogramme.shtml?dbkanal_007=L01_S01_D001_KIN0001_footer-kooperationen_LZ01\">Kooperationen</a></li>\n\t\t<li><a rel=\"nofollow\" href=\"http://www.bahnshop.de?dbkanal_007=L01_S01_D001_KIN0001_footer-bahnshop_LZ01\" target=\"_blank\">bahnshop.de</a></li>\n\t</ul>\n</div>"

/***/ }),

/***/ 179:
/***/ (function(module, exports) {

module.exports = "<div class=\"header-content\">\n\t<a href=\"/p/view/index.shtml\" class=\"logo\" title=\"Startseite\" tabindex=\"1\">\n\t\t<img class=\"responsive-image\" src=\"{{env.staticFilePath}}/assets/img/db_em_rgb_100px.svg\">\n\t</a>\n\t<div class=\"clearfix\" id=\"header-elements\">\n\t\t\t\n\t\t<a id=\"nav-back\">Zurück</a>\n\t\t<a class=\"burger\">Menü</a>\n\t\n\t\t<div class=\"desktop\">\n\t\t\t\t\n\t\t\t<form id=\"searchform\" action=\"/q\" method=\"get\" accept-charset=\"UTF-8\" class=\"searchform\">\n\t\t\t\t<fieldset>\n\t\t\t\t\t<p>\n\t\t\t\t\t<label for=\"search-query\">Suchen</label>\n\t\t\t\t\t<input type=\"text\" role=\"search\" tabindex=\"80\" class=\"search-field\" value=\"\" maxlength=\"500\" title=\"Suchen\" name=\"q\" id=\"search-query\" autocomplete=\"off\">\n\t\t\t\t\t<input type=\"hidden\" name=\"s\" value=\"p/DEU/de\">\n\t\t\t\t\t<input type=\"hidden\" name=\"l\" value=\"de\">\n\t\t\t\t\t<input type=\"hidden\" name=\"c\" value=\"DEU\">\n\t\t\t\t\t<input type=\"hidden\" name=\"dc\" value=\"♥\">\n\t\t\t\t\t<button type=\"submit\" class=\"search-button\"></button>\n\t\t\t\t\t</p>\n\t\t\t\t</fieldset>\n\t\t\t</form>\n\t\t\t\t\n\t\t\t<div id=\"font-sizer\">\n\t\t\t\t<a rel=\"nofollow\" title=\"Normale Schriftgröße\" class=\"font-normal\" tabindex=\"50\" href=\"?font-size=normal\">A</a><span>,</span>\n\t\t\t\t<a rel=\"nofollow\" title=\"Große Schrift\" class=\"font-large\" tabindex=\"60\" href=\"?font-size=large\">A</a><span>,</span>\n\t\t\t\t<a rel=\"nofollow\" title=\"Sehr große Schrift\" class=\"font-xl\" tabindex=\"70\" href=\"?font-size=xl\">A</a>\n\t\t\t</div>\n\t\t\t\t\n\t\t\t<div id=\"language-selector\">\n\t\t\t\t<a class=\"toggle-link\" href=\"https://www.bahn.com\" data-link=\"/p/view/index.shtml#slc\">Deutsch</a>\n\t\t\t\t<ul>\n\t\t\t\t\t<li><a href=\"https://www.bahn.com/cs/view/index.shtml#slc\">Český</a></li>\n\t\t\t\t\t<li><a href=\"https://www.bahn.com/da/view/index.shtml#slc\">Dansk</a></li>\n\t\t\t\t\t<li><a href=\"https://www.bahn.com/en/view/index.shtml#slc\">English</a></li>\n\t\t\t\t\t<li><a href=\"https://www.bahn.com/es/view/index.shtml#slc\">Español</a></li>\n\t\t\t\t\t<li><a href=\"https://www.bahn.com/fr/view/index.shtml#slc\">Français</a></li>\n\t\t\t\t\t<li><a href=\"https://www.bahn.com/it/view/index.shtml#slc\">Italiano</a></li>\n\t\t\t\t\t<li><a href=\"https://www.bahn.com/nl/view/index.shtml#slc\">Nederlands</a></li>\n\t\t\t\t\t<li><a href=\"https://www.bahn.com/pl/view/index.shtml#slc\">Polski</a></li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t\t\t\n\t\t\t<!-- Meta-Navigation -->\n\t\t\t<ul id=\"service-nav\" class=\"clearfix\">\n\t\t\t\t<li><a href=\"/p/view/index.shtml\" class=\"first\"><span>Startseite</span></a></li>\t<li><a href=\"/p/view/hilfe/bahn_de/hilfe.shtml?dbkanal_007=L01_S01_D001_KIN0001_Kontakt_LZ01\" tabindex=\"10\">Hilfe &amp; Kontakt</a></li>\n\t\t\t\t<li><a href=\"/p/view/home/info/sitemap.shtml\" tabindex=\"20\">Sitemap</a></li> \n\t\t\t</ul><!-- #service-nav -->\n\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ 18:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__windowref_service__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__(25);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MagnoliaContextService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MagnoliaContextService = (function () {
    /**
     * Constructor
     */
    function MagnoliaContextService(winRef, http) {
        this.winRef = winRef;
        this.http = http;
        this.nativeWindow = winRef.nativeWindow;
        this.singlePageConfig = this.nativeWindow.singlePageConfig;
        //Sets the edit mode
        this.editionMode = typeof (this.singlePageConfig) !== "undefined";
    }
    /**
     * Initialize the service
     */
    MagnoliaContextService.prototype.init = function (app) {
        var _this = this;
        //If production mode, then gather content through a REST call
        if (!this.editionMode) {
            this.singlePageConfig = new Object();
            this.getMagnoliaData().subscribe(function (content) {
                _this.singlePageConfig.content = content;
                app.isDataLoaded = true;
            });
        }
        else {
            app.isDataLoaded = true;
        }
    };
    /**
     * Return whether the page is in edition mode
     *
     * @return Whether the page is in edition mode
     */
    MagnoliaContextService.prototype.isEditionMode = function () {
        return this.editionMode;
    };
    /**
     * Return the Javascript window object reference
     *
     * @return The window object reference
     */
    MagnoliaContextService.prototype.getWindowObject = function () {
        return this.nativeWindow;
    };
    /**
     * Returns the current Magnolia JCR node path.
     */
    MagnoliaContextService.prototype.getCurrentNode = function () {
        return this.singlePageConfig.content["@path"];
    };
    /**
     * Return the list of defined areas in the Magnolia context
     */
    MagnoliaContextService.prototype.getAreas = function () {
        return this.singlePageConfig.areaDefinitions;
    };
    /**
     * Return the the defined area in the Magnolia context
     *
     * @param areaName The name of the area
     */
    MagnoliaContextService.prototype.getArea = function (areaName) {
        if (this.singlePageConfig.areaDefinitions !== null) {
            return this.singlePageConfig.areaDefinitions[areaName];
        }
        else {
            return null;
        }
    };
    /**
     * Return the area's defined components
     *
     * @param areaName The name of the area
     */
    MagnoliaContextService.prototype.getAreaComponents = function (areaName) {
        var results = new Array();
        if (typeof (this.singlePageConfig.content) !== "undefined") {
            //Gets the area content
            var content = this.singlePageConfig.content;
            var areaContent = content[areaName];
            if (areaContent != null) {
                for (var key in areaContent) {
                    var value = areaContent[key];
                    if (typeof (value) === "object" && value["@nodeType"] === "mgnl:component") {
                        if (this.editionMode) {
                            //Gets the template
                            var templateId = value["mgnl:template"];
                            var template = this.getComponent(templateId);
                            value.componentDefinition = template;
                        }
                        results.push(value);
                    }
                }
            }
        }
        return results;
    };
    /**
     * Return the defined component
     *
     * @param areaName The name of the area
     */
    MagnoliaContextService.prototype.getComponent = function (componentId) {
        if (this.singlePageConfig.componentsDefinitions !== null) {
            return this.singlePageConfig.componentsDefinitions[componentId];
        }
        else {
            return null;
        }
    };
    /**
     * Contact Magnolia and gets the node content back.
     */
    MagnoliaContextService.prototype.getMagnoliaData = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].restUrl + __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].magnoliaPageNode + "?depth=" + __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].magnoliaPageNodeDepth)
            .map(function (res) { return res.json(); });
    };
    /**
     * Extract JSON from the REST call response
     */
    MagnoliaContextService.prototype.extractData = function (res) {
        var body = res.json();
        return body.data || {};
    };
    return MagnoliaContextService;
}());
MagnoliaContextService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__windowref_service__["a" /* WindowRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__windowref_service__["a" /* WindowRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _b || Object])
], MagnoliaContextService);

var _a, _b;
//# sourceMappingURL=magnolia-context.service.js.map

/***/ }),

/***/ 180:
/***/ (function(module, exports) {

module.exports = "<ul class=\"main-nav-left\">\n        <li>\n            <a href=\"/p/view/angebot/index.shtml?dbkanal_007=L01_S01_D001_KIN0004_top-navi_berater_LZ01\" class=\"menu-link\"><span>Tickets &amp; Angebote</span></a>\n            <div class=\"clearfix\"><ul>\n                    <li><a href=\"/p/view/angebot/index.shtml?dbkanal_007=L01_S01_D001_KIN0001_top-navi-flyout_angebote-uebersicht_LZ01\">Übersicht: Tickets &amp; Angebote</a></li>\n                    <li><a href=\"/p/view/angebot/flexpreis.shtml?dbkanal_007=L01_S01_D001_KIN0001_top-navi-flyout_angebote-flexpreis_LZ01\">Flexpreis</a></li>\n                    <li><a href=\"/p/view/angebot/sparpreis/index.shtml?dbkanal_007=L01_S01_D001_KIN0001_top-navi-flyout_angebote-sparpreis_LZ01\">Sparpreis</a></li>\n                    <li><a href=\"/p/view/angebot/sparpreis-europa/index.shtml?dbkanal_007=L01_S01_D001_KIN0001_top-navi-flyout_angebote-es_LZ01\">Sparpreis Europa</a></li>\n                    <li><a href=\"/p/view/angebot/gruppen/index.shtml?dbkanal_007=L01_S01_D001_KIN0001_top-navi-flyout_angebote-gruppen_LZ01\">Gruppenreisen</a></li>\n                    <li><a href=\"/p/view/angebot/regio/index.shtml?dbkanal_007=L01_S01_D001_KIN0001_top-navi-flyout_angebote-regio_LZ01\">Regionale Angebote</a></li></ul><ul>\n                    <li><a href=\"/p/view/angebot/verbuende/index.shtml?dbkanal_007=L01_S01_D001_KIN0001_top-navi-flyout_angebote-verkehrsverbuende_LZ01\">Verkehrsverbünde</a></li>\n                    <li><a href=\"/p/view/angebot/fernbus/index.shtml?dbkanal_007=L01_S01_D001_KIN0001_top-navi-flyout_angebote-fernbusse_LZ01\">Fernbusse</a></li>\n                    <li><a href=\"/p/view/angebot/pendler/index.shtml?dbkanal_007=L01_S01_D001_KIN0001_top-navi-flyout_angebote-pendlerangebote_LZ01\">Pendler &amp; Vielfahrer</a></li>\n                    <li><a href=\"/p/view/angebot/international/index.shtml?dbkanal_007=L01_S01_D001_KIN0001_top-navi-flyout_angebote-international_LZ01\">Internationale Angebote</a></li>\n                    <li><a href=\"/p/view/angebot/nachtzug/index.shtml?dbkanal_007=L01_S01_D001_KIN0001_top-navi-flyout_angebote-cnl_LZ01\">Reisen über Nacht</a></li>\n                    <li><a href=\"/p/view/angebot/zusatzticket/index.shtml?dbkanal_007=L01_S01_D001_KIN0001_top-navi-flyout_angebote-zusatzticket_LZ01\">Zusatz-Tickets</a></li></ul><ul>\n                    <li><a href=\"/p/view/angebot/sitzplatzreservierung/index.shtml?dbkanal_007=L01_S01_D001_KIN0001_top-navi-flyout_angebote-reservierung_LZ01\">Sitzplatzreservierung</a></li>\n                    <li><a href=\"/p/view/angebot/versicherungen/index.shtml?dbkanal_007=L01_S01_D001_KIN0001_top-navi-flyout_angebote-versicherungen_LZ01\">Versicherungen</a></li>\n                    <li><a href=\"/p/view/angebot/gutscheine.shtml?dbkanal_007=L01_S01_D001_KIN0001_top-navi-flyout_angebote-geschenkgutschein_LZ01\">Geschenkgutschein</a></li>\n                    <li><a href=\"/p/view/angebot/uebersicht_online_nicht_buchbar.shtml?dbkanal_007=L01_S01_D001_KIN0001_top-navi-flyout_angebote-guenstiger_LZ01\">Weitere ggf. günstigere Angebote</a></li></ul>\n                \n                <div class=\"footer\">\n                    <p><b>Tipp:</b> Nutzen Sie den Angebotsberater, um das für Sie passende Angebot zu finden!</p>\n                    <a href=\"/p/view/angebot/berater.shtml?dbkanal_007=L01_S01_D001_KIN0001_top-navi-flyout_angebote-angebotsberater_LZ01\">Zum Angebotsberater</a>\n                </div>\n            </div>\n        </li>\n        <li>\n            <a href=\"/p/view/service/index.shtml?dbkanal_007=L01_S01_D001_KIN0004_top-navi-service_LZ01\" class=\"menu-link\"><span>Reise &amp; Services</span></a>\n            <div class=\"clearfix\"><ul>\n                    <li><a href=\"/p/view/service/index.shtml?dbkanal_007=L01_S01_D001_KIN0001_top-navi-flyout_service-uebersicht_LZ01\">Übersicht: Reise &amp; Services</a></li>\n                    <li><a href=\"/p/view/service/buchung/index.shtml?dbkanal_007=L01_S01_D001_KIN0001_top-navi-flyout_service-buchung_LZ01\">Informationen zur Buchung</a></li>\n                    <li><a href=\"/p/view/service/auskunft/puenktlichkeits_tools.shtml?dbkanal_007=L01_S01_D001_KIN0001_top-navi-flyout_service-auskunft_LZ01\">Aktuelle Meldungen &amp; Verspätungen</a></li>\n                    <li><a href=\"/p/view/service/fahrplaene/index.shtml?dbkanal_007=L01_S01_D001_KIN0001_top-navi-flyout_service-fahrplaene_LZ01\">Fahrpläne</a></li>\n                    <li><a href=\"/p/view/service/bahnhof/uebersicht.shtml?dbkanal_007=L01_S01_D001_KIN0001_top-navi-flyout_service-bahnhof_LZ01\">Am Bahnhof</a></li>\n                    <li><a href=\"/p/view/service/zug/index.shtml?dbkanal_007=L01_S01_D001_KIN0001_top-navi-flyout_service-zug_LZ01\">Im Zug</a></li></ul><ul>\n                    <li><a href=\"/p/view/service/fundservice.shtml?dbkanal_007=L01_S01_D001_KIN0001_top-navi-flyout_service-fundservice_LZ01\">Fundservice</a></li>\n                    <li><a href=\"/p/view/service/fahrrad/bahn_und_fahrrad.shtml?dbkanal_007=L01_S01_D001_KIN0011_top-navi-flyout_service-bahnfahrrad_LZ01\">Bahn und Fahrrad</a></li>\n                    <li><a href=\"/p/view/service/familie/kinder.shtml?dbkanal_007=L01_S01_D001_KIN0001_top-navi-flyout_service-kinder_LZ01\">Reisen mit Kindern</a></li>\n                    <li><a href=\"/p/view/service/geschaeftsreisen/index.shtml?dbkanal_007=L01_S01_D001_KIN0001_top-navi-flyout_service-geschaeftsreisen_LZ01\">Geschäftsreisen</a></li>\n                    <li><a href=\"/p/view/service/barrierefrei/uebersicht.shtml?dbkanal_007=L01_S01_D001_KIN0001_top-navi-flyout_service-handicap_LZ01\">Barrierefreies Reisen</a></li>\n                    <li><a href=\"/p/view/service/60plus/uebersicht.shtml?dbkanal_007=L01_S01_D001_KIN0001_top-navi-flyout_service-senioren_LZ01\">Generation 60plus</a></li></ul><ul>\n                    <li><a href=\"/p/view/service/gruppen/index.shtml?dbkanal_007=L01_S01_D001_KIN0001_top-navi-flyout_service-gruppen_LZ01\">Gruppenreisen</a></li>\n                    <li><a href=\"/p/view/service/fanecke/uebersicht.shtml?dbkanal_007=L01_S01_D001_KIN0001_top-navi-flyout_service-fanecke_LZ01\">Services für Fußballfans</a></li>\n                    <li><a href=\"/p/view/service/gepaeck/gepaeck.shtml?dbkanal_007=L01_S01_D001_KIN0001_top-navi-flyout_gepaeck-service_LZ01\">DB Gepäckservice</a></li>\n                    <li><a href=\"/p/view/service/umwelt/umwelt_uebersicht.shtml?dbkanal_007=L01_S01_D001_KIN0001_top-navi-flyout_service-umwelt_LZ01\">Umweltfreundlich reisen</a></li>\n                    <li><a href=\"/p/view/service/reformation/reformation.shtml\">Reformationsjubiläum</a></li></ul>\n                \n                <div class=\"footer\">\n                    <p><b>Tipp:</b> Keine Lust auf Kofferschleppen?</p>\n                    <a href=\"/p/view/service/gepaeck/gepaeck.shtml?dbkanal_007=L01_S01_D001_KIN0001_top-navi-flyout_service-tipp-gepaeck_LZ01\">Nutzen Sie unseren Gepäckservice!</a>\n                </div>\n            </div>\n        </li>\n        <li>\n            <a href=\"/p/view/bahncard/index.shtml?dbkanal_007=L01_S01_D001_KIN0004_top-navi-bahncard_LZ01\" class=\"menu-link\"><span>BahnCard</span></a>\n            <div class=\"clearfix\"><ul>\n                    <li><a href=\"/p/view/bahncard/index.shtml?dbkanal_007=L01_S01_D001_KIN0004_top-navi-flyout_bc-uebersicht_LZ01\">Übersicht: BahnCard</a></li>\n                    <li><a href=\"/p/view/bahncard/ueberblick/index.shtml?dbkanal_007=L01_S01_D001_KIN0004_top-navi-flyout_bc-bcfamilie_LZ01\">Alle BahnCards</a></li>\n                    <li><a href=\"https://www.bahn.de/-fahrkarten/privatkunde/bahncardrechner/bahncard_rechner_start.post?REQ0JourneyStopsSID=&amp;S=&amp;REQ0JourneyStopsZID=&amp;Z=&amp;tariffClass=2&amp;lang=de&amp;search=1&amp;dbkanal_007=L01_S01_D001_KIN0004_top-navi-flyout_bc-bcberater_LZ01\">BahnCard-Berater: Wann lohnt sich die BahnCard für Sie?</a></li></ul><ul>\n                    <li><a href=\"/p/view/bahncard/bahnbonus/bahnbonus.shtml?dbkanal_007=L01_S01_D001_KIN0004_top-navi-flyout_bc-bahnbonus_LZ01\">bahn.bonus Programm</a></li>\n                    <li><a href=\"/p/view/bahncard/bahnbonus/bahnbonus-sammeln.shtml?dbkanal_007=L01_S01_D001_KIN0004_top-navi-flyout_bc-bbsammeln_LZ01\">bahn.bonus-Punkte sammeln</a></li>\n                    <li><a href=\"/p/view/bahncard/bahnbonus/bahnbonus_praemien_uebersicht.shtml?dbkanal_007=L01_S01_D001_KIN0004_top-navi-flyout_bc-bbkatalog_LZ01\">bahn.bonus-Punkte einlösen</a></li>\n                    <li><a href=\"/p/view/bahncard/bahncomfort/bahncomfort.shtml?dbkanal_007=L01_S01_D001_KIN0004_top-navi-flyout_bc-comfort_LZ01\">bahn.bonus comfort Status</a></li></ul><ul>\n                    <li><a href=\"/p/view/bahncard/vorteile/uebersicht.shtml?dbkanal_007=L01_S01_D001_KIN0004_top-navi-flyout_bc-kartenvorteile-db_LZ01\">Kartenvorteile bei der DB</a></li>\n                    <li><a href=\"/p/view/bahncard/kooperationen/uebersicht.shtml?dbkanal_007=L01_S01_D001_KIN0004_top-navi-flyout_bc-kartenvorteile-partner_LZ01\">Kartenvorteile bei Partnern</a></li>\n                    <li><a href=\"/p/view/bahncard/bahncard-services/bahncardservice.shtml?dbkanal_007=L01_S01_D001_KIN0004_top-navi-flyout_bc-bcservices_LZ01\">BahnCard-Services</a></li></ul>\n                \n                <div class=\"footer\">\n                    <p><b>Tipp:</b> </p>\n                    <a href=\"/p/view/bahncard/ueberblick/preise.shtml?dbkanal_007=L01_S01_D001_KIN0004_top-navi-flyout_bc-bcpreise_LZ01\">BahnCard Preise im Überblick</a>\n                </div>\n            </div>\n        </li>\n        <li>\n            <a href=\"/p/view/bahnbusiness/index.shtml?dbkanal_007=L01_S01_D001_KIN0004_top-navi-geschaeftsreisen_LZ01\" class=\"menu-link\"><span>Geschäftskunden</span></a>\n            <div class=\"clearfix\"><ul>\n                    <li><a href=\"/p/view/bahnbusiness/index.shtml?dbkanal_007=L01_S01_D001_KIN0001_top-navi-flyout_geschaeftsreisen-startseite_LZ01\">Übersicht: Geschäftskunden</a></li>\n                    <li><a href=\"/p/view/bahnbusiness/firmenkundenprogramme/index.shtml?dbkanal_007=L01_S01_D001_KIN0001_top-navi-flyout_geschaeftsreisen-vorteile_LZ01\">Das Geschäftskundenprogramm</a></li>\n                    <li><a href=\"/p/view/bahnbusiness/buchung/index.shtml?dbkanal_007=L01_S01_D001_KIN0001_top-navi-flyout_geschaeftsreisen-buchung-ueberblick_LZ01\">Rund um Ihre Buchung</a></li></ul><ul>\n                    <li><a href=\"/p/view/bahnbusiness/businesscards/index.shtml?dbkanal_007=L01_S01_D001_KIN0001_top-navi-flyout_geschaeftsreisen-bcbusiness_LZ01\">Business BahnCards</a></li>\n                    <li><a href=\"/p/view/bahnbusiness/services/index.shtml?dbkanal_007=L01_S01_D001_KIN0001_top-navi-flyout_geschaeftsreisen-services_LZ01\">Services für Geschäftsreisende</a></li>\n                    <li><a href=\"/p/view/bahnbusiness/news/index.shtml?dbkanal_007=L01_S01_D001_KIN0001_top-navi-flyout_geschaeftsreisen-news_LZ01\">News für Geschäftsreisende</a></li></ul><ul>\n                    <li><a href=\"/p/view/bahnbusiness/gruene_geschaeftsreisen.shtml\">Nachhaltige Geschäftsreisen</a></li>\n                    <li><a href=\"/p/view/hilfe/bahn_de/hilfe_fk.shtml?dbkanal_007=L01_S01_D001_KIN0001_top-navi-flyout_geschaeftsreisen-hilfscenter_LZ01\">bahn.business Hilfecenter</a></li></ul>\n                \n                <div class=\"footer\">\n                    <p><b>Tipp:</b> </p>\n                    <a href=\"http://wagen-eins.de/\">Die neuesten Trends und hilfreiche Tipps für Business und Alltag lesen Sie in der aktuellen \"WAGEN EINS\"</a>\n                </div>\n            </div>\n        </li>\n        <li>\n            <a href=\"/p/view/urlaub/index.shtml?dbkanal_007=L01_S01_D001_KIN0004_top-navi-urlaub_LZ01\" class=\"menu-link\"><span>Städtereisen</span></a>\n            <div class=\"clearfix\"><ul>\n                    <li><a href=\"/p/view/urlaub/index.shtml?dbkanal_007=L01_S01_D001_KIN0002_BH_urlaub-flyout-uebersicht_LZ01\">Übersicht: Städtereisen</a></li>\n                    <li><a href=\"/p/view/urlaub/staedtereisen/staedtereisen.shtml?dbkanal_007=L01_S01_D001_KIN0001_urlaub-flyout-Staedtereisen_LZ01\">Bahn- und Städtereisen</a></li></ul><ul>\n                    <li><a href=\"/p/view/urlaub/hotel/index.shtml?dbkanal_007=L01_S01_D001_KIN0001_urlaub-flyout-Hotels_LZ01\">Hotels und Unterkünfte</a></li>\n                    <li><a href=\"/p/view/urlaub/pauschalreisen/index.shtml?dbkanal_007=L01_S01_D001_KIN0001_urlaub-flyout-lastminute_LZ01\">Last Minute und Pauschalreisen</a></li></ul><ul>\n                    <li><a href=\"/p/view/urlaub/mietwagen/index.shtml?dbkanal_007=L01_S01_D001_KIN0001_urlaub-flyout-Mietwagen_LZ01\">Mietwagen und Carsharing</a></li>\n                    <li><a href=\"/p/view/urlaub/events/events.shtml?dbkanal_007=L01_S01_D001_KIN0001_urlaub-flyout-Events_LZ01\">Musicals und Events</a></li></ul>\n                \n                <div class=\"footer\">\n                    <p><b>Tipp:</b> </p>\n                    <a href=\"/p/view/urlaub/staedtereisen/sommerkampagne2017.shtml?dbkanal_007=L01_S01_D001_KIN0001_S_urlaub-flyout-tip_LZ01\">Nächster Halt: Sommer! Entdecken Sie Last Minute-Angebot rund um Ihren Urlaub.</a>\n                </div>\n            </div>\n        </li>\n    </ul>\n\t\n\t\n    <ul class=\"main-nav-right\">\n\t\n      <li class=\"mb\">\n        <a href=\"https://fahrkarten.bahn.de/privatkunde/start/start.post?scope=meinebahn&amp;lang=de&amp;country=DEU&amp;dbkanal_007=L01_S01_D001_KIN0004_TOP-NAVI-MEINE-BAHN_LZ01\" class=\"menu-link\"><span>Meine Bahn</span></a>\n        \n            <div class=\"clearfix\"><ul>\n                    <li><a href=\"/p/view/meinebahn/login.shtml\">Übersicht</a></li>\n                    <li><a href=\"https://www.bahn.de/-fahrkarten/privatkunde/start/start.post?from_page=meinebahn&amp;scope=meineletztebuchung&amp;lang=de&amp;country=DEU\">Meine letzten Buchungen bearbeiten</a></li></ul><ul>\n                    <li><a href=\"https://www.bahn.de/-fahrkarten/privatkunde/bahncardportal/bahncard_portal_start.post?from_page=meinebahn&amp;scope=bcpr&amp;lang=de&amp;country=DEU\">Meine Prämienpunkte einlösen</a></li>\n                    <li><a href=\"https://www.bahn.de/-fahrkarten/privatkunde/start/start.post?from_page=meinebahn&amp;scope=bahnregaendern&amp;lang=de&amp;country=DEU\">Meine Kontodaten bearbeiten</a></li></ul><ul>\n                    <li><a href=\"https://www.bahn.de/-fahrkarten/privatkunde/bahncardportal/bahncard_portal_start.post?from_page=meinebahn&amp;scope=bcinhaber&amp;lang=de&amp;country=DEU\">Meine BahnCard bearbeiten</a></li></ul>\n                \n            </div>\n      </li>\n      \n      <li class=\"loginform\">\n        <a href=\"https://fahrkarten.bahn.de/cache/start/start.post?lang=de&amp;scope=login&amp;dbkanal_007=L01_S01_D001_KIN0004_TOP-NAVI-LOGIN_LZ01\" class=\"menu-link\"><span>Login</span></a>\n        \n<div>\n\t<form id=\"lgn_cltype\">\n\t\t<fieldset>\n\t\t\t<div class=\"pullleft\">\n\t\t\t\t<input type=\"radio\" id=\"radio01\" name=\"lgn_cltype\" value=\"1\" checked=\"\">\n\t\t\t\t<label for=\"radio01\"><span></span>Privatkunden</label>\n\t\t\t</div>\n\t\t\t<div class=\"pullleft\">\n\t\t\t\t<input type=\"radio\" id=\"radio02\" name=\"lgn_cltype\" value=\"2\">\n\t\t\t\t<label for=\"radio02\"><span></span>Firmenkunden</label>\n\t\t\t</div>\n\t\t</fieldset>\n\t</form>\n\t<form action=\"https://fahrkarten.bahn.de/privatkunde/start/start.post\" id=\"login_form_customer\" method=\"post\" class=\"contentlogin active\" data-type=\"pk\" data-pos=\"ContentNavigation\">\n\t\t<input type=\"hidden\" name=\"lang\" value=\"de\">\n\t\t<input type=\"hidden\" name=\"country\" value=\"DEU\">\n\t\t<input type=\"hidden\" name=\"scope\" value=\"bahnde\">\n\t\t<div class=\"input-wrapper\">\n\t\t\t<input class=\"text\" id=\"mn-login-username\" type=\"text\" name=\"username\" value=\"\" maxlength=\"60\" autocomplete=\"off\" placeholder=\"Benutzername\">\n\t\t</div>\n\t\t<div class=\"input-wrapper\">\n\t\t\t<input class=\"text\" id=\"mn-login-password\" type=\"password\" name=\"password\" maxlength=\"80\" placeholder=\"Passwort\">\n\t\t</div>\n\t\t<input class=\"submit-btn\" type=\"submit\" name=\"login-submit\" value=\"Login\">\n\t\t<ul class=\"pullleft\">\n\t\t\t<li>\n\t\t\t\t<a href=\"https://fahrkarten.bahn.de/cache/start/start.post?scope=pwvergessen&amp;lang=de\">\n\t\t\t\tLogin-Daten vergessen?\n\t\t\t\t</a>\n\t\t\t</li>\n\t\t\t<li>\n\t\t\t\t<a href=\"https://fahrkarten.bahn.de/cache/start/start.post?scope=bahnreg&amp;lang=de\">\n\t\t\t\tErstmalig anmelden\n\t\t\t\t</a>\n\t\t\t</li>\n\t\t</ul>\n\t</form>\n\t<form action=\"https://fahrkarten.bahn.de/grosskunde/start/kmu_start.post?scope=login\" id=\"login_form_business\" method=\"post\" class=\"contentlogin\" data-type=\"gk\" data-pos=\"ContentNavigation\">\n\t\t<input type=\"hidden\" name=\"lang\" value=\"de\">\n\t\t<input type=\"hidden\" name=\"country\" value=\"DEU\">\n\t\t<input type=\"hidden\" name=\"scope\" value=\"bahnde\">\n\t\t<div class=\"input-wrapper\">\n\t\t\t<input class=\"text\" id=\"mn-login-username-bs\" type=\"text\" name=\"username\" value=\"\" maxlength=\"60\" autocomplete=\"off\" placeholder=\"Benutzername\">\n\t\t</div>\n\t\t<div class=\"input-wrapper\">\n\t\t\t<input class=\"text\" id=\"mn-login-password-bs\" type=\"password\" name=\"password\" maxlength=\"80\" placeholder=\"Passwort\">\n\t\t</div>\n\t\t<input class=\"submit-btn\" type=\"submit\" name=\"login-submit\" value=\"Login\">\n\t\t<ul class=\"pullleft\">\n\t\t\t<li>\n\t\t\t\t<a href=\"https://fahrkarten.bahn.de/grosskunde/start/kmu_start.post?scope=pwvergessen&amp;lang=de\">\n\t\t\t\tLogin-Daten vergessen?\n\t\t\t\t</a>\n\t\t\t</li>\n\t\t\t<li>\n\t\t\t\t<a href=\"/app_firmenkunden_varianten_de_DEU.shtml\">\n\t\t\t\tErstmalig anmelden\n\t\t\t\t</a>\n\t\t\t</li>\n\t\t</ul>\n\t</form>\n</div>\n     </li>\n</ul>"

/***/ }),

/***/ 181:
/***/ (function(module, exports) {

module.exports = "<h2>{{component.title}}</h2>"

/***/ }),

/***/ 182:
/***/ (function(module, exports) {

module.exports = "<div>\n\t<a href=\"/p/view/angebot/regio/laender_tickets.shtml?dbkanal_007=L01_S01_D001_KIN0001_Regio_TZ1_P1_BT_S_AL_Laender-tickets-default_LZ01\">\n\t\t<img class=\"responsive-image\" src=\"{{env.damUrl}}{{component.image}}\"/>\n\t</a>\n\t\n\t<div class=\"text clearfix\">\n\t\t\n\t\t\t<h2 class=\"light\">{{component.title}}</h2>\n\t\t\t<form class=\"openurl\" action=\"/bin/openurl.pl\" method=\"get\">\n\t\n\t\t\t<div class=\"custom-select\">\n\t\t\t\t<select class=\"dropdown\" name=\"MEWurl\">\n\t\t\n\t\t\t\t\t<option value=\"/p/view/angebot/regio/laender_tickets.shtml?dbkanal_007=L01_S01_D001_KIN0001_Regio_TZ1_P1_BT_S_AL_Laender-tickets-default_LZ01\" data-imgurl=\"\" data-target=\"\">Bitte wählen Sie Ihr Bundesland</option>\n\t\t\n\t\t\t\t\t<option value=\"https://www.bahn.de/-fahrkarten/privatkunde/pauschalpreisbuchen/pauschalpreis_start.post?angebotsgruppe=1&amp;returnurl=https://www.bahn.de/regional/view/regionen/bawue/freizeit/bawue_ticket.shtml&amp;scope=standalone&amp;dbkanal_007=L01_S01_D001_KIN0001_Regio_TZ1_P1_BT_S_AL_BW-Ticket_LZ08\" data-imgurl=\"\" data-target=\"\">Baden-Württemberg-Ticket</option>\n\t\t\n\t\t\t\t\t<option value=\"https://www.bahn.de/-fahrkarten/privatkunde/pauschalpreisbuchen/pauschalpreis_start.post?angebotsgruppe=2&amp;returnurl=https://www.bahn.de/regional/view/regionen/bayern/freizeit/bayernticket.shtml&amp;scope=standalone&amp;dbkanal_007=L01_S01_D001_KIN0001_Regio_TZ1_P1_BT_S_AL_Bayern-Ticket_LZ08\" data-imgurl=\"\" data-target=\"\">Bayern-Ticket</option>\n\t\t\n\t\t\t\t\t<option value=\"https://www.bahn.de/-fahrkarten/privatkunde/pauschalpreisbuchen/pauschalpreis_start.post?angebotsgruppe=3&amp;returnurl=https://www.bahn.de/regional/view/regionen/berlin_brbg/freizeit/brandenburgticket.shtml&amp;scope=standalone&amp;dbkanal_007=L01_S01_D001_KIN0001_Regio_TZ1_P1_BT_S_AL_Berlin-BB-Ticket_LZ08\" data-imgurl=\"\" data-target=\"\">Berlin (Brandenburg-Berlin-Ticket)</option>\n\t\t\n\t\t\t\t\t<option value=\"https://www.bahn.de/-fahrkarten/privatkunde/pauschalpreisbuchen/pauschalpreis_start.post?angebotsgruppe=8&amp;returnurl=https://www.bahn.de/regional/view/regionen/niedersa/freizeit/niedersa_ticket.shtml&amp;scope=standalone&amp;dbkanal_007=L01_S01_D001_KIN0001_Regio_TZ1_P1_BT_S_AL_Bremen-Niedersachsen-Ticket_LZ08\" data-imgurl=\"\" data-target=\"\">Bremen (Niedersachsen-Ticket)</option>\n\t\t\n\t\t\t\t\t<option value=\"https://www.bahn.de/-fahrkarten/privatkunde/pauschalpreisbuchen/pauschalpreis_start.post?angebotsgruppe=8&amp;returnurl=https://www.bahn.de/regional/view/regionen/niedersa/freizeit/niedersa_ticket.shtml&amp;scope=standalone&amp;dbkanal_007=L01_S01_D001_KIN0001_Regio_TZ1_P1_BT_S_AL_Hamburg-Niedersachsen-Ticket_LZ08\" data-imgurl=\"\" data-target=\"\">Hamburg (Niedersachsen-Ticket)</option>\n\t\t\n\t\t\t\t\t<option value=\"https://www.bahn.de/regional/view/regionen/hessen/freizeit/hessenticket.shtml?dbkanal_007=L01_S01_D001_KIN0001_Regio_TZ1_P1_BT_S_AL_Hessen-Ticket_LZ01\" data-imgurl=\"\" data-target=\"\">Hessenticket</option>\n\t\t\n\t\t\t\t\t<option value=\"https://www.bahn.de/-fahrkarten/privatkunde/pauschalpreisbuchen/pauschalpreis_start.post?angebotsgruppe=7&amp;returnurl=https://www.bahn.de/regional/view/regionen/meckpomm/freizeit/meckpomm_ticket.shtml&amp;scope=standalone&amp;dbkanal_007=L01_S01_D001_KIN0001_Regio_TZ1_P1_BT_S_AL_MV-Ticket_LZ08\" data-imgurl=\"\" data-target=\"\">Mecklenburg-Vorpommern-Ticket</option>\n\t\t\n\t\t\t\t\t<option value=\"https://www.bahn.de/-fahrkarten/privatkunde/pauschalpreisbuchen/pauschalpreis_start.post?angebotsgruppe=8&amp;returnurl=https://www.bahn.de/regional/view/regionen/niedersa/freizeit/niedersa_ticket.shtml&amp;scope=standalone&amp;dbkanal_007=L01_S01_D001_KIN0001_Regio_TZ1_P1_BT_S_AL_Niedersachsen-Ticket_LZ08\" data-imgurl=\"\" data-target=\"\">Niedersachsen-Ticket</option>\n\t\t\n\t\t\t\t\t<option value=\"https://www.bahn.de/-fahrkarten/privatkunde/pauschalpreisbuchen/pauschalpreis_start.post?angebotsgruppe=10&amp;returnurl=https://www.bahn.de/regional/view/regionen/rhldpfalz/freizeit/rhldpfalz_ticket.shtml&amp;scope=standalone&amp;dbkanal_007=L01_S01_D001_KIN0001_Regio_TZ1_P1_BT_S_AL_RP-Ticket_LZ08\" data-imgurl=\"\" data-target=\"\">Rheinland-Pfalz-Ticket</option>\n\t\t\n\t\t\t\t\t<option value=\"https://www.bahn.de/-fahrkarten/privatkunde/pauschalpreisbuchen/pauschalpreis_start.post?angebotsgruppe=11&amp;returnurl=https://www.bahn.de/p/view/angebot/regio/saar/saarland-ticket.shtml&amp;scope=standalone&amp;dbkanal_007=L01_S01_D001_KIN0001_Regio_TZ1_P1_BT_S_AL_Saarland-Ticket_LZ08\" data-imgurl=\"\" data-target=\"\">Saarland-Ticket</option>\n\t\t\n\t\t\t\t\t<option value=\"https://www.bahn.de/-fahrkarten/privatkunde/pauschalpreisbuchen/pauschalpreis_start.post?angebotsgruppe=13&amp;returnurl=https://www.bahn.de/regional/view/regionen/sanhalt/freizeit/laenderticket.shtml&amp;scope=standalone&amp;dbkanal_007=L01_S01_D001_KIN0001_Regio_TZ1_P1_BT_S_AL_Sachsen-Anhalt-Ticket_LZ08\" data-imgurl=\"\" data-target=\"\">Sachsen-Anhalt-Ticket</option>\n\t\t\n\t\t\t\t\t<option value=\"https://www.bahn.de/-fahrkarten/privatkunde/pauschalpreisbuchen/pauschalpreis_start.post?angebotsgruppe=12&amp;returnurl=https://www.bahn.de/regional/view/regionen/sachsen/freizeit/sachsen_ticket.shtml&amp;scope=standalone&amp;dbkanal_007=L01_S01_D001_KIN0001_Regio_TZ1_P1_BT_S_AL_Sachsen-Ticket_LZ08\" data-imgurl=\"\" data-target=\"\">Sachsen-Ticket</option>\n\t\t\n\t\t\t\t\t<option value=\"https://www.bahn.de/-fahrkarten/privatkunde/pauschalpreisbuchen/pauschalpreis_start.post?angebotsgruppe=14&amp;returnurl=https://www.bahn.de/regional/view/regionen/schholst/freizeit/schholdt_ticket.shtml&amp;scope=standalone&amp;dbkanal_007=L01_S01_D001_KIN0001_Regio_TZ1_P1_BT_S_AL_SH-Ticket_LZ08\" data-imgurl=\"\" data-target=\"\">Schleswig-Holstein-Ticket</option>\n\t\t\n\t\t\t\t\t<option value=\"https://www.bahn.de/-fahrkarten/privatkunde/pauschalpreisbuchen/pauschalpreis_start.post?angebotsgruppe=9&amp;returnurl=https://www.bahn.de/regional/view/regionen/nrw/freizeit/schoenertag_ticket.shtml&amp;scope=standalone&amp;dbkanal_007=L01_S01_D001_KIN0001_Regio_TZ1_P1_BT_S_AL_NRW-Ticket_LZ08\" data-imgurl=\"\" data-target=\"\">SchönerTagTicket NRW</option>\n\t\t\n\t\t\t\t\t<option value=\"https://www.bahn.de/-fahrkarten/privatkunde/pauschalpreisbuchen/pauschalpreis_start.post?angebotsgruppe=15&amp;returnurl=https://www.bahn.de/regional/view/regionen/thuer/freizeit/laenderticket.shtml&amp;scope=standalone&amp;dbkanal_007=L01_S01_D001_KIN0001_Regio_TZ1_P1_BT_S_AL_Thueringen-Ticket_LZ08\" data-imgurl=\"\" data-target=\"\">Thüringen-Ticket</option>\n\t\t\n\t\t\t\t\t<option value=\"https://www.bahn.de/-fahrkarten/privatkunde/pauschalpreisbuchen/pauschalpreis_start.post?angebotsgruppe=20&amp;returnurl=https://www.bahn.de/p/view/angebot/regio/schoenes_wochenende_ticket.shtml&amp;scope=standalone&amp;dbkanal_007=L01_S01_D001_KIN0001_Regio_TZ1_P1_BT_S_AL_SWT_LZ08\" data-imgurl=\"\" data-target=\"\">Schönes-Wochenende-Ticket</option>\n\t\t\n\t\t\t\t\t<option value=\"https://www.bahn.de/-fahrkarten/privatkunde/pauschalpreisbuchen/pauschalpreis_start.post?angebotsgruppe=30&amp;returnurl=https://www.bahn.de/regional/view/regionen/freizeit/quer-durchs-land.shtml&amp;scope=standalone&amp;dbkanal_007=L01_S01_D001_KIN0001_Regio_TZ1_P1_BT_S_AL_QDL_LZ08\" data-imgurl=\"\" data-target=\"\">Quer-durchs-Land-Ticket</option>\n\t\t\n\t\t\t</select>\n\t </div> \n\t\t\t<input type=\"submit\" class=\"btn\" value=\"Weiter\">\n\t</form>\n\t</div>\n</div>"

/***/ }),

/***/ 183:
/***/ (function(module, exports) {

module.exports = "<table id=\"resultsOverview\" class=\"result js_adjustCellWidth \" cellspacing=\"0\" summary=\"Diese Tabelle zeigt die Ergebnisse Ihrer aktuellen Verbindungssuche\">\n<tr>\n\t<ng-template ngFor let-column [ngForOf]=\"component.selectColumns\">\n\t<th *ngIf=\"column === 'departStation'\" class=\"station first\" style=\"width: 208px;\">Abfahrtsstation</th>\n\t<th *ngIf=\"column === 'arrivalStation'\" class=\"station first\" style=\"width: 208px;\">Ankunftstation</th>\n\t<th *ngIf=\"column === 'departure'\" class=\"time sort \" style=\"width: 167px;\">Abfahrtszeit</th>\n\t<th *ngIf=\"column === 'arrival'\" class=\"time sort \" style=\"width: 167px;\">Ankunftszeit</th>\n\t<th *ngIf=\"column === 'length'\" class=\"duration sort \" style=\"width: 73px;\">Dauer</th>\n\t<th *ngIf=\"column === 'stops'\" class=\"changes sort \" style=\"width: 72px;\">Umst.</th>\n\t<th *ngIf=\"column === 'type'\" class=\"products\" style=\"width: 78px;\">Produkte</th>\n\t<th *ngIf=\"column === 'price'\" class=\"farePep sort \" style=\"width: 217px;\">Sparangebote</th>\n\t<th *ngIf=\"column === 'flexPrice'\" class=\"fareStd sort \" style=\"width: 125px;\">Flexpreis</th>\n\t</ng-template>\n</tr>\n<tr *ngFor=\"let train of trains\" class=\"firstrow\">\n\t<ng-template ngFor let-column [ngForOf]=\"component.selectColumns\">\n\t<td *ngIf=\"column === 'departStation'\" class=\"station first \" style=\"width: 208px;\">{{train.departStation}}</td>\n\t<td *ngIf=\"column === 'arrivalStation'\" class=\"station first \" style=\"width: 208px;\">{{train.arrivalStation}}</td>\n\t<td *ngIf=\"column === 'departure'\" class=\"time\" style=\"width: 167px;\">{{train.departure}}</td>\n\t<td *ngIf=\"column === 'arrival'\" class=\"time\" style=\"width: 167px;\">{{train.arrival}}</td>\n\t<td *ngIf=\"column === 'length'\" class=\"duration lastrow\">{{train.length}}</td>\n\t<td *ngIf=\"column === 'stops'\" class=\"changes lastrow\">{{train.stops}}</td>\n\t<td *ngIf=\"column === 'type'\" class=\"products lastrow\">{{train.type}}</td>\n\t<td *ngIf=\"column === 'price'\" class=\"farePep lastrow button-inside tablebutton borderright\"><span class=\"fareOutput\">{{train.price}}</span></td>\n\t<td *ngIf=\"column === 'flexPrice'\" class=\"farePep lastrow button-inside tablebutton borderright\"><span class=\"fareOutput\">{{train.flexPrice}}</span></td>\n\t</ng-template>\n</tr>\n</table>"

/***/ }),

/***/ 184:
/***/ (function(module, exports) {

module.exports = "<h1>{{component.title}}</h1>"

/***/ }),

/***/ 216:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(90);


/***/ }),

/***/ 25:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    restUrl: "http://localhost:8080/deutsche-bahn-poc-webapp/.rest/nodes/page/",
    damUrl: "http://localhost:8080/deutsche-bahn-poc-webapp/dam/",
    magnoliaPageNode: "/bahn",
    magnoliaPageNodeDepth: 10,
    staticFilePath: "http://localhost:8080/deutsche-bahn-poc-webapp/.resources/deutsche-bahn/webresources/angular-app/src"
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_magnolia_context_service__ = __webpack_require__(18);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AbstractArea; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AbstractArea = (function () {
    //Constructor
    function AbstractArea(elementRef, mgnCtxService) {
        this.elementRef = elementRef;
        this.mgnCtxService = mgnCtxService;
        this.areaName = elementRef.nativeElement.getAttribute("areaName");
    }
    //On init
    AbstractArea.prototype.ngOnInit = function () {
        this.getComponents();
    };
    //Get list of configured components
    AbstractArea.prototype.getComponents = function () {
        this.components = this.mgnCtxService.getAreaComponents(this.areaName);
    };
    return AbstractArea;
}());
AbstractArea = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        template: ""
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* ElementRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_magnolia_context_service__["a" /* MagnoliaContextService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_magnolia_context_service__["a" /* MagnoliaContextService */]) === "function" && _b || Object])
], AbstractArea);

var _a, _b;
//# sourceMappingURL=abstract.area.js.map

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrainService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TrainService = (function () {
    /**
     * Constructor
     */
    function TrainService() {
        this.TRAINS = [
            {
                "departStation": "Basel Bad Bf",
                "arrivalStation": "Frankfurt(Main) Hbf",
                "departure": "09:15",
                "arrival": "11:53",
                "length": "2:38",
                "stops": "0",
                "type": "ICE",
                "price": "77,90 EUR",
                "flexPrice": "83,00 EUR"
            },
            {
                "departStation": "Basel Bad Bf",
                "arrivalStation": "Frankfurt(Main) Hbf",
                "departure": "09:23",
                "arrival": "12:08",
                "length": "2:45",
                "stops": "1",
                "type": "ICE",
                "price": "- EUR",
                "flexPrice": "83,00 EUR"
            },
            {
                "departStation": "Basel Bad Bf",
                "arrivalStation": "Frankfurt(Main) Hbf",
                "departure": "10:23",
                "arrival": "13:08",
                "length": "2:45",
                "stops": "0",
                "type": "ICE",
                "price": "77,90 EUR",
                "flexPrice": "83,90 EUR"
            }
        ];
    }
    TrainService.prototype.getTrains = function () {
        return this.TRAINS;
    };
    return TrainService;
}());
TrainService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], TrainService);

//# sourceMappingURL=train.service.js.map

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WindowRef; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

function _window() {
    return window;
}
var WindowRef = (function () {
    function WindowRef() {
    }
    Object.defineProperty(WindowRef.prototype, "nativeWindow", {
        //Return the native Javascript window object
        get: function () {
            return _window();
        },
        enumerable: true,
        configurable: true
    });
    return WindowRef;
}());
WindowRef = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])()
], WindowRef);

//# sourceMappingURL=windowref.service.js.map

/***/ }),

/***/ 89:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 89;


/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(25);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(96);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__magnolia_app_magnolia_module__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_train_service__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__areas_main_main_component__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__areas_schedule_schedule_component__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_routing_module__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_app_app_component__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_title_title_component__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_subtitle_subtitle_component__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_header_header_component__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_footer_footer_component__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_navigation_navigation_component__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_text_image_text_image_component__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_time_table_time_table_component__ = __webpack_require__(107);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




//Magnolia module

//Services

//Area


//Components









var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_8__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_4__magnolia_app_magnolia_module__["a" /* MagnoliaModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_9__components_app_app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__areas_main_main_component__["a" /* MainComponent */],
            __WEBPACK_IMPORTED_MODULE_7__areas_schedule_schedule_component__["a" /* ScheduleComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_title_title_component__["a" /* TitleComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_subtitle_subtitle_component__["a" /* SubtitleComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_navigation_navigation_component__["a" /* NavigationComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_text_image_text_image_component__["a" /* TextImageComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_time_table_time_table_component__["a" /* TimeTableComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_5__services_train_service__["a" /* TrainService */]
        ],
        bootstrap: [
            __WEBPACK_IMPORTED_MODULE_9__components_app_app_component__["a" /* AppComponent */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__magnolia_app_area_abstract_area__ = __webpack_require__(36);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponent; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MainComponent = (function (_super) {
    __extends(MainComponent, _super);
    function MainComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return MainComponent;
}(__WEBPACK_IMPORTED_MODULE_1__magnolia_app_area_abstract_area__["a" /* AbstractArea */]));
MainComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: "[main-area]",
        template: __webpack_require__(175),
        styles: [__webpack_require__(165)]
    })
], MainComponent);

//# sourceMappingURL=main.component.js.map

/***/ })

},[216]);
//# sourceMappingURL=main.bundle.js.map