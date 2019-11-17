(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/Layout/Components/footer/footer.component.html":
/*!****************************************************************!*\
  !*** ./src/app/Layout/Components/footer/footer.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-footer\">\r\n  <div class=\"app-footer__inner\">\r\n    <div class=\"app-footer-left\">\r\n      <span class=\"pl-2\">Copyright 2019 - Zoohack</span>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/Layout/Components/footer/footer.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/Layout/Components/footer/footer.component.ts ***!
  \**************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/Layout/Components/footer/footer.component.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/Layout/Components/header/elements/search-box/search-box.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/Layout/Components/header/elements/search-box/search-box.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"search-wrapper\" [class.active]=\"isActive\">\r\n  <div class=\"input-holder\">\r\n    <input type=\"text\" placeholder=\"Type to search\" class=\"search-input\">\r\n    <button class=\"search-icon\" (click)=\"isActive = true\"><span></span></button>\r\n  </div>\r\n  <button class=\"close\" (click)=\"isActive = false\"></button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/Layout/Components/header/elements/search-box/search-box.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/Layout/Components/header/elements/search-box/search-box.component.ts ***!
  \**************************************************************************************/
/*! exports provided: SearchBoxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchBoxComponent", function() { return SearchBoxComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SearchBoxComponent = /** @class */ (function () {
    function SearchBoxComponent() {
    }
    SearchBoxComponent.prototype.ngOnInit = function () {
    };
    SearchBoxComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-search-box',
            template: __webpack_require__(/*! ./search-box.component.html */ "./src/app/Layout/Components/header/elements/search-box/search-box.component.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SearchBoxComponent);
    return SearchBoxComponent;
}());



/***/ }),

/***/ "./src/app/Layout/Components/header/elements/user-box/user-box.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/Layout/Components/header/elements/user-box/user-box.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex\">\r\n  <div class=\"header-btn-lg pr-0\">\r\n    <div class=\"widget-content p-0\">\r\n      <div class=\"widget-content-wrapper\">\r\n        <div class=\"widget-content-left\">\r\n          <div class=\"btn-group\" ngbDropdown placement=\"bottom-right\">\r\n            <button type=\"button\" class=\"btn btn-link p-0 mr-2\" ngbDropdownToggle>\r\n              <span>\r\n                <div class=\"icon-wrapper icon-wrapper-alt rounded-circle\">\r\n                  <img width=\"42\" src=\"./assets/images/avatars/1.jpg\" alt=\"\" class=\"rounded-circle\">\r\n                </div>\r\n              </span>\r\n            </button>\r\n            <div ngbDropdownMenu>\r\n              <button class=\"dropdown-item\">Menus</button>\r\n              <button class=\"dropdown-item\">Settings</button>\r\n              <h6 class=\"dropdown-header\">Header</h6>\r\n              <button class=\"dropdown-item\">Actions</button>\r\n              <div class=\"dropdown-divider\"></div>\r\n              <button class=\"dropdown-item\">Dividers</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/Layout/Components/header/elements/user-box/user-box.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/Layout/Components/header/elements/user-box/user-box.component.ts ***!
  \**********************************************************************************/
/*! exports provided: UserBoxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserBoxComponent", function() { return UserBoxComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _theme_options__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../theme-options */ "./src/app/theme-options.ts");



var UserBoxComponent = /** @class */ (function () {
    function UserBoxComponent(globals) {
        this.globals = globals;
    }
    UserBoxComponent.prototype.ngOnInit = function () {
    };
    UserBoxComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-box',
            template: __webpack_require__(/*! ./user-box.component.html */ "./src/app/Layout/Components/header/elements/user-box/user-box.component.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_theme_options__WEBPACK_IMPORTED_MODULE_2__["ThemeOptions"]])
    ], UserBoxComponent);
    return UserBoxComponent;
}());



/***/ }),

/***/ "./src/app/Layout/Components/header/header.component.html":
/*!****************************************************************!*\
  !*** ./src/app/Layout/Components/header/header.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [class]=\"'app-header header-shadow ' + (config$ | async).headerTheme\">\r\n  <div class=\"logo-src\"></div>\r\n  <div class=\"app-header__content\">\r\n    <div class=\"app-header-left\">\r\n    </div>\r\n    <div class=\"app-header-right\">\r\n    </div>\r\n  </div>\r\n  <div class=\"app-header__mobile-menu\">\r\n    <button type=\"button\" class=\"hamburger close-sidebar-btn hamburger--elastic\"\r\n            [ngClass]=\"{'is-active' : globals.toggleSidebarMobile}\" (click)=\"toggleSidebarMobile()\">\r\n        <span class=\"hamburger-box\">\r\n            <span class=\"hamburger-inner\"></span>\r\n        </span>\r\n    </button>\r\n  </div>\r\n  <div class=\"app-header__menu\">\r\n    <span>\r\n        <button class=\"btn-icon btn-icon-only btn btn-primary\" [ngClass]=\"{'is-active' : globals.toggleHeaderMobile}\"\r\n                (click)=\"toggleHeaderMobile()\">\r\n            <div class=\"btn-icon-wrapper\">\r\n                <fa name=\"ellipsis-v\"></fa>\r\n            </div>\r\n        </button>\r\n    </span>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/Layout/Components/header/header.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/Layout/Components/header/header.component.ts ***!
  \**************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_redux_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular-redux/store */ "./node_modules/@angular-redux/store/lib/src/index.js");
/* harmony import */ var _angular_redux_store__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_redux_store__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _theme_options__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../theme-options */ "./src/app/theme-options.ts");





var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(globals) {
        this.globals = globals;
    }
    Object.defineProperty(HeaderComponent.prototype, "isActiveAsGetter", {
        get: function () {
            return this.isActive;
        },
        enumerable: true,
        configurable: true
    });
    HeaderComponent.prototype.toggleSidebarMobile = function () {
        this.globals.toggleSidebarMobile = !this.globals.toggleSidebarMobile;
    };
    HeaderComponent.prototype.toggleHeaderMobile = function () {
        this.globals.toggleHeaderMobile = !this.globals.toggleHeaderMobile;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.isActive'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent.prototype, "isActiveAsGetter", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_redux_store__WEBPACK_IMPORTED_MODULE_2__["select"])('config'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], HeaderComponent.prototype, "config$", void 0);
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/Layout/Components/header/header.component.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_theme_options__WEBPACK_IMPORTED_MODULE_4__["ThemeOptions"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/Layout/Components/page-title/page-title.component.html":
/*!************************************************************************!*\
  !*** ./src/app/Layout/Components/page-title/page-title.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-page-title\">\r\n  <div class=\"page-title-wrapper\">\r\n    <div class=\"page-title-heading\">\r\n      <div class=\"page-title-icon\">\r\n        <i class=\"icon {{icon}}\"></i>\r\n      </div>\r\n      <div>\r\n        {{heading}}\r\n        <div\r\n          class=\"page-title-subheading\">\r\n          {{subheading}}\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"page-title-actions\">\r\n      <button type=\"button\" class=\"btn-shadow mr-3 btn btn-dark\">\r\n        <fa name=\"star\"></fa>\r\n      </button>\r\n      <button type=\"button\" class=\"btn-shadow d-inline-flex align-items-center btn btn-success\">\r\n        <fa class=\"mr-2\" name=\"plus\"></fa>\r\n        Create New\r\n      </button>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/Layout/Components/page-title/page-title.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/Layout/Components/page-title/page-title.component.ts ***!
  \**********************************************************************/
/*! exports provided: PageTitleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageTitleComponent", function() { return PageTitleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PageTitleComponent = /** @class */ (function () {
    function PageTitleComponent() {
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PageTitleComponent.prototype, "heading", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PageTitleComponent.prototype, "subheading", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PageTitleComponent.prototype, "icon", void 0);
    PageTitleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-title',
            template: __webpack_require__(/*! ./page-title.component.html */ "./src/app/Layout/Components/page-title/page-title.component.html"),
        })
    ], PageTitleComponent);
    return PageTitleComponent;
}());



/***/ }),

/***/ "./src/app/Layout/Components/sidebar/elements/logo/logo.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/Layout/Components/sidebar/elements/logo/logo.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  logo works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/Layout/Components/sidebar/elements/logo/logo.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/Layout/Components/sidebar/elements/logo/logo.component.ts ***!
  \***************************************************************************/
/*! exports provided: LogoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoComponent", function() { return LogoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LogoComponent = /** @class */ (function () {
    function LogoComponent() {
    }
    LogoComponent.prototype.ngOnInit = function () {
    };
    LogoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-logo',
            template: __webpack_require__(/*! ./logo.component.html */ "./src/app/Layout/Components/sidebar/elements/logo/logo.component.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LogoComponent);
    return LogoComponent;
}());



/***/ }),

/***/ "./src/app/Layout/Components/sidebar/sidebar.component.html":
/*!******************************************************************!*\
  !*** ./src/app/Layout/Components/sidebar/sidebar.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [class]=\"'app-sidebar sidebar-shadow ' + (config$ | async).sidebarTheme\" (mouseover)=\"sidebarHover()\"\r\n     (mouseout)=\"sidebarHover()\">\r\n  <div class=\"app-header__logo\">\r\n    <div class=\"logo-src\"></div>\r\n    <div class=\"header__pane ml-auto\">\r\n      <button type=\"button\" class=\"hamburger close-sidebar-btn hamburger--elastic\"\r\n              [ngClass]=\"{'is-active' : globals.toggleSidebar}\" (click)=\"toggleSidebar()\">\r\n        <span class=\"hamburger-box\">\r\n            <span class=\"hamburger-inner\"></span>\r\n        </span>\r\n      </button>\r\n    </div>\r\n  </div>\r\n  <div class=\"app-sidebar-content\">\r\n    <div class=\"app-sidebar-scroll\">\r\n      <perfect-scrollbar [autoPropagation]=\"true\">\r\n        <div class=\"v-sidebar-menu vsm-default\">\r\n          <div class=\"vsm-list\">\r\n            <div class=\"vsm-header\">Requests</div>\r\n            <div class=\"vsm-item\">\r\n              <a routerLink=\"/\" routerLinkActive=\"active-item\" class=\"vsm-link\">\r\n                <i class=\"vsm-icon pe-7s-graph2\"></i>\r\n                <span class=\"vsm-title\">Requests</span>\r\n              </a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </perfect-scrollbar>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/Layout/Components/sidebar/sidebar.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/Layout/Components/sidebar/sidebar.component.ts ***!
  \****************************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _theme_options__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../theme-options */ "./src/app/theme-options.ts");
/* harmony import */ var _angular_redux_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular-redux/store */ "./node_modules/@angular-redux/store/lib/src/index.js");
/* harmony import */ var _angular_redux_store__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_redux_store__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(globals, activatedRoute) {
        this.globals = globals;
        this.activatedRoute = activatedRoute;
        this.activeId = 'dashboardsMenu';
    }
    SidebarComponent.prototype.toggleSidebar = function () {
        this.globals.toggleSidebar = !this.globals.toggleSidebar;
    };
    SidebarComponent.prototype.sidebarHover = function () {
        this.globals.sidebarHover = !this.globals.sidebarHover;
    };
    SidebarComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.innerWidth = window.innerWidth;
            if (_this.innerWidth < 1200) {
                _this.globals.toggleSidebar = true;
            }
        });
        this.extraParameter = this.activatedRoute.snapshot.firstChild.data.extraParameter;
    };
    SidebarComponent.prototype.onResize = function (event) {
        this.newInnerWidth = event.target.innerWidth;
        if (this.newInnerWidth < 1200) {
            this.globals.toggleSidebar = true;
        }
        else {
            this.globals.toggleSidebar = false;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_redux_store__WEBPACK_IMPORTED_MODULE_3__["select"])('config'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"])
    ], SidebarComponent.prototype, "config$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], SidebarComponent.prototype, "onResize", null);
    SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/Layout/Components/sidebar/sidebar.component.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_theme_options__WEBPACK_IMPORTED_MODULE_2__["ThemeOptions"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/Layout/base-layout/base-layout.component.html":
/*!***************************************************************!*\
  !*** ./src/app/Layout/base-layout/base-layout.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [ngClass]=\"{\r\n'closed-sidebar' : globals.toggleSidebar,\r\n'closed-sidebar-md' : globals.toggleSidebarMobile,\r\n'closed-sidebar-open': globals.sidebarHover || globals.toggleSidebarMobile,\r\n'header-menu-open' : globals.toggleHeaderMobile,\r\n'fixed-footer' : globals.toggleFixedFooter\r\n}\" [class]=\"'app-container app-theme-white'\">\r\n  <app-header></app-header>\r\n  <app-sidebar></app-sidebar>\r\n  <div class=\"app-main__outer\">\r\n    <div class=\"app-main__inner\">\r\n      <div [@architectUIAnimation]=\"o.isActivated ? o.activatedRoute : ''\">\r\n        <router-outlet #o=\"outlet\"></router-outlet>\r\n      </div>\r\n    </div>\r\n<!--    <app-footer></app-footer>-->\r\n  </div>\r\n  <div class=\"sidebar-menu-overlay\" (click)=\"toggleSidebarMobile()\"></div>\r\n</div>\r\n<ngx-loading-bar [color]=\"'var(--primary)'\"></ngx-loading-bar>\r\n<notifier-container></notifier-container>\r\n"

/***/ }),

/***/ "./src/app/Layout/base-layout/base-layout.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/Layout/base-layout/base-layout.component.ts ***!
  \*************************************************************/
/*! exports provided: BaseLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseLayoutComponent", function() { return BaseLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_redux_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular-redux/store */ "./node_modules/@angular-redux/store/lib/src/index.js");
/* harmony import */ var _angular_redux_store__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_redux_store__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _ThemeOptions_store_config_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ThemeOptions/store/config.actions */ "./src/app/ThemeOptions/store/config.actions.ts");
/* harmony import */ var _theme_options__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../theme-options */ "./src/app/theme-options.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");







var BaseLayoutComponent = /** @class */ (function () {
    function BaseLayoutComponent(globals, configActions) {
        this.globals = globals;
        this.configActions = configActions;
    }
    BaseLayoutComponent.prototype.toggleSidebarMobile = function () {
        this.globals.toggleSidebarMobile = !this.globals.toggleSidebarMobile;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_redux_store__WEBPACK_IMPORTED_MODULE_2__["select"])('config'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], BaseLayoutComponent.prototype, "config$", void 0);
    BaseLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-base-layout',
            template: __webpack_require__(/*! ./base-layout.component.html */ "./src/app/Layout/base-layout/base-layout.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["trigger"])('architectUIAnimation', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('* <=> *', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["query"])(':enter, :leave', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
                                opacity: 0,
                                display: 'flex',
                                flex: '1',
                                transform: 'translateY(-20px)',
                                flexDirection: 'column'
                            }),
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["query"])(':enter', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])('600ms ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ opacity: 1, transform: 'translateY(0)' })),
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["query"])(':leave', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])('600ms ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ opacity: 0, transform: 'translateY(-20px)' })),
                        ], { optional: true })
                    ]),
                ])
            ]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_theme_options__WEBPACK_IMPORTED_MODULE_5__["ThemeOptions"], _ThemeOptions_store_config_actions__WEBPACK_IMPORTED_MODULE_4__["ConfigActions"]])
    ], BaseLayoutComponent);
    return BaseLayoutComponent;
}());



/***/ }),

/***/ "./src/app/Layout/pages-layout/pages-layout.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/Layout/pages-layout/pages-layout.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@architectUIAnimation]=\"o.isActivated ? o.activatedRoute : ''\">\r\n  <router-outlet #o=\"outlet\"></router-outlet>\r\n</div>\r\n<ngx-loading-bar [color]=\"'var(--primary)'\"></ngx-loading-bar>\r\n"

/***/ }),

/***/ "./src/app/Layout/pages-layout/pages-layout.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/Layout/pages-layout/pages-layout.component.ts ***!
  \***************************************************************/
/*! exports provided: PagesLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesLayoutComponent", function() { return PagesLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");



var PagesLayoutComponent = /** @class */ (function () {
    function PagesLayoutComponent() {
    }
    PagesLayoutComponent.prototype.ngOnInit = function () {
    };
    PagesLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pages-layout',
            template: __webpack_require__(/*! ./pages-layout.component.html */ "./src/app/Layout/pages-layout/pages-layout.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('architectUIAnimation', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('* <=> *', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])(':enter, :leave', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                                opacity: 0,
                                display: 'flex',
                                flex: '1',
                                flexDirection: 'column'
                            }),
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])(':enter', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('600ms ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1 })),
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])(':leave', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('600ms ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0 })),
                        ], { optional: true })
                    ]),
                ])
            ]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PagesLayoutComponent);
    return PagesLayoutComponent;
}());



/***/ }),

/***/ "./src/app/MainPages/infoCard/info-card.component.html":
/*!*************************************************************!*\
  !*** ./src/app/MainPages/infoCard/info-card.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-card pb-3 mb-2 card\">\n  <div class=\"card-body\">\n    <p>\n      {{ card.text }}\n    </p>\n    <p class=\"mb-3\"><b>Location: </b>{{ card.location }}</p>\n    <p class=\"mb-3\"><b>Phone: </b>{{ card.phone }}</p>\n    <p>\n      <audio controls>\n        <source src=\"https://api.superwater.tech/storage/{{ card.voice}}\" type=\"audio/flac\">\n      </audio>\n    </p>\n    <div class=\"col-lg-6 widget-content p-0 mb-3\">\n      <div class=\"widget-content p-0\">\n        <div class=\"widget-content-outer\">\n          <div class=\"widget-content-wrapper\">\n            <div class=\"widget-content-left pr-2\">\n              <div class=\"widget-numbers fsize-1\">{{ card.text_confidence }}</div>\n            </div>\n            <div class=\"widget-content-right w-100\">\n              <div class=\"progress-bar-xs progress\">\n                <div class=\"progress-bar\"\n                     [ngClass]=\"{\n                        'bg-danger' : card.text_confidence_value > 65,\n                        'bg-warning' : card.text_confidence_value > 40 && card.text_confidence_value <= 65,\n                        'bg-success' : card.text_confidence_value <= 40\n                       }\"\n                     role=\"progressbar\" aria-valuenow=\"71\" aria-valuemin=\"0\"\n                     aria-valuemax=\"100\" [style.width]=\"card.text_confidence\"></div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"mb-3\">\n      <p *ngIf=\"card.categories.length == 0\">\n        Теги не найдены\n      </p>\n      <div *ngFor=\"let tag of card.categories\" class=\"badge mr-1 fsize-1 badge-pill badge-info\">{{ tag }}</div>\n    </div>\n    <google-map  height=\"300px\" width=\"100%\"  [zoom]=\"5\" [center]=\"card.latlng[0]\">\n      <map-marker *ngFor=\"let item of card.latlng\" [position]=\"item\"></map-marker>\n    </google-map>\n  </div>\n</div>\n<div class=\"col-lg-12 main-card pb-3 card\">\n  <div class=\"card-body\">\n    <h5 class=\"card-title\">Response</h5>\n    <form novalidate=\"\" class=\"ng-untouched ng-pristine ng-valid\">\n      <div class=\"position-relative form-group\">\n        <div class=\"position-relative form-group\">\n            <textarea\n                [disabled]=\"card.answer\"\n                class=\"form-control\"\n                id=\"exampleText\"\n                [(ngModel)]=\"answer\"\n                name=\"text\"></textarea>\n        </div>\n      </div>\n      <button class=\"mt-1 btn btn-primary\"\n              [disabled]=\"card.answer\"\n              (click)=\"sendAnswer(answer)\">Submit</button>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/MainPages/infoCard/info-card.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/MainPages/infoCard/info-card.component.ts ***!
  \***********************************************************/
/*! exports provided: InfoCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoCardComponent", function() { return InfoCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _configs_UrlConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../configs/UrlConfig */ "./src/configs/UrlConfig.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-notifier */ "./node_modules/angular-notifier/fesm5/angular-notifier.js");






var InfoCardComponent = /** @class */ (function () {
    function InfoCardComponent(http, route, notifier) {
        this.http = http;
        this.route = route;
        this.notifier = notifier;
        var id = this.route.snapshot.paramMap.get('id');
        this.getCard(Number(id));
    }
    InfoCardComponent.prototype.getLatLng = function (address) {
        return new Promise(function (resolve, reject) {
            var geocoder = new google.maps.Geocoder();
            geocoder.geocode({ address: address }, function (results, status) {
                if (status == google.maps.GeocoderStatus.OK) {
                    console.log(results);
                    var latLng = new google.maps.LatLng(results[0].geometry.location.lat(), results[0].geometry.location.lng());
                    resolve(latLng);
                    return;
                }
                reject();
            });
        });
    };
    InfoCardComponent.prototype.getCard = function (id) {
        var _this = this;
        this.http.get(_configs_UrlConfig__WEBPACK_IMPORTED_MODULE_2__["UrlConfig"].API + "/requests/" + id).subscribe(function (card) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var _a, _b, _c, _d;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_e) {
                switch (_e.label) {
                    case 0:
                        this.card = card;
                        this.card.categories = this.card.categories.categories.map(function (cat) { return cat.name; });
                        card.text_confidence_value = card.text_confidence - (card.text_confidence % 1);
                        card.text_confidence = card.text_confidence_value + '%';
                        this.card.latlng = [];
                        _b = (_a = this.card.latlng).push;
                        return [4 /*yield*/, this.getLatLng(this.card.location)];
                    case 1:
                        _b.apply(_a, [_e.sent()]);
                        _d = (_c = this.card.latlng).push;
                        return [4 /*yield*/, this.getLatLng(this.card.text_location)];
                    case 2:
                        _d.apply(_c, [_e.sent()]);
                        this.answer = this.card.answer;
                        return [2 /*return*/];
                }
            });
        }); });
    };
    InfoCardComponent.prototype.sendAnswer = function (answer) {
        var _this = this;
        this.http.post(_configs_UrlConfig__WEBPACK_IMPORTED_MODULE_2__["UrlConfig"].API + "/answer", {
            text: answer,
            phone: this.card.phone,
            id: this.card.id,
        }).subscribe(function () {
            _this.card.answer = answer;
            _this.notifier.notify('success', 'Answer sended');
        });
    };
    InfoCardComponent.prototype.ngOnInit = function () {
    };
    InfoCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-info-card',
            template: __webpack_require__(/*! ./info-card.component.html */ "./src/app/MainPages/infoCard/info-card.component.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            angular_notifier__WEBPACK_IMPORTED_MODULE_5__["NotifierService"]])
    ], InfoCardComponent);
    return InfoCardComponent;
}());



/***/ }),

/***/ "./src/app/MainPages/infoCards/info-cards.component.html":
/*!***************************************************************!*\
  !*** ./src/app/MainPages/infoCards/info-cards.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-lg-12 mb-3 p-0\">\n    <button *ngFor=\"let category of categories\"\n            (click)=\"currentCat = currentCat === category ? null : currentCat = category\"\n            class=\"mr-2 border-0 btn-transition btn\"\n            [ngClass]=\"{'btn-outline-info' : currentCat !== category,'btn-info' : currentCat === category}\">\n      {{ category }}</button>\n  </div>\n  <div *ngFor=\"let card of filterCards(cards)\" class=\"col-md-4 mb-3\">\n    <div class=\"main-card card\" [routerLink]=\"['/card', card.id]\" style=\"cursor: pointer\">\n      <div class=\"card-body\">\n        <p>{{ card.text.substring(0, 150) }}...</p>\n        <div class=\"widget-content p-0\">\n          <div class=\"widget-content-outer\">\n            <div class=\"widget-content-wrapper\">\n              <div class=\"widget-content-left pr-2\">\n                <div class=\"widget-numbers fsize-1\">{{ card.text_confidence }}</div>\n              </div>\n              <div class=\"widget-content-right w-100\">\n                <div class=\"progress-bar-xs progress\">\n                  <div class=\"progress-bar\"\n                       [ngClass]=\"{\n                        'bg-danger' : card.text_confidence_value > 65,\n                        'bg-warning' : card.text_confidence_value > 40 && card.text_confidence_value <= 65,\n                        'bg-success' : card.text_confidence_value <= 40\n                       }\"\n                       role=\"progressbar\" aria-valuenow=\"71\" aria-valuemin=\"0\"\n                       aria-valuemax=\"100\" [style.width]=\"card.text_confidence\"></div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"py-1\" *ngIf=\"card.categories.length == 0\">\n          Теги не найдены\n        </div>\n        <div class=\"py-1\">\n          <div *ngFor=\"let tag of card.categories\" class=\"badge badge-pill badge-info ml-2\">{{ tag.substring(0, 10) }}...</div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/MainPages/infoCards/info-cards.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/MainPages/infoCards/info-cards.component.ts ***!
  \*************************************************************/
/*! exports provided: InfoCardsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoCardsComponent", function() { return InfoCardsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _configs_UrlConfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../configs/UrlConfig */ "./src/configs/UrlConfig.ts");
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-notifier */ "./node_modules/angular-notifier/fesm5/angular-notifier.js");





var InfoCardsComponent = /** @class */ (function () {
    function InfoCardsComponent(http, notifier) {
        this.http = http;
        this.notifier = notifier;
        this.cards = [];
        this.categories = [];
        this.currentCat = null;
    }
    InfoCardsComponent.prototype.loadCards = function (handle) {
        var _this = this;
        this.http.get(_configs_UrlConfig__WEBPACK_IMPORTED_MODULE_3__["UrlConfig"].API + "/requests")
            .subscribe(function (data) {
            data.forEach(function (card) {
                console.log(_this.cards.indexOf(function (curCard) { return curCard.id === card.id; }));
                if (_this.cards.findIndex(function (curCard) { return curCard.id === card.id; }) === -1) {
                    card.categories = card.categories.categories.map(function (cat) { return cat.name; });
                    card.categories.forEach(function (cat) {
                        if (_this.categories.indexOf(cat) === -1) {
                            _this.categories.push(cat);
                        }
                    });
                    card.text_confidence_value = card.text_confidence - (card.text_confidence % 1);
                    card.text_confidence = card.text_confidence_value + '%';
                    _this.cards.push(card);
                    if (handle) {
                        _this.notifier.notify('success', 'new request');
                    }
                }
            });
        });
    };
    InfoCardsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loadCards(false);
        this.timerInterval = setInterval(function () {
            _this.loadCards(true);
        }, 3000);
    };
    InfoCardsComponent.prototype.routerOnDeactivate = function () {
        clearInterval(this.timerInterval);
    };
    InfoCardsComponent.prototype.filterCards = function (cards) {
        var _this = this;
        return cards.filter(function (card) {
            return card.categories.indexOf(_this.currentCat) !== -1 || _this.currentCat == null;
        });
    };
    InfoCardsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-info-cards',
            template: __webpack_require__(/*! ./info-cards.component.html */ "./src/app/MainPages/infoCards/info-cards.component.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            angular_notifier__WEBPACK_IMPORTED_MODULE_4__["NotifierService"]])
    ], InfoCardsComponent);
    return InfoCardsComponent;
}());



/***/ }),

/***/ "./src/app/ThemeOptions/store/config.actions.ts":
/*!******************************************************!*\
  !*** ./src/app/ThemeOptions/store/config.actions.ts ***!
  \******************************************************/
/*! exports provided: ConfigActions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigActions", function() { return ConfigActions; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_redux_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular-redux/store */ "./node_modules/@angular-redux/store/lib/src/index.js");
/* harmony import */ var _angular_redux_store__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_redux_store__WEBPACK_IMPORTED_MODULE_2__);



var ConfigActions = /** @class */ (function () {
    function ConfigActions(ngRedux) {
        this.ngRedux = ngRedux;
    }
    ConfigActions_1 = ConfigActions;
    ConfigActions.prototype.getConfig = function () {
        this.ngRedux.dispatch({
            type: ConfigActions_1.CONFIG_GET,
        });
    };
    ConfigActions.prototype.updateConfig = function (config) {
        this.ngRedux.dispatch({
            type: ConfigActions_1.CONFIG_UPDATE,
            payload: config
        });
    };
    var ConfigActions_1;
    ConfigActions.CONFIG_GET = 'CONFIG_GET';
    ConfigActions.CONFIG_UPDATE = 'CONFIG_UPDATE';
    ConfigActions = ConfigActions_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_redux_store__WEBPACK_IMPORTED_MODULE_2__["NgRedux"]])
    ], ConfigActions);
    return ConfigActions;
}());



/***/ }),

/***/ "./src/app/ThemeOptions/store/config.reducer.ts":
/*!******************************************************!*\
  !*** ./src/app/ThemeOptions/store/config.reducer.ts ***!
  \******************************************************/
/*! exports provided: ConfigReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigReducer", function() { return ConfigReducer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _config_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config.actions */ "./src/app/ThemeOptions/store/config.actions.ts");


var INITIAL_STATE = {
    headerTheme: '',
    sidebarTheme: '',
};
function ConfigReducer(state, action) {
    if (state === void 0) { state = INITIAL_STATE; }
    switch (action.type) {
        case _config_actions__WEBPACK_IMPORTED_MODULE_1__["ConfigActions"].CONFIG_GET:
            return Object.assign({}, state);
        case _config_actions__WEBPACK_IMPORTED_MODULE_1__["ConfigActions"].CONFIG_UPDATE:
            return Object.assign({}, state, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, action.payload));
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/ThemeOptions/store/index.ts":
/*!*********************************************!*\
  !*** ./src/app/ThemeOptions/store/index.ts ***!
  \*********************************************/
/*! exports provided: ArchitectUIState, rootReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArchitectUIState", function() { return ArchitectUIState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rootReducer", function() { return rootReducer; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _config_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config.reducer */ "./src/app/ThemeOptions/store/config.reducer.ts");


var ArchitectUIState = /** @class */ (function () {
    function ArchitectUIState() {
    }
    return ArchitectUIState;
}());

;
var rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
    config: _config_reducer__WEBPACK_IMPORTED_MODULE_1__["ConfigReducer"],
});


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Layout_base_layout_base_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Layout/base-layout/base-layout.component */ "./src/app/Layout/base-layout/base-layout.component.ts");
/* harmony import */ var _MainPages_infoCards_info_cards_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MainPages/infoCards/info-cards.component */ "./src/app/MainPages/infoCards/info-cards.component.ts");
/* harmony import */ var _MainPages_infoCard_info_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MainPages/infoCard/info-card.component */ "./src/app/MainPages/infoCard/info-card.component.ts");






var routes = [
    {
        path: '',
        component: _Layout_base_layout_base_layout_component__WEBPACK_IMPORTED_MODULE_3__["BaseLayoutComponent"],
        children: [
            { path: '', component: _MainPages_infoCards_info_cards_component__WEBPACK_IMPORTED_MODULE_4__["InfoCardsComponent"] },
            { path: 'card/:id', component: _MainPages_infoCard_info_card_component__WEBPACK_IMPORTED_MODULE_5__["InfoCardComponent"] },
        ]
    },
    { path: '**', redirectTo: '' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
                    scrollPositionRestoration: 'enabled',
                    anchorScrolling: 'enabled',
                })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'ArchitectUI - Angular 7 Bootstrap 4 & Material Design Admin Dashboard Template';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_redux_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular-redux/store */ "./node_modules/@angular-redux/store/lib/src/index.js");
/* harmony import */ var _angular_redux_store__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_angular_redux_store__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ThemeOptions_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ThemeOptions/store */ "./src/app/ThemeOptions/store/index.ts");
/* harmony import */ var _ThemeOptions_store_config_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ThemeOptions/store/config.actions */ "./src/app/ThemeOptions/store/config.actions.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _ngx_loading_bar_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-loading-bar/router */ "./node_modules/@ngx-loading-bar/router/fesm5/ngx-loading-bar-router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_google_maps__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/google-maps */ "./node_modules/@angular/google-maps/fesm5/google-maps.js");
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! angular-notifier */ "./node_modules/angular-notifier/fesm5/angular-notifier.js");
/* harmony import */ var angular_font_awesome__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! angular-font-awesome */ "./node_modules/angular-font-awesome/dist/angular-font-awesome.es5.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _Layout_base_layout_base_layout_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./Layout/base-layout/base-layout.component */ "./src/app/Layout/base-layout/base-layout.component.ts");
/* harmony import */ var _Layout_pages_layout_pages_layout_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./Layout/pages-layout/pages-layout.component */ "./src/app/Layout/pages-layout/pages-layout.component.ts");
/* harmony import */ var _Layout_Components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./Layout/Components/page-title/page-title.component */ "./src/app/Layout/Components/page-title/page-title.component.ts");
/* harmony import */ var _Layout_Components_header_header_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./Layout/Components/header/header.component */ "./src/app/Layout/Components/header/header.component.ts");
/* harmony import */ var _Layout_Components_header_elements_search_box_search_box_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./Layout/Components/header/elements/search-box/search-box.component */ "./src/app/Layout/Components/header/elements/search-box/search-box.component.ts");
/* harmony import */ var _Layout_Components_header_elements_user_box_user_box_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./Layout/Components/header/elements/user-box/user-box.component */ "./src/app/Layout/Components/header/elements/user-box/user-box.component.ts");
/* harmony import */ var _Layout_Components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./Layout/Components/sidebar/sidebar.component */ "./src/app/Layout/Components/sidebar/sidebar.component.ts");
/* harmony import */ var _Layout_Components_sidebar_elements_logo_logo_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./Layout/Components/sidebar/elements/logo/logo.component */ "./src/app/Layout/Components/sidebar/elements/logo/logo.component.ts");
/* harmony import */ var _Layout_Components_footer_footer_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./Layout/Components/footer/footer.component */ "./src/app/Layout/Components/footer/footer.component.ts");
/* harmony import */ var _MainPages_infoCards_info_cards_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./MainPages/infoCards/info-cards.component */ "./src/app/MainPages/infoCards/info-cards.component.ts");
/* harmony import */ var _MainPages_infoCard_info_card_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./MainPages/infoCard/info-card.component */ "./src/app/MainPages/infoCard/info-card.component.ts");
















// BOOTSTRAP COMPONENTS




// LAYOUT



// HEADER



// SIDEBAR


// FOOTER



var DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true
};
var AppModule = /** @class */ (function () {
    function AppModule(ngRedux, devTool) {
        this.ngRedux = ngRedux;
        this.devTool = devTool;
        this.ngRedux.configureStore(_ThemeOptions_store__WEBPACK_IMPORTED_MODULE_6__["rootReducer"], {}, [], [devTool.isEnabled() ? devTool.enhancer() : function (f) { return f; }]);
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                // LAYOUT
                _app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"],
                _Layout_base_layout_base_layout_component__WEBPACK_IMPORTED_MODULE_18__["BaseLayoutComponent"],
                _Layout_pages_layout_pages_layout_component__WEBPACK_IMPORTED_MODULE_19__["PagesLayoutComponent"],
                _Layout_Components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_20__["PageTitleComponent"],
                // HEADER
                _Layout_Components_header_header_component__WEBPACK_IMPORTED_MODULE_21__["HeaderComponent"],
                _Layout_Components_header_elements_search_box_search_box_component__WEBPACK_IMPORTED_MODULE_22__["SearchBoxComponent"],
                _Layout_Components_header_elements_user_box_user_box_component__WEBPACK_IMPORTED_MODULE_23__["UserBoxComponent"],
                // SIDEBAR
                _Layout_Components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_24__["SidebarComponent"],
                _Layout_Components_sidebar_elements_logo_logo_component__WEBPACK_IMPORTED_MODULE_25__["LogoComponent"],
                // FOOTER
                _Layout_Components_footer_footer_component__WEBPACK_IMPORTED_MODULE_26__["FooterComponent"],
                _MainPages_infoCards_info_cards_component__WEBPACK_IMPORTED_MODULE_27__["InfoCardsComponent"],
                _MainPages_infoCard_info_card_component__WEBPACK_IMPORTED_MODULE_28__["InfoCardComponent"]
            ],
            imports: [
                _angular_google_maps__WEBPACK_IMPORTED_MODULE_13__["GoogleMapsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_redux_store__WEBPACK_IMPORTED_MODULE_5__["NgReduxModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_10__["CommonModule"],
                _ngx_loading_bar_router__WEBPACK_IMPORTED_MODULE_9__["LoadingBarRouterModule"],
                angular_notifier__WEBPACK_IMPORTED_MODULE_14__["NotifierModule"].withConfig({
                    position: {
                        horizontal: {
                            position: 'right',
                        },
                        vertical: {
                            position: 'top',
                        }
                    }
                }),
                // Angular Bootstrap Components
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_17__["PerfectScrollbarModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__["NgbModule"],
                angular_font_awesome__WEBPACK_IMPORTED_MODULE_15__["AngularFontAwesomeModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
            ],
            providers: [
                {
                    provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_17__["PERFECT_SCROLLBAR_CONFIG"],
                    // DROPZONE_CONFIG,
                    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
                },
                _ThemeOptions_store_config_actions__WEBPACK_IMPORTED_MODULE_7__["ConfigActions"],
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"]]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_redux_store__WEBPACK_IMPORTED_MODULE_5__["NgRedux"],
            _angular_redux_store__WEBPACK_IMPORTED_MODULE_5__["DevToolsExtension"]])
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/theme-options.ts":
/*!**********************************!*\
  !*** ./src/app/theme-options.ts ***!
  \**********************************/
/*! exports provided: ThemeOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeOptions", function() { return ThemeOptions; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ThemeOptions = /** @class */ (function () {
    function ThemeOptions() {
        this.sidebarHover = false;
        this.toggleSidebar = false;
        this.toggleSidebarMobile = false;
        this.toggleHeaderMobile = false;
        this.toggleFixedFooter = false;
    }
    ThemeOptions = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], ThemeOptions);
    return ThemeOptions;
}());



/***/ }),

/***/ "./src/configs/UrlConfig.ts":
/*!**********************************!*\
  !*** ./src/configs/UrlConfig.ts ***!
  \**********************************/
/*! exports provided: UrlConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UrlConfig", function() { return UrlConfig; });
var UrlConfig = /** @class */ (function () {
    function UrlConfig() {
    }
    UrlConfig.API = 'https://api.superwater.tech';
    return UrlConfig;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/belkacar/Desktop/Projects/zoohack2/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map