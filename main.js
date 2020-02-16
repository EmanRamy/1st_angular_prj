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



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
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

module.exports = "<app-navbar></app-navbar>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
        this.title = 'projecta';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _submitinfo_submitinfo_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./submitinfo/submitinfo.component */ "./src/app/submitinfo/submitinfo.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");










var approutes = [
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"] },
    { path: 'info', component: _submitinfo_submitinfo_component__WEBPACK_IMPORTED_MODULE_7__["SubmitinfoComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                _submitinfo_submitinfo_component__WEBPACK_IMPORTED_MODULE_7__["SubmitinfoComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"].forRoot(approutes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"about\" class=\"about\">\n  <div class=\"section-title\">\n    \n  </div>\n  <div class=\"about-info\">\n          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).\n\n          </p>\n          <p>\n          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).\n          </p>\n      <a href=\"#\" class=\"downloadanybtn\">Download</a>\n      \n      <div class=\"timeline\" >\n          <div class=\"col\">\n          <span>2016-2019</span>\n          <h6> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal</h6>    \n          </div>\n           <div class=\"col\">\n          <span>2016-2019</span>\n          <h6> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal</h6>    \n          </div>\n           <div class=\"col\">\n          <span>2016-2019</span>\n          <h6> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal</h6>    \n          </div>\n           <div class=\"col\">\n          <span>2016-2019</span>\n          <h6> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal</h6>    \n          </div>\n      </div>\n\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".about-info {\n  width: 60%;\n  margin: 0 auto;\n  padding: 50px 0;\n  text-align: center;\n  z-index: 99; }\n\n.about-info p {\n  line-height: 28px;\n  font-size: 18px; }\n\n.about-info .downloadanybtn {\n  display: inline-block;\n  padding: 15px 35px;\n  background-color: #000;\n  border: 1px solid #ffffff;\n  border-radius: 50px;\n  color: #ffffff;\n  font-size: 18px;\n  text-transform: uppercase;\n  text-decoration: none;\n  margin-top: 35px;\n  margin-bottom: 15px;\n  position: relative;\n  z-index: 999;\n  letter-spacing: 1px; }\n\n.timeline {\n  margin-top: 40px;\n  display: -webkit-box;\n  display: flex; }\n\n.timeline .col {\n  margin: 5px;\n  padding: 25px 10px;\n  border: 1px solid #ffffff;\n  float: left; }\n\n.timeline h6 {\n  margin: 10px 0 0;\n  font-size: 14px;\n  line-height: 24px; }\n\n.timeline span {\n  border-bottom: 1px solid #fff;\n  font-size: 15spx;\n  letter-spacing: 2px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcVXNlcnNcXGVtYW5cXERlc2t0b3BcXGFuZ3VsYXIgcHJvamVjdHNcXHByb2plY3RhL3NyY1xcYXBwXFxob21lXFxob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksV0FBVTtFQUNWLGVBQWE7RUFDYixnQkFBZTtFQUNmLG1CQUFrQjtFQUNsQixZQUFXLEVBQ2Q7O0FBQ0Q7RUFFSSxrQkFBaUI7RUFDakIsZ0JBQWUsRUFDbEI7O0FBQ0Q7RUFFSSxzQkFBcUI7RUFDckIsbUJBQWtCO0VBQ2xCLHVCQUFzQjtFQUN0QiwwQkFBeUI7RUFDekIsb0JBQW1CO0VBQ25CLGVBQWM7RUFDZCxnQkFBYztFQUNkLDBCQUF5QjtFQUN6QixzQkFBcUI7RUFDckIsaUJBQWdCO0VBQ2hCLG9CQUFtQjtFQUNuQixtQkFBa0I7RUFDbEIsYUFBWTtFQUNaLG9CQUFtQixFQUV0Qjs7QUFFRDtFQUVJLGlCQUFnQjtFQUNoQixxQkFBYTtFQUFiLGNBQWEsRUFFaEI7O0FBRUQ7RUFFSSxZQUFXO0VBQ1gsbUJBQWtCO0VBQ2xCLDBCQUF5QjtFQUN6QixZQUFVLEVBQ2I7O0FBRUQ7RUFFSSxpQkFBZ0I7RUFDaEIsZ0JBQWU7RUFDZixrQkFBZ0IsRUFDbkI7O0FBQ0Q7RUFFSSw4QkFBNkI7RUFDN0IsaUJBQWdCO0VBQ2hCLG9CQUFtQixFQUN0QiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hYm91dC1pbmZvXHJcbntcclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgICBtYXJnaW46MCBhdXRvO1xyXG4gICAgcGFkZGluZzogNTBweCAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgei1pbmRleDogOTk7XHJcbn1cclxuLmFib3V0LWluZm8gcFxyXG57XHJcbiAgICBsaW5lLWhlaWdodDogMjhweDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG4uYWJvdXQtaW5mbyAuZG93bmxvYWRhbnlidG5cclxue1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcGFkZGluZzogMTVweCAzNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmZmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBmb250LXNpemU6MThweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBtYXJnaW4tdG9wOiAzNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDk5OTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICAgICAgXHJcbn1cclxuXHJcbi50aW1lbGluZVxyXG57XHJcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIFxyXG59XHJcblxyXG4udGltZWxpbmUgLmNvbFxyXG57XHJcbiAgICBtYXJnaW46IDVweDtcclxuICAgIHBhZGRpbmc6IDI1cHggMTBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmZmZmY7XHJcbiAgICBmbG9hdDpsZWZ0O1xyXG59XHJcblxyXG4udGltZWxpbmUgaDZcclxue1xyXG4gICAgbWFyZ2luOiAxMHB4IDAgMDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGxpbmUtaGVpZ2h0OjI0cHg7XHJcbn1cclxuLnRpbWVsaW5lIHNwYW5cclxue1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZmY7XHJcbiAgICBmb250LXNpemU6IDE1c3B4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bclr\" >\n \n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n    \n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"home\">Home </a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"info\">Information </a>\n      </li>\n    \n    \n    \n    </ul>\n   \n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.scss":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bclr {\n  background-color: #ffe6e6; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL0M6XFxVc2Vyc1xcZW1hblxcRGVza3RvcFxcYW5ndWxhciBwcm9qZWN0c1xccHJvamVjdGEvc3JjXFxhcHBcXG5hdmJhclxcbmF2YmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBRUksMEJBSmUsRUFLbEIiLCJmaWxlIjoic3JjL2FwcC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJG1haW5jb2xvcjogI2ZmZTZlNjtcclxuXHJcbi5iY2xyXHJcbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRtYWluY29sb3I7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.scss */ "./src/app/navbar/navbar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/submitinfo/submitinfo.component.html":
/*!******************************************************!*\
  !*** ./src/app/submitinfo/submitinfo.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <form #userdata='ngForm' (ngSubmit)='adduser(userdata)'> \n    <div clas=\"form-group\">\n      <label>UserName: </label>\n      <input class=\"form-control\" name=\"UserName\" [(ngModel)]='UserName'>\n    </div>\n    <div clas=\"form-group\">\n      <label>UserPhone : </label>\n      <input class=\"form-control\" name=\"UserPhone\" [(ngModel)]='UserPhone'>\n    </div>\n    <div clas=\"form-group\">\n      <label>UserAge :</label>\n      <input class=\"form-control\" name=\"UserAge\" [(ngModel)]='UserAge'> \n    </div>\n    <div clas=\"form-group\">\n      <label>UserMail : </label>\n      <input class=\"form-control\" name=\"UserMail\" [(ngModel)]='UserMail'>\n    </div>\n    <button type=\"submit\" class=\"btn btn-info my-3\">Submit Information </button>\n  </form>\n\n \n</div>\n<div class=\"container\">\n<table class=\"table text-center \">\n<thead class=\"cfh\">\n  <th>Name</th>\n  <th>Age</th>\n  <th>Mail</th>\n  <th>Phone</th>\n</thead>\n<tbody>\n  <tr *ngFor=\"let x of usercontainer\">\n    <td>{{x.name}}</td>\n    <td>{{x.age}}</td>\n    <td>{{x.mail}}</td>\n    <td>{{x.phone}}</td>\n  </tr>\n</tbody>\n\n\n\n</table>\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/submitinfo/submitinfo.component.scss":
/*!******************************************************!*\
  !*** ./src/app/submitinfo/submitinfo.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  background-color: #f2ccff;\n  margin: auto;\n  margin-top: 30px; }\n\n.table {\n  border: 3px solid #bf00ff; }\n\n.cfh {\n  font-family: fantasy;\n  font-size: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3VibWl0aW5mby9DOlxcVXNlcnNcXGVtYW5cXERlc2t0b3BcXGFuZ3VsYXIgcHJvamVjdHNcXHByb2plY3RhL3NyY1xcYXBwXFxzdWJtaXRpbmZvXFxzdWJtaXRpbmZvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksMEJBQXlCO0VBQ3pCLGFBQVk7RUFDWixpQkFBZ0IsRUFDbkI7O0FBQ0Q7RUFFSSwwQkFBeUIsRUFDNUI7O0FBQ0Q7RUFFSSxxQkFBb0I7RUFDcEIsZ0JBQWUsRUFFbEIiLCJmaWxlIjoic3JjL2FwcC9zdWJtaXRpbmZvL3N1Ym1pdGluZm8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyXHJcbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmNjZmY7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG59XHJcbi50YWJsZVxyXG57XHJcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjYmYwMGZmO1xyXG59XHJcbi5jZmhcclxue1xyXG4gICAgZm9udC1mYW1pbHk6IGZhbnRhc3k7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/submitinfo/submitinfo.component.ts":
/*!****************************************************!*\
  !*** ./src/app/submitinfo/submitinfo.component.ts ***!
  \****************************************************/
/*! exports provided: SubmitinfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubmitinfoComponent", function() { return SubmitinfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SubmitinfoComponent = /** @class */ (function () {
    function SubmitinfoComponent() {
        this.usercontainer = [];
    }
    SubmitinfoComponent.prototype.adduser = function (userdata) {
        var user = {
            name: userdata.value.UserName,
            age: userdata.value.UserAge,
            mail: userdata.value.UserMail,
            phone: userdata.value.UserPhone
        };
        this.usercontainer.push(user);
        console.log(this.usercontainer);
    };
    SubmitinfoComponent.prototype.ngOnInit = function () {
    };
    SubmitinfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-submitinfo',
            template: __webpack_require__(/*! ./submitinfo.component.html */ "./src/app/submitinfo/submitinfo.component.html"),
            styles: [__webpack_require__(/*! ./submitinfo.component.scss */ "./src/app/submitinfo/submitinfo.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SubmitinfoComponent);
    return SubmitinfoComponent;
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
    production: false
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

module.exports = __webpack_require__(/*! C:\Users\eman\Desktop\angular projects\projecta\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map