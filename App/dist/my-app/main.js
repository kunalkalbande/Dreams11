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
		var e = new Error('Cannot find module "' + req + '".');
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _cricket_team_cricket_team_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cricket-team/cricket-team.component */ "./src/app/cricket-team/cricket-team.component.ts");
/* harmony import */ var _captain_creator_captain_creator_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./captain-creator/captain-creator.component */ "./src/app/captain-creator/captain-creator.component.ts");
/* harmony import */ var _contest_list_contest_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contest-list/contest-list.component */ "./src/app/contest-list/contest-list.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var appRoutes = [
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"] },
    { path: 'cricketTeam', component: _cricket_team_cricket_team_component__WEBPACK_IMPORTED_MODULE_4__["CricketTeamComponent"] },
    { path: 'createCaptain', component: _captain_creator_captain_creator_component__WEBPACK_IMPORTED_MODULE_5__["CaptainCreatorComponent"] },
    { path: 'contestList', component: _contest_list_contest_list_component__WEBPACK_IMPORTED_MODULE_6__["ContestListComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes, {
                    useHash: true
                })
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n\n\n<router-outlet></router-outlet>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! .//app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _cricket_team_cricket_team_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cricket-team/cricket-team.component */ "./src/app/cricket-team/cricket-team.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var primeng_tabview__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/tabview */ "./node_modules/primeng/tabview.js");
/* harmony import */ var primeng_tabview__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(primeng_tabview__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var primeng_accordion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/accordion */ "./node_modules/primeng/accordion.js");
/* harmony import */ var primeng_accordion__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(primeng_accordion__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _team_creator_team_creator_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./team-creator/team-creator.component */ "./src/app/team-creator/team-creator.component.ts");
/* harmony import */ var _car_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./car.service */ "./src/app/car.service.ts");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _player_filter_by_role_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./player-filter-by-role.pipe */ "./src/app/player-filter-by-role.pipe.ts");
/* harmony import */ var _captain_creator_captain_creator_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./captain-creator/captain-creator.component */ "./src/app/captain-creator/captain-creator.component.ts");
/* harmony import */ var _team_selection_team_selection_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./team-selection/team-selection.component */ "./src/app/team-selection/team-selection.component.ts");
/* harmony import */ var _contest_list_contest_list_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./contest-list/contest-list.component */ "./src/app/contest-list/contest-list.component.ts");
/* harmony import */ var primeng_progressbar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/progressbar */ "./node_modules/primeng/progressbar.js");
/* harmony import */ var primeng_progressbar__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(primeng_progressbar__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/checkbox */ "./node_modules/primeng/checkbox.js");
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(primeng_checkbox__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















// import { MyFilterPipe } from './my-filter.pipe';




var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"],
                _cricket_team_cricket_team_component__WEBPACK_IMPORTED_MODULE_6__["CricketTeamComponent"],
                _team_creator_team_creator_component__WEBPACK_IMPORTED_MODULE_11__["TeamCreatorComponent"],
                _player_filter_by_role_pipe__WEBPACK_IMPORTED_MODULE_14__["PlayerFilterByRolePipe"],
                _captain_creator_captain_creator_component__WEBPACK_IMPORTED_MODULE_15__["CaptainCreatorComponent"],
                _team_selection_team_selection_component__WEBPACK_IMPORTED_MODULE_16__["TeamSelectionComponent"],
                _contest_list_contest_list_component__WEBPACK_IMPORTED_MODULE_17__["ContestListComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_21__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_10__["SharedModule"], primeng_primeng__WEBPACK_IMPORTED_MODULE_10__["PanelModule"],
                primeng_tabview__WEBPACK_IMPORTED_MODULE_8__["TabViewModule"],
                primeng_table__WEBPACK_IMPORTED_MODULE_13__["TableModule"],
                primeng_progressbar__WEBPACK_IMPORTED_MODULE_18__["ProgressBarModule"],
                primeng_checkbox__WEBPACK_IMPORTED_MODULE_19__["CheckboxModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_20__["FormsModule"]
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]],
            exports: [primeng_tabview__WEBPACK_IMPORTED_MODULE_8__["TabViewModule"], primeng_accordion__WEBPACK_IMPORTED_MODULE_9__["AccordionModule"], primeng_primeng__WEBPACK_IMPORTED_MODULE_10__["SharedModule"], primeng_table__WEBPACK_IMPORTED_MODULE_13__["TableModule"], primeng_progressbar__WEBPACK_IMPORTED_MODULE_18__["ProgressBarModule"], primeng_checkbox__WEBPACK_IMPORTED_MODULE_19__["CheckboxModule"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]],
            providers: [_car_service__WEBPACK_IMPORTED_MODULE_12__["CarService"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/captain-creator/captain-creator.component.css":
/*!***************************************************************!*\
  !*** ./src/app/captain-creator/captain-creator.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.cricketorTeamList{ height: 100px; background: #c51d23;box-shadow: 2px 2px 2px #ccc; position: relative}\r\n.cricketTeamTitle {\r\n    \r\n    width: 100%;\r\n    left: 0;\r\n    color: #fff;\r\n  \r\n    text-align: center;\r\n\r\n}\r\n.arrowLeft{float: left; padding-top: 10px; color: #fff}\r\n.arrowLeft a{color: #fff;}\r\n.alert {\r\n    position: relative;\r\n    padding: 6px 1.25rem;\r\n    border: 1px solid transparent;\r\n    border-radius: .25rem;\r\n    margin-top: 20px;\r\n}\r\n.demo-tab-group {\r\n    border: 1px solid #e8e8e8;\r\n  }\r\n.demo-tab-content {\r\n    padding: 16px;\r\n  }\r\n\r\n"

/***/ }),

/***/ "./src/app/captain-creator/captain-creator.component.html":
/*!****************************************************************!*\
  !*** ./src/app/captain-creator/captain-creator.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-4 cricketorTeamList\">\n  <a routerLink=\"/dashboard\">\n    <span class=\"fas fa-arrow-left arrowLeft\"></span>\n  </a>\n  <div class=\"cricketTeamTitle\">\n\n    <h4> CRICKET TEAM</h4>\n  </div>\n  <div class=\"alert alert-light\" role=\"alert\" *ngIf=\"allMatches\">\n    <div class=\"row\" *ngFor=\"let match of allMatches\">\n      <div class=\"col-md-4\">{{match.Name}}</div>\n      <div class=\"col-md-4\" style=\"color: #c51d23\">{{match.Date}}</div>\n      <div class=\"col-md-4 text-right\">\n        <a href=\"https://skillup.dream11.com/cricket/afgh-vs-ban-2nd-t20i-pre-match-analysis/\">GURU</a>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"matchListContainer col-md-4\"  >\n\n  <div>\n      <div class=\"label\" style=\"padding: 10px 0;font-weight: bold;\">BATSMEN</div>\n      <app-team-selection role=\"Batsman\"></app-team-selection>\n  \n    </div>\n    <div>\n        <div class=\"label\" style=\"padding: 10px 0;font-weight: bold;\">ALL-ROUNDERS</div>\n        <app-team-selection role=\"AllRounder\"></app-team-selection>\n    \n      </div>\n      <div>\n          <div class=\"label\" style=\"padding: 10px 0;font-weight: bold;\">BOWLERS</div>\n          <app-team-selection role=\"Bowler\"></app-team-selection>\n      \n        </div>\n</div>\n<div class=\"create-team__team-selector__footer text-upper ctFooter_07b1f\">\n\n  <div class=\"create-team__team-selector__footer-action-container text-upper\">\n    <div class=\"row\" style=\"width: 700px;\">\n      <a href=\"javascript:void(0)\" routerLink=\"/contestList\" style=\"margin: 0 auto;\">\n        <button type=\"button\" class=\"btn btn-sm btn-light\">SAVE TEAM</button>\n      </a>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/captain-creator/captain-creator.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/captain-creator/captain-creator.component.ts ***!
  \**************************************************************/
/*! exports provided: CaptainCreatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CaptainCreatorComponent", function() { return CaptainCreatorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CaptainCreatorComponent = /** @class */ (function () {
    function CaptainCreatorComponent(httpService) {
        this.httpService = httpService;
        this.title = 'JSON to Table Example';
    }
    CaptainCreatorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.httpService.get('./assets/teamDetails.json').subscribe(function (data) {
            _this.allMatches = data; // FILL THE ARRAY WITH DATA.
            //  console.log(this.arrBirds[1]);
        }, function (err) {
            console.log(err.message);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], CaptainCreatorComponent.prototype, "role", void 0);
    CaptainCreatorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-captain-creator',
            template: __webpack_require__(/*! ./captain-creator.component.html */ "./src/app/captain-creator/captain-creator.component.html"),
            styles: [__webpack_require__(/*! ./captain-creator.component.css */ "./src/app/captain-creator/captain-creator.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CaptainCreatorComponent);
    return CaptainCreatorComponent;
}());



/***/ }),

/***/ "./src/app/car.service.ts":
/*!********************************!*\
  !*** ./src/app/car.service.ts ***!
  \********************************/
/*! exports provided: CarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarService", function() { return CarService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CarService = /** @class */ (function () {
    function CarService(http) {
        this.http = http;
    }
    CarService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], CarService);
    return CarService;
}());



/***/ }),

/***/ "./src/app/contest-list/contest-list.component.css":
/*!*********************************************************!*\
  !*** ./src/app/contest-list/contest-list.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.cricketorTeamList{ height: 100px; background: #c51d23;box-shadow: 2px 2px 2px #ccc; position: relative}\r\n.cricketTeamTitle {\r\n    \r\n    width: 100%;\r\n    left: 0;\r\n    color: #fff;\r\n  \r\n    text-align: center;\r\n\r\n}\r\n.arrowLeft{float: left; padding-top: 10px; color: #fff}\r\n.arrowLeft a{color: #fff;}\r\n.alert {\r\n    position: relative;\r\n    padding: 6px 1.25rem;\r\n    border: 1px solid transparent;\r\n    border-radius: .25rem;\r\n    margin-top: 20px;\r\n}\r\n.demo-tab-group {\r\n    border: 1px solid #e8e8e8;\r\n  }\r\n.demo-tab-content {\r\n    padding: 16px;\r\n  }\r\n\r\n"

/***/ }),

/***/ "./src/app/contest-list/contest-list.component.html":
/*!**********************************************************!*\
  !*** ./src/app/contest-list/contest-list.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-4 cricketorTeamList\">\n    <a routerLink=\"/dashboard\">\n      <span class=\"fas fa-arrow-left arrowLeft\"></span>\n    </a>\n    <div class=\"cricketTeamTitle\">\n  \n      <h4> CONTEST</h4>\n    </div>\n    <div class=\"alert alert-light\" role=\"alert\" *ngIf=\"allMatches\">\n      <div class=\"row\" *ngFor=\"let match of allMatches\">\n        <div class=\"col-md-4\">{{match.Name}}</div>\n        <div class=\"col-md-4\" style=\"color: #c51d23\">{{match.Date}}</div>\n        <div class=\"col-md-4 text-right\">\n          <a href=\"https://skillup.dream11.com/cricket/afgh-vs-ban-2nd-t20i-pre-match-analysis/\">GURU</a>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"matchListContainer col-md-4\"  >\n  \n      <p-tabView>\n          <p-tabPanel header=\"WINNINGS\">\n            <div style=\"border-bottom:1px solid #ccc;    padding-bottom: 16px;\">\n         <div class=\"row\" style=\"font-size: 14px; width: 780px;\">\n<div class=\"col-md-3\">\n  <label> WINNINGS</label><br/>\n <strong> 25,00,000</strong>\n</div>\n<div class=\"col-md-3 text-center\">  <label>WINNERS</label><br/>\n<strong style=\"color: #c51d23\">62,500</strong></div>\n<div class=\"col-md-3 text-right\">\n    <label>ENTRY FEE\n    </label><br/>\n   <strong>99</strong></div>\n\n</div>\n<div style=\"margin: 10px 0\">\n    <div class=\"progress\" style=\"width: 85%;\">\n        <div class=\"progress-bar\" role=\"progressbar\" style=\"width: 25%;\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\">79,568 left</div>\n      </div>\n      <button type=\"button\" class=\"btn btn-sm btn-outline-secondary float-right\" style=\"position: relative; bottom: 19px;\" >Join</button>\n  </div>\n</div>\n<div style=\"border-bottom:1px solid #ccc;padding-bottom: 16px;\">\n    <div class=\"row\" style=\"font-size: 14px; width: 780px;\">\n<div class=\"col-md-3\">\n<label> WINNINGS</label><br/>\n<strong> 25,00,000</strong>\n</div>\n<div class=\"col-md-3 text-center\">  <label>WINNERS</label><br/>\n<strong style=\"color: #c51d23\">62,500</strong></div>\n<div class=\"col-md-3 text-right\">\n<label>ENTRY FEE\n</label><br/>\n<strong>99</strong></div>\n\n</div>\n<div style=\"margin: 10px 0\">\n<div class=\"progress\" style=\"width: 85%;\">\n   <div class=\"progress-bar\" role=\"progressbar\" style=\"width: 25%;\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\">79,568 left</div>\n </div>\n <button type=\"button\" class=\"btn btn-sm btn-outline-secondary float-right\" style=\"position: relative; bottom: 19px;\" >Join</button>\n</div>\n</div>\n<div style=\"border-bottom:1px solid #ccc;    padding-bottom: 16px;\">\n    <div class=\"row\" style=\"font-size: 14px; width: 780px;\">\n<div class=\"col-md-3\">\n<label> WINNINGS</label><br/>\n<strong> 25,00,000</strong>\n</div>\n<div class=\"col-md-3 text-center\">  <label>WINNERS</label><br/>\n<strong style=\"color:#c51d23\">62,500</strong></div>\n<div class=\"col-md-3 text-right\">\n<label>ENTRY FEE\n</label><br/>\n<strong>99</strong></div>\n\n</div>\n<div style=\"margin: 10px 0\">\n<div class=\"progress\" style=\"width: 85%;\">\n   <div class=\"progress-bar\" role=\"progressbar\" style=\"width: 25%;\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\">79,568 left</div>\n </div>\n <button type=\"button\" class=\"btn btn-sm btn-outline-secondary float-right\" style=\"position: relative; bottom: 19px;\" >Join</button>\n</div>\n</div>\n       \n         </p-tabPanel>\n         <p-tabPanel header=\"TEAMS\">\n            kdfldlfl;df;lk\n          </p-tabPanel>\n          <p-tabPanel header=\"WINNERS\">\n              kdfldlfl;df;lk\n            </p-tabPanel>\n            <p-tabPanel header=\"ENTRY\">\n                kdfldlfl;df;lk\n              </p-tabPanel>\n         </p-tabView>\n  </div>\n  <!-- <div class=\"create-team__team-selector__footer text-upper ctFooter_07b1f\">\n  \n    <div class=\"create-team__team-selector__footer-action-container text-upper\">\n      <div class=\"row\" style=\"width: 700px;\">\n        <a href=\"javascript:void(0)\" routerLink=\"/createCaptain\" style=\"margin: 0 auto;\">\n          <button type=\"button\" class=\"btn btn-sm btn-light\">SAVE TEAM</button>\n        </a>\n      </div>\n    </div>\n  </div> -->"

/***/ }),

/***/ "./src/app/contest-list/contest-list.component.ts":
/*!********************************************************!*\
  !*** ./src/app/contest-list/contest-list.component.ts ***!
  \********************************************************/
/*! exports provided: ContestListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContestListComponent", function() { return ContestListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContestListComponent = /** @class */ (function () {
    function ContestListComponent(httpService) {
        this.httpService = httpService;
        this.value = 0;
        this.title = 'JSON to Table Example';
    }
    ContestListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.httpService.get('./assets/teamDetails.json').subscribe(function (data) {
            _this.allMatches = data; // FILL THE ARRAY WITH DATA.
            //  console.log(this.arrBirds[1]);
        }, function (err) {
            console.log(err.message);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ContestListComponent.prototype, "role", void 0);
    ContestListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contest-list',
            template: __webpack_require__(/*! ./contest-list.component.html */ "./src/app/contest-list/contest-list.component.html"),
            styles: [__webpack_require__(/*! ./contest-list.component.css */ "./src/app/contest-list/contest-list.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ContestListComponent);
    return ContestListComponent;
}());



/***/ }),

/***/ "./src/app/cricket-team/cricket-team.component.css":
/*!*********************************************************!*\
  !*** ./src/app/cricket-team/cricket-team.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.cricketorTeamList{ height: 100px; background: #c51d23;box-shadow: 2px 2px 2px #ccc; position: relative}\r\n.cricketTeamTitle {\r\n    \r\n    width: 100%;\r\n    left: 0;\r\n    color: #fff;\r\n  \r\n    text-align: center;\r\n\r\n}\r\n.arrowLeft{float: left; padding-top: 10px; color: #fff}\r\n.arrowLeft a{color: #fff;}\r\n.alert {\r\n    position: relative;\r\n    padding: 6px 1.25rem;\r\n    border: 1px solid transparent;\r\n    border-radius: .25rem;\r\n    margin-top: 20px;\r\n}\r\n.demo-tab-group {\r\n    border: 1px solid #e8e8e8;\r\n  }\r\n.demo-tab-content {\r\n    padding: 16px;\r\n  }\r\n\r\n"

/***/ }),

/***/ "./src/app/cricket-team/cricket-team.component.html":
/*!**********************************************************!*\
  !*** ./src/app/cricket-team/cricket-team.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-4 cricketorTeamList\">\n    <a routerLink=\"/dashboard\">\n        <span class=\"fas fa-arrow-left arrowLeft\"></span>\n    </a>\n    <div class=\"cricketTeamTitle\">\n\n        <h4> CRICKET TEAM</h4>\n    </div>\n    <div class=\"alert alert-light\" role=\"alert\" *ngIf=\"arrBirds\">\n        <div class=\"row\" *ngFor=\"let bird of arrBirds\">\n            <div class=\"col-md-4\">{{bird.Name}}</div>\n            <div class=\"col-md-4\" style=\"color: #c51d23\">{{bird.Date}}</div>\n            <div class=\"col-md-4 text-right\">\n                <a href=\"https://skillup.dream11.com/cricket/afgh-vs-ban-2nd-t20i-pre-match-analysis/\">GURU</a>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"matchListContainer col-md-4\">\n    <div>\n        <p-tabView>\n             <p-tabPanel header=\"WK 0\">\n                <div class=\"subTab\">\n                    <p-tabView >\n\n                        <p-tabPanel header=\"TEAM\">\n                    \n                            <app-team-creator  role=\"Wicketkeeper\"></app-team-creator>\n\n                        </p-tabPanel>\n                        <p-tabPanel header=\"PLAYER\">\n                            <app-team-creator role=\"Wicketkeeper\"></app-team-creator>\n                        </p-tabPanel>\n                        <p-tabPanel header=\"POINT\">\n                            <app-team-creator role=\"Wicketkeeper\"></app-team-creator>\n                        </p-tabPanel>\n                        <p-tabPanel header=\"CREDITS\">\n                            <app-team-creator role=\"Wicketkeeper\"></app-team-creator>\n                        </p-tabPanel>\n                    </p-tabView>\n                </div>\n            </p-tabPanel>\n            <p-tabPanel header=\"BAT 0\">\n                    <p-tabView >\n\n                            <p-tabPanel header=\"TEAM\">\n                                <app-team-creator  role=\"Batsman\"></app-team-creator>\n    \n                            </p-tabPanel>\n                            <p-tabPanel header=\"PLAYER\">\n                                <app-team-creator role=\"Batsman\"></app-team-creator>\n                            </p-tabPanel>\n                            <p-tabPanel header=\"POINT\">\n                                <app-team-creator role=\"Batsman\"></app-team-creator>\n                            </p-tabPanel>\n                            <p-tabPanel header=\"CREDITS\">\n                                <app-team-creator role=\"Batsman\"></app-team-creator>\n                            </p-tabPanel>\n                        </p-tabView>\n            </p-tabPanel>\n            <p-tabPanel header=\"AR 0\">\n                    <p-tabView >\n\n                            <p-tabPanel header=\"TEAM\">\n                                <app-team-creator  role=\"AllRounder\"></app-team-creator>\n    \n                            </p-tabPanel>\n                            <p-tabPanel header=\"PLAYER\">\n                                <app-team-creator role=\"AllRounder\"></app-team-creator>\n                            </p-tabPanel>\n                            <p-tabPanel header=\"POINT\">\n                                <app-team-creator role=\"AllRounder\"></app-team-creator>\n                            </p-tabPanel>\n                            <p-tabPanel header=\"CREDITS\">\n                                <app-team-creator role=\"AllRounder\"></app-team-creator>\n                            </p-tabPanel>\n                        </p-tabView>\n             \n            </p-tabPanel>\n            <p-tabPanel header=\"BOWL 0\">\n\n                    <p-tabView >\n\n                            <p-tabPanel header=\"TEAM\">\n                                <app-team-creator  role=\"Bowler\"></app-team-creator>\n    \n                            </p-tabPanel>\n                            <p-tabPanel header=\"PLAYER\">\n                                <app-team-creator role=\"Bowler\"></app-team-creator>\n                            </p-tabPanel>\n                            <p-tabPanel header=\"POINT\">\n                                <app-team-creator role=\"Bowler\"></app-team-creator>\n                            </p-tabPanel>\n                            <p-tabPanel header=\"CREDITS\">\n                                <app-team-creator role=\"Bowler\"></app-team-creator>\n                            </p-tabPanel>\n                        </p-tabView>\n              \n            </p-tabPanel>\n        </p-tabView>\n    </div>\n\n  \n</div>\n<div class=\"create-team__team-selector__footer text-upper ctFooter_07b1f\">\n       \n        <div class=\"create-team__team-selector__footer-action-container text-upper\">\n            <div class=\"row\" style=\"width: 700px;\">\n                <div class=\"col-md-1 text-center\">\n                        <span class=\"text-white scoreFont\">0</span> YOR\n\n               </div>\n                <div class=\"col-md-1 text-center\"> <span class=\"text-white scoreFont\">0</span> NOR</div>\n                <div class=\"col-md-2 text-center\" style=\"border-right: 1px dashed;\"> <span class=\"scoreFont\"><span class=\"text-white\">0</span>/11</span> PLAYERS</div>\n                <div class=\"col-md-2 text-center\"><span  class=\"scoreFont\">100/100 </span> <br/> CREDITS LEFT</div>\n                <div class=\"col-md-3\"></div>\n            <div class=\"col-md-2\">\n                <a href=\"#\" routerLink=\"/createCaptain\">   <button type=\"button\" class=\"btn btn-sm btn-outline-secondary \" style=\"margin-top: 12px\" >NEXT</button></a>\n              \n            </div>\n        </div>\n        </div>\n    </div>"

/***/ }),

/***/ "./src/app/cricket-team/cricket-team.component.ts":
/*!********************************************************!*\
  !*** ./src/app/cricket-team/cricket-team.component.ts ***!
  \********************************************************/
/*! exports provided: CricketTeamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CricketTeamComponent", function() { return CricketTeamComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CricketTeamComponent = /** @class */ (function () {
    function CricketTeamComponent(http) {
        this.http = http;
        this.checked = false;
        this.title = 'JSON to Table Example';
    }
    CricketTeamComponent.prototype.ngOnInit = function () {
        var _this = this;
        var head = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["Headers"]({ 'Content-Type': 'application/json' });
        this.http.get('http://idtp285/api/GetMatch/12').subscribe(function (data) {
            _this.allMatches = data; // FILL THE ARRAY WITH DATA.      	
            console.log(_this.allMatches);
        }, function (err) {
            //  console.log (err.message);
        });
    };
    CricketTeamComponent.prototype.postDartdetails = function (model) {
        this.http.post('http://idtp285/api/GetMatch/12', {})
            .subscribe(function (res) {
            console.log(res);
        }, function (err) {
            console.log("Error occured");
        });
        this.postDartdetails(JSON.stringify(this.allMatches));
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], CricketTeamComponent.prototype, "role", void 0);
    CricketTeamComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cricket-team',
            template: __webpack_require__(/*! ./cricket-team.component.html */ "./src/app/cricket-team/cricket-team.component.html"),
            styles: [__webpack_require__(/*! ./cricket-team.component.css */ "./src/app/cricket-team/cricket-team.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CricketTeamComponent);
    return CricketTeamComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-check-input{right:0;}"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-4 cricketorList\">\n<div class=\"cricketTitle\">\n<h4> CRICKET</h4> \n</div>\n\n</div>\n<div class=\"matchListContainer col-md-4\">\n  <div class=\"col-md-12 row\" style=\"padding: 11px 0;\">\n<div class=\"col-md-6 \"> Pick an Upcoming Match </div>\n<div class=\"col-md-6  text-right \"><a href=\"\" class=\"filterSeries\"  data-toggle=\"modal\" data-target=\"#myModal\">Filter By Series</a></div>\n</div>\n<div class=\"card\">\n    \n    <div class=\"card-body\">\n\n<div *ngIf=\"arrBirds\">\n  <div  class=\"row borderBtm\" *ngFor=\"let bird of arrBirds\" >\n    <div class=\"col-md-4\"  >\n    <div   class=\"lazy-loader lazy-loader--loaded\"  style=\"height: auto; width:100%\"   >\n      <a  routerLink=\"/cricketTeam\">  <img src=\"{{bird.Teamlogs[0].TeamLogs}}\" width=\"70\" height=\"70\"/></a>\n      </div>\n    </div>\n      \n      <div class=\"matchCardInfo_9f857 col-md-4\" style=\"vertical-align: middle;top: 16px;\">\n       <div class=\"tourNameLabel_d619f col-xs-12\" >{{bird.SeriesName}} </div>\n       <div class=\"timer__text col-xs-12\">\n        <div>{{bird.TImeSlot}}</div>\n       </div>\n    \n   </div>\n   \n   <div class=\"col-md-4\" >\n    <div class=\"lazy-loader lazy-loader--loaded\" style=\"height: auto; width: 100%;\"  >\n        <img src=\"{{bird.Teamlogs[1].TeamLogs}}\"  width=\"70\" height=\"65\" class=\"img\"/></div>\n     </div>\n     </div>\n     </div>\n\n\n    </div>\n\n\n  </div>\n  <div class=\"modal\" id=\"myModal\">\n      <div class=\"modal-dialog\">\n        <div class=\"modal-content\">\n        \n          <!-- Modal Header -->\n          <div class=\"modal-header\">\n            <h4 class=\"modal-title\">All Series</h4>\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n          </div>\n          \n          <!-- Modal body -->\n          <div class=\"modal-body\">\n\n            <div class=\"row\" *ngFor=\"let bird of arrBirds\" style=\"padding: 10px 0;border-bottom: 1px solid #ccc;\">           \n             <div class=\"col-md-6\">\n             {{bird.SeriesName}} \n             </div>\n         <div class=\"col-md-6\">\n            <div class=\"form-check\">\n                <input type=\"checkbox\" class=\"form-check-input\" id=\"exampleCheck1\"></div>\n         </div>\n        </div>\n          </div>\n          \n          <!-- Modal footer -->\n          <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\">APPLY</button>\n          </div>\n          \n        </div>\n      </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(httpService) {
        this.httpService = httpService;
        this.selectedCities = [];
        this.title = 'JSON to Table Example';
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.httpService.get('./assets/details.json').subscribe(function (data) {
            _this.arrBirds = data; // FILL THE ARRAY WITH DATA.
            //  console.log(this.arrBirds[1]);
        }, function (err) {
            console.log(err.message);
        });
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.topStripe{color: #fff;background-color: #6b9c2e;border-color: #508212;     position: relative;    padding: .75rem 1.25rem; }\r\n.topStripe a{color: #fff; font-weight: bold;}\r\n.loginBG{background: #fff; margin: 0 auto}\r\n.loginTitle{padding: 10px; border-bottom: 1px solid #ccc;}\r\n"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"topStripe\" role=\"alert\">\n  <a href=\"#\"> <i class=\"fas fa-crown\"></i> DREAMS</a>\n </div>\n\n<div class=\"col-md-6 loginBG\">\n<div class=\"col-md-12 loginTitle\">\nLogin Page\n</div>\n<form>\n  <div class=\"form-group\" style=\"margin-top: 10px;\">\n    \n    <input type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"Enter email\">\n    <small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small>\n  </div>\n  <div class=\"form-group\">\n   \n    <input type=\"password\" class=\"form-control\" id=\"exampleInputPassword1\" placeholder=\"Password\">\n  </div>\n  <div class=\"form-group form-check\">\n    <input type=\"checkbox\" class=\"form-check-input\" id=\"exampleCheck1\">\n    <label class=\"form-check-label\" for=\"exampleCheck1\">Check me out</label>\n  </div>\n  <a routerLink=\"/dashboard\"><button type=\"submit\" class=\"btn btn-danger\" >Login</button></a>\n</form>\n\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/player-filter-by-role.pipe.ts":
/*!***********************************************!*\
  !*** ./src/app/player-filter-by-role.pipe.ts ***!
  \***********************************************/
/*! exports provided: PlayerFilterByRolePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerFilterByRolePipe", function() { return PlayerFilterByRolePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PlayerFilterByRolePipe = /** @class */ (function () {
    function PlayerFilterByRolePipe() {
    }
    PlayerFilterByRolePipe.prototype.transform = function (collection, role) {
        if (!role)
            return collection;
        return collection.filter(function (i) { return i.PlayerRoleName === role; });
    };
    PlayerFilterByRolePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'playerFilterByRole'
        })
    ], PlayerFilterByRolePipe);
    return PlayerFilterByRolePipe;
}());



/***/ }),

/***/ "./src/app/team-creator/team-creator.component.css":
/*!*********************************************************!*\
  !*** ./src/app/team-creator/team-creator.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ui-grid .ui-grid-col-1,\r\n        .ui-grid .ui-grid-col-11 {\r\n            padding: 4px 10px;\r\n        }\r\n        .ui-grid label {\r\n            display: block;\r\n            margin: 2px 0 0 4px;\r\n        }"

/***/ }),

/***/ "./src/app/team-creator/team-creator.component.html":
/*!**********************************************************!*\
  !*** ./src/app/team-creator/team-creator.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"cointainer\" *ngIf=\"allMatches\">\n    <ng-container *ngFor=\"let match of allMatches\">\n  \n                \n           \n        <div class=\"row teamPlayer\" *ngFor=\"let person of match.MatchPlayers | playerFilterByRole: role\"   routerLink=\"/createCaptain/{{person.Id}}\">\n            <div class=\"col-md-2\">\n                <img src=\"{{person.PlayerImage}}\" width=\"70\" height=\"70\" class=\"rounded img\" />\n            </div>\n            <div class=\"matchCardInfo_9f857 col-md-4\" >\n                <div class=\"col-xs-12\"> {{person.FirstName}}  {{person.LastName}}</div>\n                <div class=\"timer__text col-xs-12\">\n                    <div>{{person.Address}} | Points: {{person.Points}}  </div>\n                </div>\n            </div>\n            <div class=\"col-md-4\"></div>\n            <div class=\"col-md-2 text-right\">{{person.Credits}}z\n           <input type=\"checkbox\"  (change)=\"stateChanged(person.PlayerId)\" />\n            </div>\n        </div>\n    </ng-container>\n  \n\n</div>"

/***/ }),

/***/ "./src/app/team-creator/team-creator.component.ts":
/*!********************************************************!*\
  !*** ./src/app/team-creator/team-creator.component.ts ***!
  \********************************************************/
/*! exports provided: TeamCreatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamCreatorComponent", function() { return TeamCreatorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TeamCreatorComponent = /** @class */ (function () {
    function TeamCreatorComponent(http) {
        this.http = http;
        this.checked = false;
        this.title = 'JSON to Table Example';
    }
    TeamCreatorComponent.prototype.ngOnInit = function () {
        var _this = this;
        var head = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["Headers"]({ 'Content-Type': 'application/json' });
        this.http.get('http://idtp285/api/GetMatch/12').subscribe(function (data) {
            _this.allMatches = data; // FILL THE ARRAY WITH DATA.      	
            console.log(_this.allMatches);
        }, function (err) {
            //  console.log (err.message);
        });
    };
    TeamCreatorComponent.prototype.stateChanged = function (playerId) {
        var allmatchPlayers = this.allMatches;
        var i;
        for (i = 0; i < allmatchPlayers[0].MatchPlayers.length; i++) {
            var matchPlayerId = allmatchPlayers[0].MatchPlayers[i].PlayerId;
            if (matchPlayerId == playerId) {
                allmatchPlayers[0].MatchPlayers[i].IsSelected = true;
            }
        }
        // alert(allmatchPlayers[0].MatchPlayers[i].IsSelected = true);
    };
    TeamCreatorComponent.prototype.postDartdetails = function (model) {
        this.http.post('http://idtp285/api/GetMatch/12', {})
            .subscribe(function (res) {
            console.log(res);
        }, function (err) {
            console.log("Error occured");
        });
        this.postDartdetails(JSON.stringify(this.allMatches));
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], TeamCreatorComponent.prototype, "role", void 0);
    TeamCreatorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-team-creator',
            template: __webpack_require__(/*! ./team-creator.component.html */ "./src/app/team-creator/team-creator.component.html"),
            styles: [__webpack_require__(/*! ./team-creator.component.css */ "./src/app/team-creator/team-creator.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], TeamCreatorComponent);
    return TeamCreatorComponent;
}());



/***/ }),

/***/ "./src/app/team-selection/team-selection.component.css":
/*!*************************************************************!*\
  !*** ./src/app/team-selection/team-selection.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/team-selection/team-selection.component.html":
/*!**************************************************************!*\
  !*** ./src/app/team-selection/team-selection.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"cointainer\" *ngIf=\"allMatches\">\n    <ng-container *ngFor=\"let match of allMatches\">\n        <div class=\"row teamPlayer\" *ngFor=\"let person of match.MatchPlayers  | playerFilterByRole: role\">\n            <div class=\"col-md-2\">\n                <img src=\"{{person.PlayerImage}}\" width=\"70\" height=\"70\" class=\"rounded img\" />\n            </div>\n            <div class=\"matchCardInfo_9f857 col-md-4\" >\n                <div class=\"col-xs-12\"> {{person.FirstName}}  {{person.LastName}}</div>\n                <div class=\"timer__text col-xs-12\">\n                    <div>{{person.Address}} | Points: {{person.Points}}  </div>\n                </div>\n            </div>\n            <div class=\"col-md-4\"></div>\n            <div class=\"col-md-2 text-right\">\n              <a href=\"javascript:void(0)\" class=\"captainC\">C</a> <a href=\"javascript:void(0)\" class=\"captainVC\">VC</a>\n            </div>\n        </div>\n    </ng-container>\n\n</div>"

/***/ }),

/***/ "./src/app/team-selection/team-selection.component.ts":
/*!************************************************************!*\
  !*** ./src/app/team-selection/team-selection.component.ts ***!
  \************************************************************/
/*! exports provided: TeamSelectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamSelectionComponent", function() { return TeamSelectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TeamSelectionComponent = /** @class */ (function () {
    function TeamSelectionComponent(httpService) {
        this.httpService = httpService;
        this.title = 'JSON to Table Example';
    }
    TeamSelectionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.httpService.get('./assets/teamDetails.json').subscribe(function (data) {
            _this.allMatches = data; // FILL THE ARRAY WITH DATA.
            //  console.log(this.arrBirds[1]);
        }, function (err) {
            console.log(err.message);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], TeamSelectionComponent.prototype, "role", void 0);
    TeamSelectionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-team-selection',
            template: __webpack_require__(/*! ./team-selection.component.html */ "./src/app/team-selection/team-selection.component.html"),
            styles: [__webpack_require__(/*! ./team-selection.component.css */ "./src/app/team-selection/team-selection.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], TeamSelectionComponent);
    return TeamSelectionComponent;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\cricket\dreams\my-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map