webpackJsonp([1,4],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(15);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(106);
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

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__magnolia_app_magnolia_module__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_train_service__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routing_module__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_app_app_component__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_title_title_component__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_subtitle_subtitle_component__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_header_header_component__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_footer_footer_component__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_navigation_navigation_component__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_text_image_text_image_component__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_time_table_time_table_component__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_carousel_carousel_component__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_section_section_component__ = __webpack_require__(67);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




//Magnolia module

//Services

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
            __WEBPACK_IMPORTED_MODULE_6__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_4__magnolia_app_magnolia_module__["a" /* MagnoliaModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__components_app_app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_title_title_component__["a" /* TitleComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_subtitle_subtitle_component__["a" /* SubtitleComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_navigation_navigation_component__["a" /* NavigationComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_text_image_text_image_component__["a" /* TextImageComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_time_table_time_table_component__["a" /* TimeTableComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_carousel_carousel_component__["a" /* CarouselComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_section_section_component__["a" /* SectionComponent */]
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_8__components_title_title_component__["a" /* TitleComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_text_image_text_image_component__["a" /* TextImageComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_subtitle_subtitle_component__["a" /* SubtitleComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_time_table_time_table_component__["a" /* TimeTableComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_carousel_carousel_component__["a" /* CarouselComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_section_section_component__["a" /* SectionComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_5__services_train_service__["a" /* TrainService */]
        ],
        bootstrap: [
            __WEBPACK_IMPORTED_MODULE_7__components_app_app_component__["a" /* AppComponent */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__magnolia_app_services_magnolia_context_service__ = __webpack_require__(20);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'my-app',
        template: __webpack_require__(185),
        styles: [__webpack_require__(175)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__magnolia_app_services_magnolia_context_service__["a" /* MagnoliaContextService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__magnolia_app_services_magnolia_context_service__["a" /* MagnoliaContextService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 110:
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'footer',
        template: __webpack_require__(187),
        styles: [__webpack_require__(177)]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__(15);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: '.mgn-air-asia-header',
        template: __webpack_require__(188),
        styles: [__webpack_require__(178)]
    }),
    __metadata("design:paramtypes", [])
], HeaderComponent);

//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ 112:
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: '.mgn-air-asia-navigation',
        template: __webpack_require__(189),
        styles: [__webpack_require__(179)]
    }),
    __metadata("design:paramtypes", [])
], NavigationComponent);

//# sourceMappingURL=navigation.component.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__magnolia_app_component_abstract_component__ = __webpack_require__(16);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: '[app-subtitle]',
        template: __webpack_require__(191),
        styles: [__webpack_require__(181)]
    })
], SubtitleComponent);

//# sourceMappingURL=subtitle.component.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__magnolia_app_component_abstract_component__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(15);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: '[app-text-image]',
        template: __webpack_require__(192),
        styles: [__webpack_require__(182)]
    }),
    __metadata("design:paramtypes", [])
], TextImageComponent);

//# sourceMappingURL=text-image.component.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__magnolia_app_component_abstract_component__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_train_service__ = __webpack_require__(68);
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
        var _this = this;
        _super.prototype.ngOnInit.call(this);
        //Loads a first time
        this.loadTrains();
        //Then loads every 5 seconds
        this.interval = setInterval(function () {
            _this.loadTrains();
        }, 5000);
    };
    /**
     * On destroy
     */
    TimeTableComponent.prototype.ngOnDestroy = function () {
        if (this.interval) {
            clearInterval(this.interval);
        }
    };
    /**
     * Loads the trains from Magnolia
     */
    TimeTableComponent.prototype.loadTrains = function () {
        var _this = this;
        this.trainService.getTrains().subscribe(function (data) {
            _this.trains = data.results;
        });
    };
    return TimeTableComponent;
}(__WEBPACK_IMPORTED_MODULE_1__magnolia_app_component_abstract_component__["a" /* AbstractComponent */]));
TimeTableComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: '[app-time-table]',
        template: __webpack_require__(193),
        styles: [__webpack_require__(183)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_train_service__["a" /* TrainService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_train_service__["a" /* TrainService */]) === "function" && _a || Object])
], TimeTableComponent);

var _a;
//# sourceMappingURL=time-table.component.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__magnolia_app_component_abstract_component__ = __webpack_require__(16);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        template: __webpack_require__(194),
        styles: [__webpack_require__(184)]
    })
], TitleComponent);

//# sourceMappingURL=title.component.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_components_carousel_carousel_component__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_components_section_section_component__ = __webpack_require__(67);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return COMPONENTS; });


var COMPONENTS = {
    "air-asia-demo:components/carousel": __WEBPACK_IMPORTED_MODULE_0__app_components_carousel_carousel_component__["a" /* CarouselComponent */],
    "air-asia-demo:components/section": __WEBPACK_IMPORTED_MODULE_1__app_components_section_section_component__["a" /* SectionComponent */]
};
//# sourceMappingURL=mapping.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__abstract_area__ = __webpack_require__(69);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListArea; });
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


var ListArea = (function (_super) {
    __extends(ListArea, _super);
    function ListArea() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ListArea;
}(__WEBPACK_IMPORTED_MODULE_1__abstract_area__["a" /* AbstractArea */]));
ListArea = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: "[list-area]",
        template: __webpack_require__(195)
    })
], ListArea);

//# sourceMappingURL=list.area.js.map

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_magnolia_component_mapper_service__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_windowref_service__ = __webpack_require__(39);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RouterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RouterComponent = (function () {
    /**
     * Constructor
     */
    function RouterComponent(resolver, mapper, viewContainerRef, winRef) {
        this.resolver = resolver;
        this.mapper = mapper;
        this.viewContainerRef = viewContainerRef;
        this.winRef = winRef;
        this.nativeWindow = winRef.nativeWindow;
    }
    /**
     * Loads component after init
     */
    RouterComponent.prototype.ngAfterViewInit = function () {
        var componentClass = this.mapper.getComponent(this.component["mgnl:template"]);
        if (typeof componentClass !== "undefined") {
            this.loadComponent(componentClass);
        }
    };
    /**
     * Loads the components thanks to its cmsTemplateId
     */
    RouterComponent.prototype.loadComponent = function (componentClass) {
        //Gets the component factory
        var componentFactory = this.resolver.resolveComponentFactory(componentClass);
        //Get the view container
        this.viewContainerRef.clear();
        var componentRef = this.viewContainerRef.createComponent(componentFactory);
        componentRef.instance.component = this.component;
    };
    return RouterComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object)
], RouterComponent.prototype, "component", void 0);
RouterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'mgn-router',
        template: "nbsp;"
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* ComponentFactoryResolver */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* ComponentFactoryResolver */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_magnolia_component_mapper_service__["a" /* MagnoliaComponentMapperService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_magnolia_component_mapper_service__["a" /* MagnoliaComponentMapperService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* ViewContainerRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* ViewContainerRef */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services_windowref_service__["a" /* WindowRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_windowref_service__["a" /* WindowRef */]) === "function" && _d || Object])
], RouterComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=router.component.js.map

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_magnolia_context_service__ = __webpack_require__(20);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", String)
], AreaDirective.prototype, "areaName", void 0);
AreaDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* Directive */])({
        selector: '[cms-area]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_magnolia_context_service__["a" /* MagnoliaContextService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_magnolia_context_service__["a" /* MagnoliaContextService */]) === "function" && _b || Object])
], AreaDirective);

var _a, _b;
//# sourceMappingURL=area.directive.js.map

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_windowref_service__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_magnolia_context_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_magnolia_component_mapper_service__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__directives_area_directive__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__directives_component_directive__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__area_abstract_area__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__area_list_area__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__component_abstract_component__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__component_router_component__ = __webpack_require__(119);
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
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["e" /* CommonModule */]],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__directives_area_directive__["a" /* AreaDirective */],
            __WEBPACK_IMPORTED_MODULE_6__directives_component_directive__["a" /* ComponentDirective */],
            __WEBPACK_IMPORTED_MODULE_7__area_abstract_area__["a" /* AbstractArea */],
            __WEBPACK_IMPORTED_MODULE_8__area_list_area__["a" /* ListArea */],
            __WEBPACK_IMPORTED_MODULE_9__component_abstract_component__["a" /* AbstractComponent */],
            __WEBPACK_IMPORTED_MODULE_10__component_router_component__["a" /* RouterComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_2__services_windowref_service__["a" /* WindowRef */],
            __WEBPACK_IMPORTED_MODULE_3__services_magnolia_context_service__["a" /* MagnoliaContextService */],
            __WEBPACK_IMPORTED_MODULE_4__services_magnolia_component_mapper_service__["a" /* MagnoliaComponentMapperService */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_5__directives_area_directive__["a" /* AreaDirective */],
            __WEBPACK_IMPORTED_MODULE_8__area_list_area__["a" /* ListArea */],
            __WEBPACK_IMPORTED_MODULE_6__directives_component_directive__["a" /* ComponentDirective */],
            __WEBPACK_IMPORTED_MODULE_10__component_router_component__["a" /* RouterComponent */]
        ]
    })
], MagnoliaModule);

//# sourceMappingURL=magnolia.module.js.map

/***/ }),

/***/ 15:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: false,
    restUrl: "http://localhost:8080/.rest/delivery/pages/v1/air-asia",
    trainRestUrl: "http://localhost:8080/.rest/delivery/trains/v1/",
    damUrl: "http://localhost:8080/dam/",
    staticFilePath: "http://localhost:8080/.resources/air-asia-demo/webresources"
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 16:
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object)
], AbstractComponent.prototype, "component", void 0);
AbstractComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        template: "nbsp;"
    }),
    __metadata("design:paramtypes", [])
], AbstractComponent);

//# sourceMappingURL=abstract.component.js.map

/***/ }),

/***/ 175:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 176:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 177:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 178:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 179:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 180:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 181:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 182:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 183:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, ".mgn-train-time-table {\n\tborder-spacing: 2px;\n\tborder-collapse: separate;\n}\n\n.mgn-train-time-table th {\n\tpadding: 5px;\n\ttext-transform: uppercase;\n\tbackground-color: darkgray;\n\tcolor: white;\n}\n\n.mgn-train-time-table td {\n\tpadding: 5px;\n\tborder-left: 1px darkgray solid;\n\tborder-bottom: 1px darkgray solid;\n}\n\n.mgn-train-time-table td:last-child {\n\tpadding: 5px;\n\tborder-right: 1px darkgray solid;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 184:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 185:
/***/ (function(module, exports) {

module.exports = "<!-- Header -->\n<nav class=\"navbar navbar-default mgn-air-asia-header\"></nav>\n\n<!-- Navigation -->\n<nav class=\"navbar navbar-default affix-top mgn-air-asia-navigation\"></nav>\n\n<!-- Content -->\n<div class=\"container-fluid\" *ngIf=\"isDataLoaded\">\t\n\t<!-- Main area -->\n\t<div class=\"row\">\n\t\t<div class=\"col-xs-12 mgn-air-asia-cell\" areaName=\"main\" cms-area list-area></div>\n\t</div>\n</div>\n\n<!-- Footer -->\n<footer class=\"mgn-air-asia-footer\"></footer>"

/***/ }),

/***/ 186:
/***/ (function(module, exports) {

module.exports = "<div id=\"myCarousel\" class=\"carousel slide\" data-ride=\"carousel\">\n\t<!-- Indicators -->\n\t<ol class=\"carousel-indicators\">\n\t\t<li data-target=\"#myCarousel\" data-slide-to=\"0\" class=\"active\"></li>\n\t\t<li data-target=\"#myCarousel\" data-slide-to=\"1\" *ngIf=\"component.image2!=null\"></li>\n\t\t<li data-target=\"#myCarousel\" data-slide-to=\"2\" *ngIf=\"component.image3!=null\"></li>\n\t</ol>\n\t\n\t<!-- Wrapper for slides -->\n\t<div class=\"carousel-inner\">\n\t\t<div class=\"item active\">\n\t\t\t<img class=\"img-responsive\" src=\"{{env.damUrl}}{{component.image1}}\"/>\n      \t\t<div class=\"carousel-caption\">\n      \t\t\t<img src=\"{{env.damUrl}}{{component.bucket1}}\"/>\n      \t\t\t\n        \t\t\t<h3>{{component.title1}}</h3>\n        \t\t\t\n        \t\t\t<p [innerHTML]=\"sanitize(component.text1)\"></p>\n        \t\t\t\n        \t\t\t<a href=\"{{component.link1}}\" *ngIf=\"component.link1!=null\">\n        \t\t\t\t{{component.linkText1}}\n        \t\t\t</a>\n        \t\t\t\n        \t\t\t<p [innerHTML]=\"sanitize(component.disclaimer1)\"></p>\n      \t\t</div>\n\t\t</div>\n\t\n\t\t<div class=\"item\" *ngIf=\"component.image2!=null\">\n\t\t\t<img class=\"img-responsive\" src=\"{{env.damUrl}}{{component.image2}}\"/>\n      \t\t<div class=\"carousel-caption\">\n      \t\t\t<img src=\"{{env.damUrl}}{{component.bucket2}}\"/>\n      \t\t\t\n        \t\t\t<h3>{{component.title2}}</h3>\n        \t\t\t\n        \t\t\t<p [innerHTML]=\"sanitize(component.text2)\"></p>\n        \t\t\t\n        \t\t\t<a href=\"{{component.link2}}\" *ngIf=\"component.link2!=null\">\n        \t\t\t\t{{component.linkText2}}\n        \t\t\t</a>\n        \t\t\t\n        \t\t\t<p [innerHTML]=\"sanitize(component.disclaimer2)\"></p>\n      \t\t</div>\n\t\t</div>\n\t\n\t\t<div class=\"item\" *ngIf=\"component.image3!=null\">\n\t\t\t<img class=\"img-responsive\" src=\"{{env.damUrl}}{{component.image3}}\"/>\n      \t\t<div class=\"carousel-caption\">\n      \t\t\t<img src=\"{{env.damUrl}}{{component.bucket3}}\"/>\n      \t\t\t\n        \t\t\t<h3>{{component.title3}}</h3>\n        \t\t\t\n        \t\t\t<p [innerHTML]=\"sanitize(component.text3)\"></p>\n        \t\t\t\n        \t\t\t<a href=\"{{component.link3}}\" *ngIf=\"component.link3!=null\">\n        \t\t\t\t{{component.linkText3}}\n        \t\t\t</a>\n        \t\t\t\n        \t\t\t<p [innerHTML]=\"sanitize(component.disclaimer3)\"></p>\n      \t\t</div>\n\t\t</div>\n\t</div>\n\t\n\t<!-- Left and right controls -->\n\t<a class=\"left carousel-control\" href=\"#myCarousel\" data-slide=\"prev\">\n\t\t<span class=\"glyphicon glyphicon-chevron-left\"></span>\n\t\t<span class=\"sr-only\">Previous</span>\n\t</a>\n\t<a class=\"right carousel-control\" href=\"#myCarousel\" data-slide=\"next\">\n\t\t<span class=\"glyphicon glyphicon-chevron-right\"></span>\n\t\t<span class=\"sr-only\">Next</span>\n\t</a>\n</div>"

/***/ }),

/***/ 187:
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid sitemap\">\n\t<div class=\"row\">\n\t\t<div class=\"col-md-2\">\n\t\t\t<p class=\"nav-footer-title\">About Us</p>\n\t\t\t<ul class=\"nav-footer\">\n\t\t\t\t<li><a id=\"linkAboutUs\" href=\"https://www.airasiabig.com/my/en/aboutus-airasiabigloyalty?sel=1\">AirAsia BIG Loyalty</a></li>\n\t\t\t\t<li><a id=\"linkShareholders\" href=\"https://www.airasiabig.com/my/en/aboutus-shareholders?sel=1\">Shareholders</a></li>\n\t\t\t\t<li><a id=\"linkPartner\" href=\"https://www.airasiabig.com/my/en/aboutus-partnerwithus?sel=1\">Partner with Us</a></li>\n\t\t\t\t<li><a id=\"workwithus\" href=\"https://www.airasiabig.com/my/en/aboutus-workwithus?sel=1\">Work with Us</a></li>\n\t\t\t</ul>\n\t\t</div>\n\t\t<div class=\"col-md-2\">\n\t\t\t<p class=\"nav-footer-title\">BIG Membership</p>\n\t\t\t<ul class=\"nav-footer\">\n\t\t\t\t<li><a id=\"linkFFP\" href=\"https://www.airasiabig.com/my/en/big-membership#freedomflyerprogramme\">Freedom Flyer Programme</a></li>\n\t\t\t\t<li><a id=\"linkWhyJoin\" href=\"https://www.airasiabig.com/my/en/big-membership#whyjoin\">Why Join</a></li>\n\t\t\t\t<li><a id=\"linkWaytoEarn\" href=\"https://www.airasiabig.com/my/en/big-membership#waystoearn\">Ways to Earn</a></li>\n\t\t\t\t<li><a id=\"linkWaytoRedeem\" href=\"https://www.airasiabig.com/my/en/big-membership#waystoredeem\">Ways to Redeem</a></li>\n\t\t\t</ul>\n\t\t</div>\n\t\t<div class=\"col-md-2\">\n\t\t\t<p class=\"nav-footer-title\">Happenings</p>\n\t\t\t<ul class=\"nav-footer\">\n\t\t\t\t<li class=\"category\"><a id=\"linkPressRelease\" href=\"https://www.airasiabig.com/my/en/press-release/event\">Event</a></li>\n\t\t\t\t<li class=\"category\"><a id=\"linkPressRelease\" href=\"https://www.airasiabig.com/my/en/press-release/online-campaign\">Online Campaign</a></li>\n\t\t\t\t<li class=\"category\"><a id=\"linkPressRelease\" href=\"https://www.airasiabig.com/my/en/press-release/news\">News</a></li>\n\t\t\t</ul>\n\t\t</div>\n\t\t<div class=\"col-md-3\">\n\t\t\t<p class=\"nav-footer-title\">Country / Region</p>\n\t\t\t\n\t\t\t<a href=\"#\" data-jq-dropdown=\"#drpCountryFooter\" class=\"dropdown\">\n            \t\t<img src=\"https://sitestatic.airasiabig.com/uploadswebcms/public/599/982/d14/599982d14cfb8551185252.png\" width=\"27px\" height=\"13px\"> Malaysia\n            \t</a>\n            \t<br><br>\n            \t\n            \t<p class=\"nav-footer-title\">Language</p>\n            \t\n            \t<div id=\"langDiv\">\n                <ul class=\"nav-footer languages\">\n                \t\t<li>\n                    \t\t<a href=\"javascript:;\" data-request=\"onSwitchLocale\" data-request-data=\"locale: 'en'\" onclick=\"changeLang('English','en');\" class=\"active\">English</a>\n                    \t</li>\n                    \t<li>\n                    \t\t<a href=\"javascript:;\" data-request=\"onSwitchLocale\" data-request-data=\"locale: 'ms'\" onclick=\"changeLang('Bahasa Melayu','ms');\">Bahasa Melayu</a>\n                    \t</li>\n                    \t<li>\n                  \t\t<a href=\"javascript:;\" data-request=\"onSwitchLocale\" data-request-data=\"locale: 'zh'\" onclick=\"changeLang('中文','zh');\">中文</a>\n                   \t</li>\n            \t\t</ul>\n            </div>\n\t\t</div>\n\t\t<div class=\"col-md-3\">\n\t\t\t<p class=\"nav-social-media\" style=\"color: #c1c1c1 !important;\">Follow us on social media</p>\n\t\t\t\n\t\t\t<div class=\"social-columns\">\n\t\t\t\t<div class=\"social-column\">\n\t\t\t\t\t<a href=\"https://www.facebook.com/airasiabig/\" target=\"_blank\">\n\t\t\t\t\t\t<img class=\"footer-icon\" src=\"https://sitestatic.airasiabig.com/uploadswebcms/public/599/a4f/3ce/599a4f3ceaa91680217670.png\">\n\t\t\t\t\t</a>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"social-column\">\n\t\t\t\t\t<a href=\"https://www.instagram.com/airasiabig/?hl=en\" target=\"_blank\">\n\t\t\t\t\t\t<img class=\"footer-icon\" src=\"https://sitestatic.airasiabig.com/uploadswebcms/public/599/a4d/5c2/599a4d5c21410295821584.png\">\n\t\t\t\t\t</a>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"social-column\">\n\t\t\t\t\t<a href=\"https://twitter.com/airasiabig?lang=en\" target=\"_blank\">\n\t\t\t\t\t\t<img class=\"footer-icon\" src=\"https://sitestatic.airasiabig.com/uploadswebcms/public/599/a4d/54d/599a4d54dc936480996208.png\">\n\t\t\t\t\t</a>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"social-column\">\n\t\t\t\t\t<a href=\"https://www.youtube.com/user/mybigshotschannel\" target=\"_blank\">\n\t\t\t\t\t\t<img class=\"footer-icon\" src=\"https://sitestatic.airasiabig.com/uploadswebcms/public/599/a4d/4ad/599a4d4ad2c7a355679957.png\">\n\t\t\t\t\t</a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n\n<div class=\"container-fluid disclaimer\">\n\t<div class=\"meta clearfix\">\n\t\t<ul class=\"list-inline\">\n\t\t\t<li>© 2017 Think BIG Digital Sdn. Bhd. (924656-U). All Rights Reserved.</li>\n\t\t\t<li><a href=\"https://www.airasiabig.com/my/en/ask-big?topic=26&amp;sub=-1&amp;subsub=-1&amp;article=72\">Privacy</a></li>\n\t\t\t<li><a href=\"https://www.airasiabig.com/my/en/ask-big?topic=26&amp;sub=-1&amp;subsub=-1&amp;article=71\">Terms of Use</a></li>\n\t\t</ul>\n\t</div>\n</div>\n"

/***/ }),

/***/ 188:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<div class=\"navbar-header\">\n\t\t<button class=\"navbar-toggle collapsed\" type=\"button\" data-target=\"#menu-main-dropdown-mobile\" data-toggle=\"collapse\">\n\t\t\t<span class=\"icon-bar\"></span> \n\t\t\t<span class=\"icon-bar\"></span> \n\t\t\t<span class=\"icon-bar\"></span>\n\t\t</button>\n\t\t<a class=\"navbar-brand\" href=\"index.html\"> \n\t\t\t<img width=\"120px\" class=\"img-responsive\" src=\"{{env.staticFilePath}}/img/air-asia.png\">\n\t\t</a>\n\t</div>\n\t\n    <div class=\"collapse navbar-collapse\">\n      <ul class=\"nav navbar-nav navbar-right\">\n          <li><a href=\"#\">Earn &amp; Redeem</a></li>\n          <li><a href=\"#\">BIG Membership</a></li>\n          <li><a href=\"#\">Ask BIGcity</a></li>\n          <li>\n          \t<a href=\"#\">\n          \t\t<img src=\"{{env.staticFilePath}}/img/city.png\">\n          \t</a>\n          </li>\n      </ul>\n    </div>\n</div>"

/***/ }),

/***/ 189:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"collapse navbar-collapse\" id=\"menu-main-dropdown-mobile\">\n      <ul class=\"nav navbar-nav\">\n          <li><a href=\"#\"><i class=\"icon-plane\"></i> Search Flights</a></li>\n          <li><a href=\"#\">Fly From <i class=\"icon-angle-down\"></i></a></li>\n          <li><a href=\"#\">Fly To <i class=\"icon-angle-down\"></i></a></li>\n      </ul>\n      \n      <ul class=\"nav navbar-nav navbar-right\">\n          <li><a href=\"#\"><i class=\"icon-user\"></i> Login</a></li>\n          <li><a href=\"#\" class=\"register\">Register for free</a></li>\n      </ul>\n    </div>\n</div>"

/***/ }),

/***/ 190:
/***/ (function(module, exports) {

module.exports = "<div class=\"mgn-section\" [style.background-image]=\"backgroundStyle()\">\n\t<label>{{component.title}}</label>\n\n\t<p [innerHTML]=\"sanitize(component.text)\"></p>\n\t\t\n\t<div class=\"image\">\n\t\t<img src=\"{{env.damUrl}}{{component.image}}\">\n\t</div>\n\t\n   \t<a href=\"{{component.link}}\" *ngIf=\"component.link!=null\">\n\t\t{{component.linkText}}\n   \t</a>\n</div>"

/***/ }),

/***/ 191:
/***/ (function(module, exports) {

module.exports = "<h2>{{component.title}}</h2>"

/***/ }),

/***/ 192:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n\t<div class=\"col-xs-12\">\n\t\t<img class=\"img-responsive\" src=\"{{env.damUrl}}{{component.image}}\"/>\n\t</div>\n\t<div class=\"col-xs-12\">\n\t\t<h2 class=\"light\">{{component.title}}</h2>\n\t</div>\t\t\n</div>"

/***/ }),

/***/ 193:
/***/ (function(module, exports) {

module.exports = "<table class=\"mgn-train-time-table\" cellspacing=\"0\">\n<tr>\n\t<ng-template ngFor let-column [ngForOf]=\"component.selectColumns\">\n\t<th *ngIf=\"column === 'departStation'\" style=\"width: 208px;\">Dep. station</th>\n\t<th *ngIf=\"column === 'arrivalStation'\" style=\"width: 208px;\">Arr. station</th>\n\t<th *ngIf=\"column === 'departure'\" style=\"width: 167px;\">Dep. time</th>\n\t<th *ngIf=\"column === 'arrival'\" style=\"width: 167px;\">Arr. time</th>\n\t<th *ngIf=\"column === 'length'\" style=\"width: 73px;\">Length</th>\n\t<th *ngIf=\"column === 'stops'\" style=\"width: 72px;\">Num stops</th>\n\t<th *ngIf=\"column === 'type'\" style=\"width: 78px;\">Type</th>\n\t<th *ngIf=\"column === 'price'\" style=\"width: 217px;\">Price</th>\n\t<th *ngIf=\"column === 'flexPrice'\" style=\"width: 125px;\">Flex price</th>\n\t</ng-template>\n</tr>\n<tr *ngFor=\"let train of trains\" class=\"firstrow\">\n\t<ng-template ngFor let-column [ngForOf]=\"component.selectColumns\">\n\t<td *ngIf=\"column === 'departStation'\" style=\"width: 208px;\">{{train.from}}</td>\n\t<td *ngIf=\"column === 'arrivalStation'\" style=\"width: 208px;\">{{train.to}}</td>\n\t<td *ngIf=\"column === 'departure'\" style=\"width: 167px;\">{{train.start}}</td>\n\t<td *ngIf=\"column === 'arrival'\" style=\"width: 167px;\">{{train.end}}</td>\n\t<td *ngIf=\"column === 'length'\">{{train.length}}</td>\n\t<td *ngIf=\"column === 'stops'\">{{train.numStops}}</td>\n\t<td *ngIf=\"column === 'type'\">{{train.type}}</td>\n\t<td *ngIf=\"column === 'price'\">{{train.price}}</td>\n\t<td *ngIf=\"column === 'flexPrice'\">{{train.flexPrice}}</td>\n\t</ng-template>\n</tr>\n</table>"

/***/ }),

/***/ 194:
/***/ (function(module, exports) {

module.exports = "<h1>{{component.title}}</h1>"

/***/ }),

/***/ 195:
/***/ (function(module, exports) {

module.exports = "<ng-template ngFor let-component [ngForOf]=\"components\">\n    <ng-template [component]=\"component\" cms-component></ng-template>\n</ng-template>"

/***/ }),

/***/ 20:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__windowref_service__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__(15);
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
        var _this = this;
        var results = new Array();
        if (typeof (this.singlePageConfig.content) !== "undefined") {
            //Gets the area content
            var content = this.singlePageConfig.content;
            var areaContent = content[areaName];
            if (areaContent != null) {
                var components = areaContent["@nodes"];
                components.map(function (nodeName) {
                    var value = areaContent[nodeName];
                    if (typeof (value) === "object" && value["@nodeType"] === "mgnl:component") {
                        if (_this.editionMode) {
                            //Gets the template
                            var templateId = value["mgnl:template"];
                            var template = _this.getComponent(templateId);
                            value.componentDefinition = template;
                        }
                        results.push(value);
                    }
                });
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
        return this.http.get(__WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].restUrl)
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

/***/ 242:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(100);


/***/ }),

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_mapping__ = __webpack_require__(117);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MagnoliaComponentMapperService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MagnoliaComponentMapperService = (function () {
    function MagnoliaComponentMapperService() {
    }
    /**
     * Returns the Angular component linked to the template id.
     */
    MagnoliaComponentMapperService.prototype.getComponent = function (id) {
        return __WEBPACK_IMPORTED_MODULE_1__environments_mapping__["a" /* COMPONENTS */][id];
    };
    return MagnoliaComponentMapperService;
}());
MagnoliaComponentMapperService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])()
], MagnoliaComponentMapperService);

//# sourceMappingURL=magnolia-component-mapper.service.js.map

/***/ }),

/***/ 39:
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

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__magnolia_app_component_abstract_component__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(15);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarouselComponent; });
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




var CarouselComponent = (function (_super) {
    __extends(CarouselComponent, _super);
    /**
     * Constructor
     */
    function CarouselComponent(_sanitizer) {
        var _this = _super.call(this) || this;
        _this._sanitizer = _sanitizer;
        _this.env = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */];
        return _this;
    }
    CarouselComponent.prototype.sanitize = function (text) {
        return this._sanitizer.bypassSecurityTrustHtml(text);
    };
    return CarouselComponent;
}(__WEBPACK_IMPORTED_MODULE_2__magnolia_app_component_abstract_component__["a" /* AbstractComponent */]));
CarouselComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: '[app-carousel]',
        template: __webpack_require__(186),
        styles: [__webpack_require__(176)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]) === "function" && _a || Object])
], CarouselComponent);

var _a;
//# sourceMappingURL=carousel.component.js.map

/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__magnolia_app_component_abstract_component__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(15);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SectionComponent; });
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




var SectionComponent = (function (_super) {
    __extends(SectionComponent, _super);
    /**
     * Constructor
     */
    function SectionComponent(_sanitizer) {
        var _this = _super.call(this) || this;
        _this._sanitizer = _sanitizer;
        _this.env = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */];
        return _this;
    }
    SectionComponent.prototype.sanitize = function (text) {
        return this._sanitizer.bypassSecurityTrustHtml(text);
    };
    SectionComponent.prototype.backgroundStyle = function () {
        return this._sanitizer.bypassSecurityTrustStyle("url(" + this.env.damUrl + this.component.background + ")");
    };
    return SectionComponent;
}(__WEBPACK_IMPORTED_MODULE_2__magnolia_app_component_abstract_component__["a" /* AbstractComponent */]));
SectionComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: '[app-section]',
        template: __webpack_require__(190),
        styles: [__webpack_require__(180)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]) === "function" && _a || Object])
], SectionComponent);

var _a;
//# sourceMappingURL=section.component.js.map

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__(15);
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
    function TrainService(http) {
        this.http = http;
    }
    /**
     * Get the trains from Magnolia
     */
    TrainService.prototype.getTrains = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].trainRestUrl)
            .map(function (res) { return res.json(); });
    };
    return TrainService;
}());
TrainService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], TrainService);

var _a;
//# sourceMappingURL=train.service.js.map

/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_magnolia_context_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_magnolia_component_mapper_service__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__directives_component_directive__ = __webpack_require__(70);
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
    /**
     * Constructor
     */
    function AbstractArea(elementRef, mgnCtxService, resolver, mapper) {
        this.elementRef = elementRef;
        this.mgnCtxService = mgnCtxService;
        this.resolver = resolver;
        this.mapper = mapper;
        this.areaName = elementRef.nativeElement.getAttribute("areaName");
    }
    /**
     * On init
     */
    AbstractArea.prototype.ngOnInit = function () {
        this.getComponents();
    };
    /**
     * Loads component after init
     */
    AbstractArea.prototype.ngAfterViewInit = function () {
        var abstractArea = this;
        this.templates.forEach(function (item, index, array) {
            //Gets the component
            var component = item.getComponent();
            // Gets the component class
            var componentClass = abstractArea.mapper.getComponent(component["mgnl:template"]);
            if (typeof componentClass !== "undefined") {
                setTimeout(function () {
                    abstractArea.loadComponent(componentClass, item, component);
                }, 1);
            }
        });
    };
    /**
     *  Get list of configured components
     */
    AbstractArea.prototype.getComponents = function () {
        this.components = this.mgnCtxService.getAreaComponents(this.areaName);
    };
    /**
     * Loads the components thanks to its cmsTemplateId
     */
    AbstractArea.prototype.loadComponent = function (componentClass, item, component) {
        //Gets the component factory
        var componentFactory = this.resolver.resolveComponentFactory(componentClass);
        //Get the view container
        item.viewContainerRef.clear();
        var componentRef = item.viewContainerRef.createComponent(componentFactory);
        componentRef.instance.component = component;
    };
    return AbstractArea;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* ViewChildren */])(__WEBPACK_IMPORTED_MODULE_3__directives_component_directive__["a" /* ComponentDirective */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* QueryList */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* QueryList */]) === "function" && _a || Object)
], AbstractArea.prototype, "templates", void 0);
AbstractArea = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        template: ""
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_magnolia_context_service__["a" /* MagnoliaContextService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_magnolia_context_service__["a" /* MagnoliaContextService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* ComponentFactoryResolver */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* ComponentFactoryResolver */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__services_magnolia_component_mapper_service__["a" /* MagnoliaComponentMapperService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_magnolia_component_mapper_service__["a" /* MagnoliaComponentMapperService */]) === "function" && _e || Object])
], AbstractArea);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=abstract.area.js.map

/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_magnolia_context_service__ = __webpack_require__(20);
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
    function ComponentDirective(el, mgnCtxService, viewContainerRef) {
        this.el = el;
        this.mgnCtxService = mgnCtxService;
        this.viewContainerRef = viewContainerRef;
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
    ComponentDirective.prototype.getComponent = function () {
        return this.component;
    };
    return ComponentDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object)
], ComponentDirective.prototype, "component", void 0);
ComponentDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* Directive */])({
        selector: '[cms-component]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_magnolia_context_service__["a" /* MagnoliaContextService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_magnolia_context_service__["a" /* MagnoliaContextService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* ViewContainerRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* ViewContainerRef */]) === "function" && _c || Object])
], ComponentDirective);

var _a, _b, _c;
//# sourceMappingURL=component.directive.js.map

/***/ }),

/***/ 99:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 99;


/***/ })

},[242]);
//# sourceMappingURL=main.bundle.js.map