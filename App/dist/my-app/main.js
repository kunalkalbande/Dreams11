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
/* harmony import */ var _usercontest_usercontest_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./usercontest/usercontest.component */ "./src/app/usercontest/usercontest.component.ts");
/* harmony import */ var _viewteam_viewteam_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./viewteam/viewteam.component */ "./src/app/viewteam/viewteam.component.ts");
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
    { path: 'usercontest', component: _usercontest_usercontest_component__WEBPACK_IMPORTED_MODULE_7__["UsercontestComponent"] },
    { path: 'viewteam', component: _viewteam_viewteam_component__WEBPACK_IMPORTED_MODULE_8__["ViewteamComponent"] },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes, 
                // { useHash: true }
                { enableTracing: true })
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

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n\r\n\r\n<router-outlet></router-outlet>"

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
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _player_filter_by_role_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./player-filter-by-role.pipe */ "./src/app/player-filter-by-role.pipe.ts");
/* harmony import */ var _captain_creator_captain_creator_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./captain-creator/captain-creator.component */ "./src/app/captain-creator/captain-creator.component.ts");
/* harmony import */ var _team_selection_team_selection_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./team-selection/team-selection.component */ "./src/app/team-selection/team-selection.component.ts");
/* harmony import */ var _contest_list_contest_list_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./contest-list/contest-list.component */ "./src/app/contest-list/contest-list.component.ts");
/* harmony import */ var primeng_progressbar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/progressbar */ "./node_modules/primeng/progressbar.js");
/* harmony import */ var primeng_progressbar__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(primeng_progressbar__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/checkbox */ "./node_modules/primeng/checkbox.js");
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(primeng_checkbox__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_models_userdata_userdata_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../app/models/userdata/userdata.module */ "./src/app/models/userdata/userdata.module.ts");
/* harmony import */ var _usercontest_usercontest_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./usercontest/usercontest.component */ "./src/app/usercontest/usercontest.component.ts");
/* harmony import */ var _viewteam_viewteam_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./viewteam/viewteam.component */ "./src/app/viewteam/viewteam.component.ts");
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
                _player_filter_by_role_pipe__WEBPACK_IMPORTED_MODULE_13__["PlayerFilterByRolePipe"],
                _captain_creator_captain_creator_component__WEBPACK_IMPORTED_MODULE_14__["CaptainCreatorComponent"],
                _team_selection_team_selection_component__WEBPACK_IMPORTED_MODULE_15__["TeamSelectionComponent"],
                _contest_list_contest_list_component__WEBPACK_IMPORTED_MODULE_16__["ContestListComponent"],
                _usercontest_usercontest_component__WEBPACK_IMPORTED_MODULE_22__["UsercontestComponent"],
                _viewteam_viewteam_component__WEBPACK_IMPORTED_MODULE_23__["ViewteamComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_20__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_10__["SharedModule"], primeng_primeng__WEBPACK_IMPORTED_MODULE_10__["PanelModule"],
                primeng_tabview__WEBPACK_IMPORTED_MODULE_8__["TabViewModule"],
                primeng_table__WEBPACK_IMPORTED_MODULE_12__["TableModule"],
                primeng_progressbar__WEBPACK_IMPORTED_MODULE_17__["ProgressBarModule"],
                primeng_checkbox__WEBPACK_IMPORTED_MODULE_18__["CheckboxModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_19__["FormsModule"],
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]],
            exports: [primeng_tabview__WEBPACK_IMPORTED_MODULE_8__["TabViewModule"], primeng_accordion__WEBPACK_IMPORTED_MODULE_9__["AccordionModule"], primeng_primeng__WEBPACK_IMPORTED_MODULE_10__["SharedModule"], primeng_table__WEBPACK_IMPORTED_MODULE_12__["TableModule"], primeng_progressbar__WEBPACK_IMPORTED_MODULE_17__["ProgressBarModule"], primeng_checkbox__WEBPACK_IMPORTED_MODULE_18__["CheckboxModule"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]],
            providers: [_app_models_userdata_userdata_module__WEBPACK_IMPORTED_MODULE_21__["UserdataModule"]]
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

module.exports = "\r\n.cricketorTeamList{ height: 100px; background: #c51d23;box-shadow: 2px 2px 2px #ccc; position: relative; }\r\n.cricketTeamTitle {\r\n    \r\n    width: 100%;\r\n    left: 0;\r\n    color: #fff;\r\n  \r\n    text-align: center;\r\n\r\n}\r\n.cricketTeamTitle h4{position: relative; top:10px;}\r\n.arrowLeft{float: left; padding-top: 10px; color: #fff}\r\n.arrowLeft a{color: #fff;}\r\n.alert {\r\n    position: relative;\r\n    padding: 6px 1.25rem;\r\n    border: 1px solid transparent;\r\n    border-radius: .25rem;\r\n    margin-top: 20px;\r\n}\r\n.demo-tab-group {\r\n    border: 1px solid #e8e8e8;\r\n  }\r\n.demo-tab-content {\r\n    padding: 16px;\r\n  }\r\n\r\n"

/***/ }),

/***/ "./src/app/captain-creator/captain-creator.component.html":
/*!****************************************************************!*\
  !*** ./src/app/captain-creator/captain-creator.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-6 col-xs-12 cricketorTeamList\">\r\n            <a routerLink=\"/dashboard\">\r\n                <span class=\"fas fa-arrow-left arrowLeft\"></span>\r\n            </a>\r\n            <div class=\"cricketTeamTitle\">\r\n        \r\n                <h4> CRICKET TEAM</h4>\r\n            </div>\r\n            <div class=\"col-md-12 col-xs-12 \">\r\n            <div class=\"alert alert-light\" role=\"alert\" *ngIf=\"matchInfo\">\r\n                <div class=\"row \">\r\n                    <div class=\"col\">{{matchInfo.Name}}</div>\r\n                    <div class=\"col-5\" style=\"color: #c51d23; text-align: center\">{{matchInfo.Date}}</div>\r\n                    <div class=\"col\">\r\n                        <a href=\"https://skillup.dream11.com/cricket/afgh-vs-ban-2nd-t20i-pre-match-analysis/\" class=\"float-right\">GURU</a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        </div>\r\n        </div>\r\n  \r\n\r\n<div class=\"row\">\r\n<div class=\"col-md-6 col-xs-12 bg-white \"  >\r\n  \r\n  <div>\r\n      <div class=\"label\" style=\"padding: 10px 0;font-weight: bold;\">BATSMEN</div>\r\n      <app-team-selection role=\"Batsman\"></app-team-selection>\r\n  \r\n    </div>\r\n    <div>\r\n        <div class=\"label\" style=\"padding: 10px 0;font-weight: bold;\">ALL-ROUNDERS</div>\r\n        <app-team-selection role=\"AllRounder\"></app-team-selection>\r\n    \r\n      </div>\r\n      <div>\r\n          <div class=\"label\" style=\"padding: 10px 0;font-weight: bold;\">BOWLERS</div>\r\n          <app-team-selection role=\"Blower\"></app-team-selection>\r\n        </div>\r\n        </div>\r\n</div>\r\n\r\n</div>\r\n<!-- <div class=\"create-team__team-selector__footer text-upper ctFooter_07b1f\">\r\n\r\n  <div class=\"create-team__team-selector__footer-action-container text-upper\">\r\n    <div class=\"row\" style=\"width: 700px;\">\r\n      <a href=\"javascript:void(0)\" routerLink=\"/contestList\" style=\"margin: 0 auto;\">\r\n        <button type=\"button\" class=\"btn btn-sm btn-light\">SAVE TEAM</button>\r\n      </a>\r\n    </div>\r\n  </div>\r\n</div> -->"

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




var CaptainCreatorComponent = /** @class */ (function () {
    function CaptainCreatorComponent(http) {
        this.http = http;
        this.checked = [];
        this.title = 'JSON to Table Example';
    }
    CaptainCreatorComponent.prototype.ngOnInit = function () {
        var _this = this;
        var head = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["Headers"]({ 'Content-Type': 'application/json' });
        this.http.get('http://idtp285/api/GetMatch/12').subscribe(function (data) {
            _this.matchInfo = data; // FILL THE ARRAY WITH DATA.      	
            console.log(_this.matchInfo);
        }, function (err) {
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

/***/ "./src/app/contest-list/contest-list.component.css":
/*!*********************************************************!*\
  !*** ./src/app/contest-list/contest-list.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.cricketorTeamList{ height: 100px; background: #c51d23;box-shadow: 2px 2px 2px #ccc; position: relative;width: 550px; }\r\n.cricketTeamTitle {\r\n    \r\n    width: 100%;\r\n    left: 0;\r\n    color: #fff;\r\n  \r\n    text-align: center;\r\n    padding-top:10px;\r\n}\r\n.arrowLeft{float: left; padding-top: 10px; color: #fff}\r\n.arrowLeft a{color: #fff;}\r\n.alert {\r\n    position: relative;\r\n    padding: 6px 1.25rem;\r\n    border: 1px solid transparent;\r\n    border-radius: .25rem;\r\n    margin-top: 20px;\r\n}\r\n.demo-tab-group {\r\n    border: 1px solid #e8e8e8;\r\n  }\r\n.demo-tab-content {\r\n    padding: 16px;\r\n  }\r\n.bs-example{\r\n    margin: 20px;\r\n    padding-left: 50px;\r\n}\r\n.btncolor\r\n{\r\n    background:black; \r\n    \r\n}\r\n.hide{\r\n    display: none;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/contest-list/contest-list.component.html":
/*!**********************************************************!*\
  !*** ./src/app/contest-list/contest-list.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-6 col-xs-12 cricketorTeamList\">\r\n      <a routerLink=\"/dashboard\">\r\n        <span class=\"fas fa-arrow-left arrowLeft\"></span>\r\n      </a>\r\n      <div class=\"cricketTeamTitle\">\r\n        <h4>MY CONTESTS</h4>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\"></div>\r\n  <div class=\"row\">\r\n    <div class=\"matchListContainer col-md-6 col-xs-12\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6 col-xs-12\">\r\n          <div class=\"bs-example\">\r\n            <div class=\"btn-group\" data-toggle=\"buttons\">\r\n              <div class=\"col-md-3 col-xs-12\">\r\n                <button type=\"button\" class=\"btn btn-primary btncolor\" style=\"width: 120px\" routerLink=\"/usercontest\">Fixtures</button>\r\n              </div>\r\n              <div class=\"col-md-3 col-xs-12\">\r\n                <button type=\"button\" class=\"btn btn-primary btncolor\" style=\"width: 120px\">Live</button>\r\n              </div>\r\n              <div class=\"col-md-3 col-xs-12\">\r\n                <button type=\"button\" class=\"btn btn-primary btncolor\" style=\"width: 120px\">Results</button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12 col-xs-12\">\r\n          <div class=\"card\">\r\n            <div class=\"card-body\">\r\n              <div *ngIf=\"usercontest\">\r\n                <div class=\"row borderBtm\" *ngFor=\"let match of usermatch\">\r\n                  <div class=\"col-md-4 col-xs-12\">\r\n                    <div class=\"lazy-loader lazy-loader--loaded\" style=\"height: auto; width:100%\">\r\n                      <a routerLink=\"/cricketTeam\">\r\n                        <img src=\"http://idtp285/ClientDocument/ece9b4b32cf74084b50c1c65ebb9e6f2CSK-Logo.png\" width=\"70\" height=\"70\" />\r\n                      </a>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-md-5 col-xs-12\" style=\"vertical-align: middle;top: 16px;\">\r\n                    <h4>\r\n                      <div>{{match.matchName}}</div>\r\n                    </h4>\r\n                  </div>\r\n                  <div class=\"col-md-3 col-xs-12\">\r\n                    <div class=\"lazy-loader lazy-loader--loaded\" style=\"height: auto; width: 100%;\">\r\n                      <img src=\"http://idtp285/ClientDocument/09aea0d7263747c5ac4c6843e0d4ad8cdd-logo.jpg\" width=\"70\" height=\"65\" class=\"img\" />\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-md-6 col-xs-12\">\r\n                    <div class=\"col-md-12\"> Contests Joined</div>\r\n                  </div>\r\n                  <div class=\"col-md-6 col-xs-12\">\r\n                    <i class=\"material-icons\" (click)=\"click1()\" ng-model=\"play\">keyboard_arrow_right</i>\r\n                  </div>\r\n\r\n                  <!-- <div class=\"row\">\r\n                      <div *ngIf=\"showSelected\">\r\n                        <div class=\"row borderBtm\">\r\n                          <div class=\"col-md-2 col-xs-12\">\r\n                            <img width=\"50px\" height=\"50px\" src=\"https://s3.amazonaws.com/pwaimages/public/imgs/pwa_default_user_avatar.png\">\r\n                          </div>\r\n                          <div class=\"col-md-6 col-xs-12\"></div>\r\n                          <div>Test(Demo)</div>\r\n                        </div>\r\n                      </div>\r\n                    </div> -->\r\n\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n\r\n    </div>\r\n  </div>\r\n\r\n  \r\n</div>\r\n\r\n"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var _models_userdata_userdata_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/userdata/userdata.module */ "./src/app/models/userdata/userdata.module.ts");
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
    function ContestListComponent(httpService, router, data) {
        this.httpService = httpService;
        this.router = router;
        this.data = data;
        this.value = 0;
        this.title = 'JSON to Table Example';
        debugger;
        this.usermatch = this.data.storage["userMatches"];
        this.usercontest = this.data.storage["usercontests"];
        this.showSelected = false;
    }
    ContestListComponent.prototype.ngOnInit = function () {
        // this.httpService.get('./assets/teamDetails.json').subscribe(      
        //   data => {        
        //     this.allMatches = data as string [];	 // FILL THE ARRAY WITH DATA.
        //   },
        //   (err: HttpErrorResponse) => {console.log (err.message);}
        // );
    };
    ContestListComponent.prototype.click1 = function () {
        debugger;
        //this.showSelected=true;
        this.router.navigate(["usercontest"]);
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
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _models_userdata_userdata_module__WEBPACK_IMPORTED_MODULE_4__["UserdataModule"]])
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

module.exports = "\r\n.cricketorTeamList{ height: 100px; background: #c51d23;box-shadow: 2px 2px 2px #ccc; position: relative; padding: 10px 10px 23px 25px;}\r\n.cricketTeamTitle {\r\n    \r\n    width: 100%;\r\n    left: 0;\r\n    color: #fff;\r\n  \r\n    text-align: center;\r\n    \r\n}\r\n.arrowLeft{float: left; padding-top: 10px; color: #fff}\r\n.arrowLeft a{color: #fff;}\r\n.alert {\r\n    position: relative;\r\n    padding: 6px 1.25rem;\r\n    border: 1px solid transparent;\r\n    border-radius: .25rem;\r\n    margin-top: 20px;\r\n}\r\n.demo-tab-group {\r\n    border: 1px solid #e8e8e8;\r\n  }\r\n.demo-tab-content {\r\n    padding: 16px;\r\n  }\r\n/* Extra small devices (phones, 600px and down) */\r\n@media only screen and (max-width: 600px) {\r\n    .cricketorTeamList {height: 129px;}\r\n}\r\n"

/***/ }),

/***/ "./src/app/cricket-team/cricket-team.component.html":
/*!**********************************************************!*\
  !*** ./src/app/cricket-team/cricket-team.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n    <div class=\"row\">\n<div class=\"col-md-6 col-xs-12 cricketorTeamList\">\n    <a routerLink=\"/dashboard\">\n        <span class=\"fas fa-arrow-left arrowLeft\"></span>\n    </a>\n    <div class=\"cricketTeamTitle\">\n\n        <h4> CRICKET TEAM</h4>\n    </div>\n    <div class=\"col-md-12 col-xs-12 \">\n    <div class=\"alert alert-light\" role=\"alert\" *ngIf=\"matchInfo\">\n        <div class=\"row \">\n            <div class=\"col\">{{matchInfo.Name}}</div>\n            <div class=\"col-5\" style=\"color: #c51d23; text-align: center\">{{matchInfo.Date}}</div>\n            <div class=\"col\">\n                <a href=\"https://skillup.dream11.com/cricket/afgh-vs-ban-2nd-t20i-pre-match-analysis/\" class=\"float-right\">GURU</a>\n            </div>\n        </div>\n    </div>\n</div>\n</div>\n</div>\n<!-- <div class=\"container \"> -->\n    <div class=\"row\">\n        <div class=\"col-md-6 col-xs-12  bg-white\">\n        <p-tabView>\n             <p-tabPanel header=\"WK \" class=\"text-center\">\n                \n                 <strong>   PICK 1 WICKET-KEEPER</strong>\n                <div class=\" sorting-header \">          \n                    <p-tabView  class=\"subTab\">\n\n                        <p-tabPanel header=\"TEAM\">\n                    \n                            <app-team-creator [matchInfo]=\"matchInfo\" role=\"Wicketkeeper\"></app-team-creator>\n\n                        </p-tabPanel>\n                        <p-tabPanel header=\"PLAYER\">\n                            <app-team-creator [matchInfo]=\"matchInfo\"  role=\"Wicketkeeper\"></app-team-creator>\n                        </p-tabPanel>\n                        <p-tabPanel header=\"POINT\">\n                            <app-team-creator [matchInfo]=\"matchInfo\"  role=\"Wicketkeeper\"></app-team-creator>\n                        </p-tabPanel>\n                        <p-tabPanel header=\"CREDITS\">\n                            <app-team-creator [matchInfo]=\"matchInfo\"  role=\"Wicketkeeper\"></app-team-creator>\n                        </p-tabPanel>\n                    </p-tabView>\n                </div>\n            </p-tabPanel>\n            <p-tabPanel header=\"BAT \" class=\"text-center\">\n                  \n                    <strong>   PICK 3-5 BATSMEN</strong>    \n                    <p-tabView >\n\n                            <p-tabPanel header=\"TEAM\">\n                                <app-team-creator [matchInfo]=\"matchInfo\"  role=\"Batsman\"></app-team-creator>\n    \n                            </p-tabPanel>\n                            <p-tabPanel header=\"PLAYER\">\n                                <app-team-creator [matchInfo]=\"matchInfo\"  role=\"Batsman\"></app-team-creator>\n                            </p-tabPanel>\n                            <p-tabPanel header=\"POINT\">\n                                <app-team-creator [matchInfo]=\"matchInfo\"  role=\"Batsman\"></app-team-creator>\n                            </p-tabPanel>\n                            <p-tabPanel header=\"CREDITS\">\n                                <app-team-creator [matchInfo]=\"matchInfo\"  role=\"Batsman\"></app-team-creator>\n                            </p-tabPanel>\n                        </p-tabView>\n            </p-tabPanel>\n            <p-tabPanel header=\"AR \" class=\"text-center\">\n               \n                    <strong>   PICK 1-3 ALL-ROUNDERS</strong>\n                    <p-tabView  >\n\n                            <p-tabPanel header=\"TEAM\" >\n                                <app-team-creator [matchInfo]=\"matchInfo\"  role=\"AllRounder\"></app-team-creator>\n    \n                            </p-tabPanel>\n                            <p-tabPanel header=\"PLAYER\">\n                                <app-team-creator [matchInfo]=\"matchInfo\"  role=\"AllRounder\"></app-team-creator>\n                            </p-tabPanel>\n                            <p-tabPanel header=\"POINT\">\n                                <app-team-creator [matchInfo]=\"matchInfo\"  role=\"AllRounder\"></app-team-creator>\n                            </p-tabPanel>\n                            <p-tabPanel header=\"CREDITS\">\n                                <app-team-creator [matchInfo]=\"matchInfo\"  role=\"AllRounder\"></app-team-creator>\n                            </p-tabPanel>\n                        </p-tabView>\n             \n            </p-tabPanel>\n            <p-tabPanel header=\"BOWL \" class=\"text-center\">\n                 \n                    <strong>   PICK 3-5 BOWLERS</strong>\n                    <p-tabView >\n\n                            <p-tabPanel header=\"TEAM\">\n                                <app-team-creator [matchInfo]=\"matchInfo\"  role=\"Blower\"></app-team-creator>\n\n                            </p-tabPanel>\n                            <p-tabPanel header=\"PLAYER\">\n                                <app-team-creator [matchInfo]=\"matchInfo\"  role=\"Blower\"></app-team-creator>\n                            </p-tabPanel>\n                            <p-tabPanel header=\"POINT\">\n                                <app-team-creator [matchInfo]=\"matchInfo\"  role=\"Blower\"></app-team-creator>\n                            </p-tabPanel>\n                            <p-tabPanel header=\"CREDITS\">\n                                <app-team-creator  [matchInfo]=\"matchInfo\"  role=\"Blower\"></app-team-creator>\n                            </p-tabPanel>\n                        </p-tabView>\n              \n            </p-tabPanel>\n        </p-tabView>\n    \n            \n                 \n                  \n                  \n        </div>\n        \n   \n    </div>  \n\n    <div class=\"row\">\n            <div class=\"col-md-6 col-xs-12 lightGrey \"> \n                    <table class=\"table \">\n                            <thead>\n                              <tr>\n                                <th scope=\"col\">WK</th>\n                                <th scope=\"col\">BAT</th>\n                                <th scope=\"col\">AR</th>\n                                <th scope=\"col\">BOWL</th>\n                              </tr>\n                            </thead>\n                            <tbody>\n                              <tr>\n                                <td scope=\"row\"><span id=\"wicketkeeperCount\">0</span> </td>\n                                <td><span id=\"batsmanCount\" >0</span></td>\n                                <td><span id=\"allrounderCount\">0</span></td>\n                                <td><span id=\"bowlerCount\">0</span></td>\n                              </tr>\n                   \n                            </tbody>\n                          </table>\n\n\n\n\n             </div> \n            \n              \n           \n            <div class=\"col-md-6 col-xs-12 bg-grey  \">    \n                          \n        \n                <div class=\"row\">\n                    <div class=\"col-1 text-center\">\n                            <label class=\"text-white scoreFont text-center\"  style=\"margin-bottom: 0;\">0</label> <br/>YOR\n        \n                   </div>\n                    <div class=\"col-1 text-center\"> <span class=\"text-white scoreFont\">0</span> <br/>NOR</div>\n                    <div class=\"col-2 text-center\" style=\"border-right: 1px dashed;\"> <span class=\"scoreFont\"><span class=\"text-white\" id=\"lblCounter\">0</span>/11</span> <br/>PLAYERS</div>\n                    <div class=\"col-3 text-center\"><span  class=\"scoreFont\">100/100 </span> <br/> CREDITS LEFT</div>\n                   \n                <div class=\"col\">\n                    <a href=\"#\" routerLink=\"/createCaptain\" class=\"float-right\">  \n                         <button type=\"button\" class=\"btn btn-sm btn-outline-secondary \" style=\"margin-top: 12px\">NEXT</button>\n                        </a>              \n                </div>\n            </div>\n         \n      \n        </div>\n        </div>\n\n<!-- </div> -->\n\n\n</div>"

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
        var key = 'Item 1';
        var playerCnt = localStorage.getItem(key);
        //this.MatchInfo.PlayerCount = playerCnt;
        var head = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["Headers"]({ 'Content-Type': 'application/json' });
        this.http.get('http://idtp285/api/GetMatch/12').subscribe(function (data) {
            _this.matchInfo = data; // FILL THE ARRAY WITH DATA.      	
            console.log(_this.matchInfo);
        }, function (err) {
            //  console.log (err.message);
        });
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

module.exports = ".form-check-input{right:0;}\r\n\r\n.account-dialog__content{font-size:var(--font-large);color:#7b7a7a}\r\n\r\n.account-dialog__footer-content{padding:4px}\r\n\r\n.add-cash-dialog__tip{color:#7b7a7a;margin:24px 0 0}\r\n\r\n.add-cash-dialog__current-balance{color:#25ba38;padding:0 0 8px;border-bottom:1px solid #e8e8e8}\r\n\r\n.add-cash-dialog__balance{display:flex;justify-content:space-between;align-items:center}\r\n\r\n.add-cash-dialog__add-amount{padding:24px 0 12px}\r\n\r\n.align-center{display:flex;flex-direction:row;justify-content:center;align-items:center;width:100%}\r\n\r\n.app-toolbar{background-color:var(--primary-bg-color);color:var(--primary-fg-color);--icon-color:#fff}\r\n\r\n.app-toolbar-row{display:flex; flex-direction:row;justify-content:flex-start;align-items:center}\r\n\r\n.auth-dialog{max-width:380px;display:flex;align-items:center}\r\n\r\n.bg-overlay{background-color:rgba(0,0,0,.5);width:100%;height:100%;opacity:1;top:0;left:0;--animation-duration:400ms;--animation-timing:cubic-bezier(0.24,1.5,1,1);position:fixed}\r\n\r\n.bg-overlay--fade-in{-webkit-animation:bg-overlay-in-animation var(--animation-duration) var(--animation-timing) forwards;animation:bg-overlay-in-animation var(--animation-duration) var(--animation-timing) forwards}\r\n\r\n.bg-overlay--fade-out{-webkit-animation:bg-overlay-out-animation var(--animation-duration) var(--animation-timing) forwards;animation:bg-overlay-out-animation var(--animation-duration) var(--animation-timing) forwards}\r\n\r\n@-webkit-keyframes bg-overlay-in-animation{0%{opacity:0}to{opacity:1}}\r\n\r\n@keyframes bg-overlay-in-animation{0%{opacity:0}to{opacity:1}}\r\n\r\n@-webkit-keyframes bg-overlay-out-animation{0%{opacity:1}to{opacity:0}}\r\n\r\n@keyframes bg-overlay-out-animation{0%{opacity:1}to{opacity:0}}\r\n\r\n.bottom-nav{bottom:0;position:fixed;width:100%;background-color:#fff;box-shadow:0 1px 4px 0 rgba(0,0,0,.5)}\r\n\r\n.bottom-nav__element{color:var(--secondary-fg-color);padding:8px;text-decoration:none}\r\n\r\n.bottom-nav__content{display:flex;justify-content:space-between;text-align:center;text-transform:uppercase;font-size:var(--font-x-small);align-items:center;margin:0 8px}\r\n\r\n.bottom-nav__element--active{color:var(--secondary-btn-color)}\r\n\r\n.bottom-sheet{position:fixed;top:0;left:0;height:100%;width:100%;pointer-events:none;--animation-duration:300ms;--animation-timing:ease-out;--icon-color:#fff}\r\n\r\n.bottom-sheet--active{pointer-events:auto}\r\n\r\n.bottom-sheet-container{width:100%;max-height:80%;box-shadow:2px 0 14px 0 rgba(0,0,0,.5);background-color:#fff;margin:auto;position:absolute;left:0;bottom:0;right:0}\r\n\r\n.bottom-sheet-content{overflow-y:auto;flex-grow:1}\r\n\r\n.bottom-sheet-header{color:#fff;display:flex;flex-direction:row;align-items:center;flex-shrink:0}\r\n\r\n.bottom-sheet-title{flex:1;display:flex;flex-direction:column;justify-content:flex-end;padding:8px}\r\n\r\n.bottom-sheet-container--swipe-in{-webkit-animation:bottom-sheet-swipe-in-animation var(--animation-duration) var(--animation-timing) forwards;animation:bottom-sheet-swipe-in-animation var(--animation-duration) var(--animation-timing) forwards}\r\n\r\n.bottom-sheet-container--swipe-out{-webkit-animation:bottom-sheet-swipe-out-animation var(--animation-duration) var(--animation-timing) forwards;animation:bottom-sheet-swipe-out-animation var(--animation-duration) var(--animation-timing) forwards}\r\n\r\n@-webkit-keyframes bottom-sheet-swipe-in-animation{0%{-webkit-transform:translateY(104%);transform:translateY(104%)}to{-webkit-transform:translateY(0);transform:translateY(0)}}\r\n\r\n@keyframes bottom-sheet-swipe-in-animation{0%{-webkit-transform:translateY(104%);transform:translateY(104%)}to{-webkit-transform:translateY(0);transform:translateY(0)}}\r\n\r\n@-webkit-keyframes bottom-sheet-swipe-out-animation{0%{-webkit-transform:translateY(0);transform:translateY(0)}to{-webkit-transform:translateY(104%);transform:translateY(104%)}}\r\n\r\n@keyframes bottom-sheet-swipe-out-animation{0%{-webkit-transform:translateY(0);transform:translateY(0)}to{-webkit-transform:translateY(104%);transform:translateY(104%)}}\r\n\r\n@-webkit-keyframes bottom-sheet-fade-in-animation{0%{opacity:0}to{opacity:1}}\r\n\r\n@keyframes bottom-sheet-fade-in-animation{0%{opacity:0}to{opacity:1}}\r\n\r\n@-webkit-keyframes bottom-sheet-fade-out-animation{0%{opacity:1}to{opacity:0}}\r\n\r\n@keyframes bottom-sheet-fade-out-animation{0%{opacity:1}to{opacity:0}}\r\n\r\n.button-group{display:flex;flex-direction:row}\r\n\r\n.button-group .btn{flex:1 0 0;margin-right:8px;min-width:0}\r\n\r\n.button-group .btn:last-child{margin-right:0}\r\n\r\n.btn{-webkit-tap-highlight-color:transparent;background:none;border:0;cursor:pointer;height:28px;margin:0;padding:0 15px;text-decoration:none;text-transform:uppercase;text-align:center;border-radius:4px;font-family:inherit;font-size:var(--font-small);display:flex;justify-content:center;align-items:center}\r\n\r\n.btn:focus{outline:none}\r\n\r\n.btn--flat{--color:var(--primary-btn-color);color:var(--primary-btn-color);background:none;text-align:center;min-width:88px;padding:10px 8px;height:auto}\r\n\r\n.btn--round{border-radius:50%;padding:0;border:1px solid;width:30px;height:30px}\r\n\r\n.btn--large{height:var(--large-button-height)}\r\n\r\n.btn--icon{height:var(--button-height);width:var(--button-height);display:flex;color:inherit;border:0;padding:0;margin:0;background-color:transparent;justify-content:center;align-items:center}\r\n\r\n.btn--raised{min-width:88px;color:var(--primary-fg-color);background-color:var(--primary-btn-color)}\r\n\r\n.btn--disable{opacity:.5;cursor:not-allowed}\r\n\r\n.btn--white{background:#fff;color:var(--primary-btn-color)}\r\n\r\n.btn--orange{color:#fff;border-color:#f6a623;background:#f6a623}\r\n\r\n.btn--blue{color:#fff;border-color:#4990e2;background:#4990e2}\r\n\r\n.btn--text-grey{color:#888;border-color:#888}\r\n\r\n.btn--bordered{border:1px solid var(--color);--color:var(--primary-btn-color);color:var(--primary-btn-color);background:none;text-align:center;min-width:88px}\r\n\r\n.btn--green{color:#fff;border-color:#2db23e;background:#2db23e}\r\n\r\n.btn--thin{padding:0;min-width:0}\r\n\r\n.btn--small{min-width:60px;height:25px}\r\n\r\n.btn--bordered--white{border-color:#fff}\r\n\r\n.text-color--white{color:#fff}\r\n\r\n.btn--background--white{background-color:#fff}\r\n\r\n.btn--grey-bordered{border-color:#d6d6d6}\r\n\r\n.new-button:focus{outline:none}\r\n\r\n.card{background-color:#fff;margin:8px;box-shadow:0 1px 2px 0 rgba(0,0,0,.3);border-radius:2px;overflow:hidden}\r\n\r\n.carousel{overflow:hidden}\r\n\r\n.carousel__content{transition:all .3s 0ms}\r\n\r\n.carousel__content--moving{transition:none;will-change:transform}\r\n\r\n.carousel__dot-container{display:flex;justify-content:center}\r\n\r\n.carousel__dot{--size:6px;height:var(--size);width:6px;background-color:#d6d6d6;border-radius:50%;margin:8px 4px}\r\n\r\n.carousel__dot--active{background-color:#9b9b9b}\r\n\r\n.carousel__dot--ghost{background-color:transparent}\r\n\r\n.check-box--selected{color:#3b5998}\r\n\r\n.check-box--unselected{color:#d6d6d6}\r\n\r\n.choose-team{padding:105px 0 55px}\r\n\r\n.choose-team__title{text-align:center;padding:8px 0}\r\n\r\n.choose-team__footer{display:flex;justify-content:center;align-content:center;align-items:center;background-color:var(--primary-btn-color);bottom:0;padding:8px;position:fixed;width:100%}\r\n\r\n.contest-code-dialog__content{color:#7b7a7a}\r\n\r\n@-webkit-keyframes contest-footer-animate-in{0%{-webkit-transform:translateY(100%);transform:translateY(100%)}to{-webkit-transform:translateY(0);transform:translateY(0)}}\r\n\r\n@keyframes contest-footer-animate-in{0%{-webkit-transform:translateY(100%);transform:translateY(100%)}to{-webkit-transform:translateY(0);transform:translateY(0)}}\r\n\r\n.contest-join-confirm-dialog__balance-current{border-bottom:1px solid #e8e8e8;padding:0 0 8px;color:#25ba38;display:flex;justify-content:space-between;align-items:baseline}\r\n\r\n.contest-join-confirm-dialog__balance-total{padding:8px 0 0;color:#333232;display:flex;justify-content:space-between;align-items:baseline}\r\n\r\n.contest-join-confirm-dialog__terms{margin-top:24px;color:#7b7a7a;font-size:var(--font-x-small)}\r\n\r\n.contest-join-confirm-dialog__balance-amount{font-size:var(--font-large)}\r\n\r\n.contest-join-confirm-dialog__terms-link{font-size:var(--font-x-small);text-decoration:none}\r\n\r\n.contest-joiner__create-team-confirmation-content{color:#7b7a7a}\r\n\r\n.contest-card__in-progress{box-shadow:0 1px 2px 0 rgba(0,0,0,.3);border-radius:4px;margin:8px;text-decoration:none;color:var(--color);display:block}\r\n\r\n.contest-card__in-progress__row-content{display:flex;justify-content:space-between;align-items:center;padding:8px;border-bottom:1px solid #e6e6e6;background:#fff}\r\n\r\n.contest-card__in-progress__team-info-footer{background:#ebf0fc}\r\n\r\n.contest-card__row-item{background-color:#fff;box-shadow:0 0 2px 0 rgba(0,0,0,.2)}\r\n\r\n.contest-card__row-item--selected{box-shadow:5px 2px 20px 1px rgba(0,0,0,.5);margin:16px 0}\r\n\r\n.contest-card__row{align-items:center;display:flex;justify-content:space-between;overflow:hidden;padding:8px;min-height:65px}\r\n\r\n.contest-card__team-winner-column{color:#7b7a7a;display:flex;flex-direction:column;flex-grow:1;flex-wrap:wrap;justify-content:center;align-items:center;font-size:var(--font-small)}\r\n\r\n.contest-card__progressbar{background-color:#d6d6d6;border-radius:2px;height:2px;margin:4px 0;width:80%}\r\n\r\n.contest-card__progressbar-wrapper{width:100%;flex-direction:column;align-items:center;display:flex}\r\n\r\n.contest-card__progressbar--complete{background-image:linear-gradient(90deg,#f59e23,#f13535);height:2px;-webkit-animation:contest-card__progressbar--complete--animate-in .3s linear;animation:contest-card__progressbar--complete--animate-in .3s linear;-webkit-transform-origin:left;transform-origin:left;max-width:100%}\r\n\r\n@-webkit-keyframes contest-card__progressbar--complete--animate-in{0%{-webkit-transform:scaleX(0);transform:scaleX(0)}to{-webkit-transform:scaleX(1);transform:scaleX(1)}}\r\n\r\n@keyframes contest-card__progressbar--complete--animate-in{0%{-webkit-transform:scaleX(0);transform:scaleX(0)}to{-webkit-transform:scaleX(1);transform:scaleX(1)}}\r\n\r\n.contest-card__winning-amount{flex:0 0 70px;font-size:var(--font-medium)}\r\n\r\n.contest-card__team-winner-column__bottom-section{align-items:center;display:flex;color:var(--primary-btn-color)}\r\n\r\n.contest-card__tnc{color:#9b9b9b;display:flex;flex-direction:column;padding:0 16px}\r\n\r\n.contest-card__tnc--icon{align-items:center;border-radius:8px;color:#fff;display:flex;height:15px;justify-content:center;margin:0 4px 0 0;text-align:center;width:15px}\r\n\r\n.contest-card__win-conf{background-color:#68a9c7}\r\n\r\n.contest-card__multi-entry{background-color:#67cba5}\r\n\r\n.contest-card__tnc-row{align-items:center;display:flex;padding:8px 0;font-size:var(--font-x-small)}\r\n\r\n.contest-card__tnc-row:not(:first-of-type){padding:0 0 8px}\r\n\r\n.contest-card__loader{display:flex;flex-direction:column;height:160px;justify-content:center;margin:auto;width:30px}\r\n\r\n.contest-card__winnings-title{color:#7b7a7a;font-size:var(--font-small)}\r\n\r\n.contest-card__winner-card{display:flex;flex-wrap:nowrap;justify-content:flex-start;overflow-x:auto;overflow-y:hidden;padding:8px 0;width:100%}\r\n\r\n.contest-card__winner-row{box-shadow:0 1px 2px 0 rgba(0,0,0,.2);flex:1 0 auto;flex-direction:column;height:50px;margin:0 0 0 8px;padding:4px;min-width:80px}\r\n\r\n.contest-card__winner-row__section--title{font-size:var(--font-small);margin:1px 0 0 2px}\r\n\r\n.contest-card__winner-row__section{font-size:var(--font-small);margin:6px 0 0 2px}\r\n\r\n.contest-card__winner-row:last-of-type{margin-right:8px}\r\n\r\n.contest-card__wining-breakup{padding:0 16px}\r\n\r\n.contest-card__leaderboard{align-items:center;border-top:1px solid #e8e8e8;color:#7b7a7a;display:flex;justify-content:space-between;padding:8px 0 8px 16px;text-transform:uppercase;text-decoration:none}\r\n\r\n.contest-card__wining-breakup__title{color:#7b7a7a;font-size:var(--font-x-small)}\r\n\r\n.contest-card__winner-row:first-of-type{color:#f5a623}\r\n\r\n.contest-card__winner-row:nth-of-type(2){color:#63cda6}\r\n\r\n.contest-card__winner-row:nth-of-type(3){color:#478eaf}\r\n\r\n.contest-card__rank{color:#333232}\r\n\r\n.contest-card__joined{background-color:#f2fff4}\r\n\r\n.contest-card__free-join-btn__prize-money{text-decoration:line-through;text-align:center;color:#9b9b9b;margin-bottom:2px}\r\n\r\n.contest-card__winner-row__first{display:flex;justify-content:space-between}\r\n\r\n.contest-card__content--open{color:#7b7a7a;font-size:var(--font-small);padding:16px 8px}\r\n\r\n.contest-card__rank-dip{color:#de4d3b}\r\n\r\n.contest-card__rank-rise{color:#2db23e}\r\n\r\n.contest-card__card-points{color:#4a4a4a;font-size:var(--font-x-small)}\r\n\r\n.contest-card__card__cta-left{display:flex;margin:0 4px;flex-direction:column}\r\n\r\n.contest-card__card__cta-right{display:flex;align-items:center}\r\n\r\n.contest-card__card__cta-rank{margin:0 8px}\r\n\r\n.contest-card__card__cta-icon{color:#9b9b9b}\r\n\r\n.contest-card__card__column-content{display:flex;flex-direction:column;align-items:center}\r\n\r\n.contest-card__card__column-title{font-size:var(--font-x-small);color:#9b9b9b;text-transform:uppercase;margin:4px}\r\n\r\n.cash-contest-card__joined{background-color:#f2fff4}\r\n\r\n.create-team-tabs{display:flex;justify-content:center;width:100%;margin:auto}\r\n\r\n.create-team-tabs__item{text-align:center}\r\n\r\n.create-team-tabs__img{--img-size:46px;width:var(--img-size);height:var(--img-size);border-radius:50%;background-repeat:no-repeat;background-size:cover;border:2px solid #eee}\r\n\r\n.create-team-tabs__img--selected{border:2px solid #405892}\r\n\r\n.create-team-tabs__count--approve{background:#24ba38}\r\n\r\n.create-team-tabs__count--reject{background:#f5af23}\r\n\r\n.create-team-tabs__count--default{background:#9b9b9b}\r\n\r\n.create-team-tabs__img--wk{background-image:url(\"/public/imgs/wk-img.png\")}\r\n\r\n.create-team-tabs__img--bat{background-image:url(\"/public/imgs/bt-img.png\")}\r\n\r\n.create-team-tabs__img--ar{background-image:url(\"/public/imgs/ar-img.png\")}\r\n\r\n.create-team-tabs__img--bwl{background-image:url(\"/public/imgs/bw-img.png\")}\r\n\r\n.create-team-role-selector{--player-card-height:70px;--animation-duration:200ms;--animation-timing:cubic-bezier(0.14,1.06,1,0.99)}\r\n\r\n.create-team__toolbar{display:flex;flex-direction:row;justify-content:center;align-items:center}\r\n\r\n.create-team-role-selector__title-box{background-color:#fff;padding:16px;color:var(--color);text-align:center;margin:auto}\r\n\r\n.create-team-role-selector{margin:auto}\r\n\r\n.create-team-role-selector__title{text-transform:uppercase}\r\n\r\n.create-team-role-selector__subtitle{color:#7b7a7a;font-size:var(--font-small);margin:4px 0 0}\r\n\r\n.create-team-role-selector__player-list-title{border-bottom:1px solid hsla(0,0%,48%,.11);padding:4px;font-size:var(--font-small)}\r\n\r\n.create-team-role-selector__player-card{--animation-duration:400ms;--animation-timing:cubic-bezier(0.24,1.5,1,1)}\r\n\r\n.create-team-role-selector__player-card:last-child{border-bottom:0}\r\n\r\n.create-team-role-selector__player-card-avatar{flex:0 0 46px;margin-right:8px}\r\n\r\n.create-team-role-selector__player-card-points{color:#7b7a7a;white-space:nowrap}\r\n\r\n.create-team-role-selector__player-card-info-wrapper{flex:1 0 0;padding:0 8px}\r\n\r\n.create-team-role-selector__footer__footer-action-container{background-color:#3659a5;box-shadow:var(--box-shadow-light);display:flex;padding:8px;justify-content:center}\r\n\r\n.create-team-role-selector__footer__footer-btn{flex-shrink:0}\r\n\r\n.create-team__role-selector__button-element{margin:0 4px}\r\n\r\n.create-team__role-selector__role-img{height:30px;width:30px;background-size:contain;background-repeat:no-repeat;margin:0 4px;transition:all var(--animation-duration) var(--animation-timing)}\r\n\r\n.create-team__role-selector__role-img--fade-in{-webkit-animation:enter-animation var(--animation-duration) var(--animation-timing) forwards;animation:enter-animation var(--animation-duration) var(--animation-timing) forwards}\r\n\r\n.create-team__role-selector__role-img--hide{display:none}\r\n\r\n@-webkit-keyframes enter-animation{0%{opacity:0;-webkit-transform:scaleX(.5) translateY(50%);transform:scaleX(.5) translateY(50%)}to{opacity:1;-webkit-transform:scaleX(1) translate(0);transform:scaleX(1) translate(0)}}\r\n\r\n@keyframes enter-animation{0%{opacity:0;-webkit-transform:scaleX(.5) translateY(50%);transform:scaleX(.5) translateY(50%)}to{opacity:1;-webkit-transform:scaleX(1) translate(0);transform:scaleX(1) translate(0)}}\r\n\r\n.create-team-role-selector__player-name{white-space:nowrap}\r\n\r\n.create-team-role-selector__role-selector-icon{height:var(--icon-size);width:var(--icon-size);border-radius:50%;border:1px solid #dcdcdc}\r\n\r\n.create-team__team-selector{--player-card-height:70px}\r\n\r\n.create-team__team-selector__tabs-help-container{background-color:#fff;padding:8px;display:flex;justify-content:center;color:#000}\r\n\r\n.create-team__team-selector__player-lists{display:flex}\r\n\r\n.create-team__team-selector__player-list{flex:1 0 0}\r\n\r\n.create-team__team-selector__player-card--selected{background-color:#fff7ec}\r\n\r\n.create-team__team-selector__player-card__cell{display:flex;align-items:center;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}\r\n\r\n.create-team__team-selector__player-card__cell__col-team{flex-basis:70px}\r\n\r\n.create-team__team-selector__player-card__cell__col-player{flex-grow:1;flex-basis:80px}\r\n\r\n.create-team__team-selector__player-card__cell__col-credit{flex-basis:44px;justify-content:center}\r\n\r\n.create-team__team-selector__player-card__cell__col-player__header{margin-bottom:4px}\r\n\r\n.create-team__team-selector__player-card__cell__col-point{flex-basis:80px;justify-content:flex-end}\r\n\r\n.create-team__team-selector__player-card__cell__team-selector-icon{--icon-size:var(--font-large);background-color:#24ba38;border-radius:50%;color:var(--primary-fg-color);-ms-grid-row-align:center;align-self:center;transition:-webkit-transform .5s ease;transition:transform .5s ease;transition:transform .5s ease, -webkit-transform .5s ease}\r\n\r\n.create-team__team-selector__player-card__cell__team-selector-icon--selected{-webkit-transform:rotate(315deg);transform:rotate(315deg);background-color:orange}\r\n\r\n.create-team__team-selector__footer{position:fixed;bottom:0;width:100%;display:flex;flex-direction:column;justify-content:flex-end}\r\n\r\n.create-team__team-selector__footer-action-container{align-items:center;background-color:#323232;color:var(--primary-fg-color);display:flex;padding:8px;z-index:1;justify-content:space-between}\r\n\r\n.create-team__player-profile__footer{background:#3659a5;padding:8px;justify-content:center;display:flex;position:fixed;width:100%;bottom:0}\r\n\r\n.create-team__team-selector-table-body-row{background-color:#fff;border-bottom:1px solid #e8e8e8;display:flex;min-height:70px;padding:12px;transition:background-color .3s cubic-bezier(0,2,1,1)}\r\n\r\n.create-team{background-color:var(--primary-fg-color)}\r\n\r\n.currency-amount{margin-left:4px}\r\n\r\n@font-face{font-family:D11 Icon;src:url(\"/public/fonts/d11-fonts.eot?3fapne\");src:url(\"/public/fonts/d11-fonts.eot?3fapne#iefix\") format(\"embedded-opentype\"),url(\"/public/fonts/d11-fonts.ttf?3fapne\") format(\"truetype\"),url(\"/public/fonts/d11-fonts.woff?3fapne\") format(\"woff\"),url(\"/public/fonts/d11-fonts.svg?3fapne#icomoon\") format(\"svg\");font-weight:400;font-style:normal}\r\n\r\n.d11-icon{font-family:D11 Icon!important;speak:none;font-style:normal;font-weight:400;font-variant:normal;text-transform:none;line-height:1;letter-spacing:0;-webkit-font-feature-settings:\"liga\";-ms-font-feature-settings:\"liga\" 1;font-feature-settings:\"liga\";-webkit-font-variant-ligatures:discretionary-ligatures;font-variant-ligatures:discretionary-ligatures;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;color:var(--currency-font-color)}\r\n\r\n.date-selector{display:flex}\r\n\r\n.date-selector-input{background:none;border:0;color:inherit;font-family:inherit;font-size:var(--font-large);outline:none;padding:0;width:100%;text-align:center}\r\n\r\n.date-selector-unit{border-right:.5px solid #ddd}\r\n\r\n.date-selector-unit-title{color:var(--secondary-fg-color);margin-bottom:4px;text-align:center;font-size:var(--font-small)}\r\n\r\n.date-selector--no-border{border-right:none}\r\n\r\n.dialog-body{padding:20px 24px 24px;overflow:scroll;-webkit-overflow-scrolling:touch}\r\n\r\n.dialog-footer-actions{border-top:1px solid #e6e6e6;padding:8px}\r\n\r\n.dialog-header{padding:24px 24px 0;text-transform:uppercase;color:#333232}\r\n\r\n.dialog{position:fixed;top:0;left:0;height:100%;width:100%;display:flex;justify-content:center;align-items:center;pointer-events:none;--animation-duration:300ms;--animation-timing:cubic-bezier(0,0,0,1)}\r\n\r\n.dialog--active{pointer-events:auto}\r\n\r\n.dialog-content{background-color:#fff;border-radius:2px;width:90%;box-shadow:0 10px 32px 0 rgba(0,0,0,.5);z-index:1;max-width:420px}\r\n\r\n.dialog-content--enter{-webkit-animation:dialog-content-enter-animation var(--animation-duration) var(--animation-timing) forwards;animation:dialog-content-enter-animation var(--animation-duration) var(--animation-timing) forwards}\r\n\r\n.dialog-content--exit{-webkit-animation:dialog-content-exit-animation var(--animation-duration) var(--animation-timing) forwards;animation:dialog-content-exit-animation var(--animation-duration) var(--animation-timing) forwards}\r\n\r\n@-webkit-keyframes dialog-content-exit-animation{0%{-webkit-transform:scale(1) translateY(0);transform:scale(1) translateY(0);opacity:1}to{-webkit-transform:scale(.5) translateY(50%);transform:scale(.5) translateY(50%);opacity:0}}\r\n\r\n@keyframes dialog-content-exit-animation{0%{-webkit-transform:scale(1) translateY(0);transform:scale(1) translateY(0);opacity:1}to{-webkit-transform:scale(.5) translateY(50%);transform:scale(.5) translateY(50%);opacity:0}}\r\n\r\n@-webkit-keyframes dialog-content-enter-animation{0%{-webkit-transform:scale(.5) translateY(50%);transform:scale(.5) translateY(50%);opacity:0}to{-webkit-transform:scale(1) translateY(0);transform:scale(1) translateY(0);opacity:1}}\r\n\r\n@keyframes dialog-content-enter-animation{0%{-webkit-transform:scale(.5) translateY(50%);transform:scale(.5) translateY(50%);opacity:0}to{-webkit-transform:scale(1) translateY(0);transform:scale(1) translateY(0);opacity:1}}\r\n\r\n.fantasy-scorecard__match-card{align-items:center;background:#fff;border-bottom:1px solid #e8e8e8;display:flex;justify-content:space-between;padding:8px;min-height:60px;width:100%;max-width:720px;position:fixed;box-shadow:0 1px 3px 0 rgba(0,0,0,.3)}\r\n\r\n.fantasy-scorecard{display:flex;flex-direction:column;overflow:hidden}\r\n\r\n.fantasy-scorecard__team-flag{margin-right:8px;max-width:40px;max-height:40px}\r\n\r\n.fantasy-scorecard__teams{display:flex;justify-content:space-between;color:var(--color)}\r\n\r\n.fantasy-scorecard__team-detail{align-items:center;display:flex;white-space:nowrap;flex:1 0 0;min-width:100px}\r\n\r\n.fantasy-scorecard__table-container{overflow:scroll;padding-top:65px;-webkit-overflow-scrolling:touch}\r\n\r\n.fantasy-scorecard__table{border-collapse:collapse}\r\n\r\n.fantasy-scorecard__cell{padding:16px 8px;font-size:12px}\r\n\r\n.fantasy-scorecard__table-header{background-color:#e8e8e8;font-size:14px}\r\n\r\n.fantasy-scorecard__row{border-bottom:1px solid #e8e8e8}\r\n\r\n.fantasy-scorecard__header-cell{padding:8px;white-space:nowrap}\r\n\r\n.fantasy-scorecard__loader{--button-height:24px;height:var(--button-height);margin-top:75px}\r\n\r\n.fantasy-scorecard__match-status{color:#f5a623}\r\n\r\n.form-field-label{color:var(--secondary-fg-color);font-size:var(--font-small)}\r\n\r\n.form-field-link{color:inherit;display:flex;text-decoration:none}\r\n\r\n.form-field-link-content{display:flex;justify-content:space-between;padding:8px 0;align-items:center;width:100%;white-space:pre-wrap}\r\n\r\n.form-field{padding:8px;margin-top:8px}\r\n\r\n.form-field--disabled{opacity:.5}\r\n\r\n.form-field-underline{display:block}\r\n\r\n.form-field-underline-default{stroke:#ccc;stroke-width:.5}\r\n\r\n.form-field-underline-focus{stroke:#000;stroke-width:1;-webkit-transform:scaleX(0);transform:scaleX(0);-webkit-transform-origin:center;transform-origin:center;transition:-webkit-transform .3s cubic-bezier(.26,.61,.46,1.08);transition:transform .3s cubic-bezier(.26,.61,.46,1.08);transition:transform .3s cubic-bezier(.26,.61,.46,1.08), -webkit-transform .3s cubic-bezier(.26,.61,.46,1.08)}\r\n\r\n.form-field-underline-focus--active{-webkit-transform:scaleX(1);transform:scaleX(1)}\r\n\r\n.form-field-underline-error{stroke:var(--primary-bg-color)}\r\n\r\n.form-field-error{color:var(--primary-bg-color);font-size:var(--font-x-small);height:14px}\r\n\r\n.form-field-underline-default--disabled{stroke-dasharray:1}\r\n\r\n.gender-selector{padding:8px}\r\n\r\n.gender-options{display:flex}\r\n\r\n.gender-options-item{flex-basis:50%}\r\n\r\n.global-leaderboard-teams__main{height:100%;width:100%;overflow:scroll;-webkit-overflow-scrolling:touch}\r\n\r\n.global-leaderboard-teams__header{background-color:#e8e8e8;box-shadow:0 1px 2px 0 rgba(0,0,0,.2);padding:4px;display:flex;justify-content:space-between;text-transform:uppercase}\r\n\r\n.global-leaderboard-teams__header__title{margin:0 8px}\r\n\r\n.global-leaderboard-teams__team{display:flex;justify-content:space-between;padding:8px;align-items:center;border-bottom:1px solid #e8e8e8;min-height:70px}\r\n\r\n.global-leaderboard-teams__team-details{display:flex;align-items:center}\r\n\r\n.global-leaderboard-teams__team-details__avatar{width:36px;height:36px;border-radius:50%}\r\n\r\n.global-leaderboard-teams__team-details__info{margin:8px}\r\n\r\n.global-leaderboard-teams__team-rank{margin:0 4px}\r\n\r\n.global-leaderboard-teams__team-details__info__point{margin:4px 0;font-size:10px;text-transform:uppercase;color:#9b9a9b}\r\n\r\n.global-leaderboard-teams__team--is-user-team{background-color:#e5f1ff}\r\n\r\n.global-leaderboard-teams{height:100%;overflow:hidden}\r\n\r\n.global-leaderboard-home__item-container{text-decoration:none;color:#000}\r\n\r\n.global-leaderboard-teams__list{padding-bottom:48px}\r\n\r\n.horizontal-items{display:flex;overflow-x:auto}\r\n\r\n.horizontal-items-element{padding:8px;margin-left:-8px}\r\n\r\n.horizontal-items-element:first-child{margin-left:0}\r\n\r\n.input-box__content{border:1px solid #d6d6d6;border-radius:4px;margin:8px 0;background:#f6f6f6;display:flex;padding:8px;align-items:center}\r\n\r\n.input-box__input{width:100%;background:#f6f6f6;border:0;outline:none}\r\n\r\n.input-box__clear-btn{--icon-size:14px;--icon-color:#7b7a7a}\r\n\r\n.input-field-container{position:relative;display:flex}\r\n\r\n.input-field{background:none;width:100%;border:0;outline:none;padding:8px 0;font-family:inherit;font-size:inherit;color:inherit;font-weight:inherit}\r\n\r\n.input-field__clear-btn{--icon-size:14px;--icon-color:#7b7a7a;background-color:#a1a2a7;border-radius:50%;width:var(--icon-size);height:var(--icon-size);margin-top:8px;color:#fff}\r\n\r\n.large-loader{height:100%;width:100%;display:flex;justify-content:center;align-items:center}\r\n\r\n.large-loader-icon{height:var(--button-height);width:var(--button-height)}\r\n\r\n.lazy-loader{position:relative}\r\n\r\n.lazy-loader--loaded{position:static}\r\n\r\n.lazy-loader__placeholder{height:100%;width:100%;position:absolute;top:0;left:0;display:flex;justify-content:center;align-items:center}\r\n\r\n.lazy-loader__img{height:100%;opacity:0;transition:opacity .3s linear;width:100%;-o-object-fit:cover;object-fit:cover}\r\n\r\n.lazy-loader__img--loaded{opacity:1}\r\n\r\n.leaderboard{display:flex;font-size:16px;justify-content:space-between;padding:10px}\r\n\r\n.leaderboard__icon{color:#9b9b9b}\r\n\r\n.leaderboard__header{background-color:#e8e8e8;display:flex;justify-content:space-between;padding:5px 10px}\r\n\r\n.leaderboard__players-container{border-bottom:1px solid #e8e8e8}\r\n\r\n.leaderboard__players{align-items:center;display:flex;padding:10px}\r\n\r\n.leaderboard__players__user{background-color:#ddedff}\r\n\r\n.leaderboard__players__image{width:36px;height:36px;border-radius:50%;box-shadow:0 1px 2px 0 rgba(0,0,0,.2)}\r\n\r\n.leaderboard__players__user-information{display:flex;flex-direction:column;flex-grow:1;padding-left:20px}\r\n\r\n.leaderboard__players__user-information__points{font-size:12px;padding-top:4px;display:flex}\r\n\r\n.leaderboard__players__user-information__points__label{color:#9b9b9b;padding-left:4px}\r\n\r\n.leaderboard__players__rank-container{display:flex;justify-content:space-between;align-items:center}\r\n\r\n.leaderboard__players__rank{display:flex;flex-direction:column;align-items:flex-end}\r\n\r\n.leaderboard__players__rank-change-none{padding:7px}\r\n\r\n.leaderboard__players__rank-change-inc{color:#2eb13e}\r\n\r\n.leaderboard__players__rank-change-dec{color:#de4d3b}\r\n\r\n.leaderboard__players__rank-first{color:#f59a23;display:flex;flex-direction:column;align-items:flex-end}\r\n\r\n.leaderboard__players__winner-message{color:#f59a23;display:flex;padding:0 0 8px 66px;font-size:12px}\r\n\r\n.leaderboard__players__winner-message__icon{height:12px;margin:0 4px}\r\n\r\n.leaderboard__players-container__user-team{background-color:#e5f1ff}\r\n\r\n.leaderboard__load-more{display:flex;align-items:center;justify-content:center;padding-top:10px}\r\n\r\n.leaderboard__pagination{display:flex;height:var(--button-height);justify-content:space-between;border:1px solid var(--primary-btn-color);border-radius:4px;margin:12px}\r\n\r\n.leaderboard__pagination--cta{display:flex;height:100%;color:var(--secondary-fg-color);align-items:center}\r\n\r\n.leaderboard__pagination--info{display:flex;align-items:center;justify-content:space-between}\r\n\r\n.leaderboard__pagination__text{color:var(--primary-btn-color)}\r\n\r\n.leaderboard__no-teams{text-align:center;margin:8px}\r\n\r\n.link-row__list-row{align-items:center;border-bottom:1px solid #e8e8e8;display:flex;flex-direction:row;height:60px}\r\n\r\n.link-row__list-col--img{align-items:center;display:flex;justify-content:center;width:70px}\r\n\r\n.link-row__list-col--wide{flex-grow:1}\r\n\r\n.link-row__navigation-icon{color:#9b9b9b}\r\n\r\n.loader-path{-webkit-animation:loader-stroke 1.5s ease-in-out infinite;animation:loader-stroke 1.5s ease-in-out infinite;stroke-dasharray:1,162;stroke-dashoffset:0;stroke-linecap:round;stroke:var(--loader-color,rgba(0,0,0,.5));stroke-width:6}\r\n\r\n.loader-circular{-webkit-animation:loader-rotate 2s linear infinite;animation:loader-rotate 2s linear infinite}\r\n\r\n@-webkit-keyframes loader-rotate{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}\r\n\r\n@keyframes loader-rotate{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}\r\n\r\n@-webkit-keyframes loader-stroke{0%{stroke-dasharray:1,162;stroke-dashoffset:0}50%{stroke-dasharray:162,162;stroke-dashoffset:-80}to{stroke-dasharray:162,162;stroke-dashoffset:-162}}\r\n\r\n@keyframes loader-stroke{0%{stroke-dasharray:1,162;stroke-dashoffset:0}50%{stroke-dasharray:162,162;stroke-dashoffset:-80}to{stroke-dasharray:162,162;stroke-dashoffset:-162}}\r\n\r\n.loading-dialog{display:flex;align-items:center}\r\n\r\n.loading-dialog__loader{height:24px;width:24px;margin-right:1em}\r\n\r\n.low-balance-dialog__title{text-transform:uppercase;color:#333232}\r\n\r\n.low-balance-dialog__balance{display:flex;justify-content:space-between;align-items:center}\r\n\r\n.low-balance-dialog__balance-current{color:#b81c21;padding:0 0 8px;border-bottom:1px solid #e8e8e8}\r\n\r\n.low-balance-dialog__balance-joining{padding:8px 0 0;color:#333232}\r\n\r\n.low-balance-dialog__bonus-text{font-size:var(--font-small);color:#9b9b9b;padding:8px 0}\r\n\r\n.my-profile__tool-tip{background-color:#e4f0ff;display:flex;margin:8px;border-radius:4px;flex-direction:column}\r\n\r\n.my-profile__tool-tip--arrow{height:20px;width:20px;-webkit-transform:rotate(45deg);transform:rotate(45deg);margin:0 0 -4px 8px;background-color:#e4f0ff;align-self:flex-start;z-index:-1}\r\n\r\n.my-profile,.my-profile__tool-tip--content{display:flex;flex-direction:column}\r\n\r\n.my-profile__tool-tip--content{justify-content:space-around;margin:8px}\r\n\r\n.my-profile__footer{position:fixed;bottom:0;width:100%;padding:8px;display:flex;background:#3659a5}\r\n\r\n.my-profile__container{margin-bottom:var(--button-height)}\r\n\r\n.my-profile__line{border-bottom:.25px solid #ccc;margin-top:8px;padding:8px}\r\n\r\n.my-profile__shell{margin:8px 0 16px;padding:8px;color:var(--secondary-fg-color);font-size:var(--font-small)}\r\n\r\n.my-profile__margin{margin-top:8px}\r\n\r\n.my-teams{margin:auto}\r\n\r\n.my-teams__body{padding:105px 0 55px}\r\n\r\n.my-teams__title{padding:8px 0;min-height:30px;text-align:center}\r\n\r\n.my-teams__footer,.my-teams__title{display:flex;justify-content:center}\r\n\r\n.my-teams__footer{align-content:center;align-items:center;background-color:var(--primary-btn-color);bottom:0;position:fixed;width:100%;padding:8px;margin:auto}\r\n\r\n.my-teams__team{background-color:#fff;box-shadow:0 1px 2px 0 rgba(0,0,0,.3);margin:8px;overflow:hidden;border-radius:2px;border:1px solid transparent}\r\n\r\n.my-teams__team__top-section{justify-content:space-between;padding:8px}\r\n\r\n.my-teams__bottom-section,.my-teams__team-selector,.my-teams__team__top-section{display:flex;align-items:center}\r\n\r\n.my-teams__bottom-section{justify-content:space-between;border-top:1px solid #e8e8e8}\r\n\r\n.my-teams__role-entity{display:flex;flex-direction:column;justify-content:baseline;text-align:left;width:50%;padding:8px;min-height:70px;white-space:nowrap;overflow:hidden}\r\n\r\n.my-teams__role-entity__player-name{overflow:hidden;text-overflow:ellipsis}\r\n\r\n.my-teams__role-entity:last-child{border-right:0}\r\n\r\n.my-teams__role-entity{border-right:1px solid #e8e8e8}\r\n\r\n.my-teams__role-entity__title{font-size:var(--font-small);margin-bottom:4px}\r\n\r\n.my-teams__role-entity--even{color:#f5af23}\r\n\r\n.my-teams__role-entity--odd{color:#4a90e2}\r\n\r\n.my-teams--selected{border-color:#3b5998}\r\n\r\n.my-teams--already-joined{border-color:rgba(74,96,141,.25)}\r\n\r\n.my-teams__top-section__btn-container{display:flex;min-height:33px;align-items:center}\r\n\r\n.my-teams__already-joined__copy{margin:0 4px;color:#2db23e;text-transform:uppercase}\r\n\r\n.my-teams__team-selector__already-joined{opacity:.6;display:flex;align-items:center}\r\n\r\n.my-teams__bottom-section__already-joined{opacity:.6}\r\n\r\n.my-teams__edit-button{text-decoration:none}\r\n\r\n.menu__link{text-decoration:none;color:var(--color)}\r\n\r\n.menu__link:last-child{border-bottom:1px solid #e8e8e8}\r\n\r\n.menu__link__link-icon{padding:8px;color:var(--secondary-fg-color)}\r\n\r\n.menu__link__link-name{margin:0 8px}\r\n\r\n.menu__toolbar{height:48px;display:flex;padding:8px;text-align:center}\r\n\r\n.page__ee-animation--enter{-webkit-animation:page__ee-animation--enter-animation .2s ease-in-out forwards;animation:page__ee-animation--enter-animation .2s ease-in-out forwards}\r\n\r\n.page__ee-animation--enter,.page__ee-animation--exit{-webkit-transform-origin:top center;transform-origin:top center;will-change:opacity,transform}\r\n\r\n.page__ee-animation--exit{-webkit-animation:page__ee-animation--exit-animation .2s ease-in-out forwards;animation:page__ee-animation--exit-animation .2s ease-in-out forwards}\r\n\r\n.page__ee-animation--stop{-webkit-animation:unset;animation:unset;will-change:auto}\r\n\r\n@-webkit-keyframes page__ee-animation--exit-animation{0%{opacity:1;-webkit-transform:scale(1) translateY(0);transform:scale(1) translateY(0)}to{opacity:0;-webkit-transform:scale(.9) translateY(80px);transform:scale(.9) translateY(80px)}}\r\n\r\n@keyframes page__ee-animation--exit-animation{0%{opacity:1;-webkit-transform:scale(1) translateY(0);transform:scale(1) translateY(0)}to{opacity:0;-webkit-transform:scale(.9) translateY(80px);transform:scale(.9) translateY(80px)}}\r\n\r\n@-webkit-keyframes page__ee-animation--enter-animation{0%{opacity:0;-webkit-transform:translateY(-80px);transform:translateY(-80px)}to{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}}\r\n\r\n@keyframes page__ee-animation--enter-animation{0%{opacity:0;-webkit-transform:translateY(-80px);transform:translateY(-80px)}to{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}}\r\n\r\n.player-image-profile{--size:46px}\r\n\r\n.player-type{background-color:#000;color:#fff;border-radius:0 0 10px 10px;text-align:center;font-size:var(--font-x-small)}\r\n\r\n.player-image-profile__image-container{display:flex;flex-direction:column;border-radius:10px;overflow:hidden;height:100%;width:100%}\r\n\r\n.player-image-profile__image{width:100%;flex:1;background-size:cover;background-repeat:no-repeat;border-radius:10px 10px 0 0}\r\n\r\n.player-image-profile__info-icon{--icon-size:16px;margin-top:calc(-1 * var(--size));display:flex;justify-content:flex-end;margin-right:-12px}\r\n\r\n.player-image-profile__info-icon-box{padding:0 2px;background-color:#fff;border-radius:50%}\r\n\r\n.player-image-profile__avatar-info-icon{--icon-size:16px;margin-top:calc(-1 * var(--size))}\r\n\r\n.player-image-profile__avatar-info-icon-box{background-color:#fff;border-radius:50%}\r\n\r\n.player-image-profile__role{height:20px;width:20px;position:absolute;left:-12px;top:-12px;border-radius:50%;display:flex;justify-content:center;align-items:center}\r\n\r\n.player-profile-toolBar{background-color:var(--primary-bg-color);color:var(--primary-fg-color);height:var(--button-height);width:100%;align-items:center;display:flex;padding:8px;justify-content:space-between;flex-direction:row-reverse;text-transform:uppercase}\r\n\r\n.player-profile-info{overflow:scroll;padding-bottom:12px}\r\n\r\n.player-profile-info--footer{max-height:80%}\r\n\r\n.player-profile-info--no-footer{max-height:90%}\r\n\r\n.player-profile{background-color:var(--primary-fg-color);display:flex;flex-direction:column}\r\n\r\n.player-profile-row{display:flex;min-height:48px}\r\n\r\n.player-profile-avatar-icon{border-radius:50%;height:60px;width:60px;background-size:cover;background-color:#eee}\r\n\r\n.player-profile-stats-title{background-color:#fafafa;text-align:center;padding:8px}\r\n\r\n.player-profile-stats-header{background-color:#eef5fc;color:#97b5d3;border:solid #d4e3f2;border-width:1px 0;font-size:var(--font-small)}\r\n\r\n.player-profile-row--border{border-bottom:1px solid #e8e8e8}\r\n\r\n.player-profile-cell--border{border-left:1px solid #e8e8e8}\r\n\r\n.player-profile-cell--border:first-child{border:none}\r\n\r\n.player-profile-cell{flex:1 0 0;padding:8px;display:flex;align-items:center;min-height:52px}\r\n\r\n.player-profile-row:last-child{border:none}\r\n\r\n.player-profile-loader{min-height:30vh;display:flex;justify-content:center;align-items:center}\r\n\r\n.player-profile-info__header{font-size:var(--font-small);margin-bottom:4px}\r\n\r\n.player-profile-info__header-data{font-size:var(--font-large)}\r\n\r\n.player-profile-row__time{font-size:var(--font-small)}\r\n\r\n.prompt{box-shadow:0 2px 4px 0 rgba(0,0,0,.2);position:fixed;width:100%;top:0;--animation-duration:200ms;--animation-timing:cubic-bezier(0.14,1.06,1,0.99)}\r\n\r\n.prompt-close-button{bottom:0;width:100%;color:#fff}\r\n\r\n.prompt--enter{-webkit-animation:prompt-enter-animation var(--animation-duration) var(--animation-timing) forwards;animation:prompt-enter-animation var(--animation-duration) var(--animation-timing) forwards}\r\n\r\n.prompt--exit{-webkit-animation:prompt-exit-animation var(--animation-duration) var(--animation-timing) forwards;animation:prompt-exit-animation var(--animation-duration) var(--animation-timing) forwards}\r\n\r\n.prompt__close-button{color:hsla(0,0%,100%,.5);text-align:center}\r\n\r\n@-webkit-keyframes prompt-enter-animation{0%{-webkit-transform:translateY(-100%);transform:translateY(-100%)}to{-webkit-transform:translateY(0);transform:translateY(0)}}\r\n\r\n@keyframes prompt-enter-animation{0%{-webkit-transform:translateY(-100%);transform:translateY(-100%)}to{-webkit-transform:translateY(0);transform:translateY(0)}}\r\n\r\n@-webkit-keyframes prompt-exit-animation{0%{-webkit-transform:translateY(0);transform:translateY(0)}to{-webkit-transform:translateY(-100%);transform:translateY(-100%)}}\r\n\r\n@keyframes prompt-exit-animation{0%{-webkit-transform:translateY(0);transform:translateY(0)}to{-webkit-transform:translateY(-100%);transform:translateY(-100%)}}\r\n\r\n.quick-check__content{margin:16px 8px}\r\n\r\n.quick-check__terms{margin:16px 0;border-radius:4px;border:1px solid #d6d6d6;padding:8px;color:#7b7a7a;font-size:var(--font-small)}\r\n\r\n.quick-check__terms--highlight{color:#b81c21}\r\n\r\n.quick-check__input-title{margin:8px}\r\n\r\n.quick-check__footer{position:fixed;bottom:0;width:100%;padding:8px;display:flex;background:#3659a5}\r\n\r\n.radio-button{display:flex;align-items:center;height:var(--button-height)}\r\n\r\n.radio-button-label{margin-left:8px}\r\n\r\n.responsive-image{background-repeat:no-repeat;background-size:cover;background-position:50%}\r\n\r\n.scroll{overflow-y:scroll;height:100%;width:100%}\r\n\r\n.app-shell{--animation-width:100px;--animation-duration:0.5s;--animation-delay:0s;--end-color:#fff;--main-color:#e8e8e8;background:linear-gradient(90deg,var(--end-color) -30%,var(--main-color) 50%,var(--end-color) 130%);height:1em;border-radius:2px;width:var(--animation-width);-webkit-animation:app-shell-animation var(--animation-duration) var(--animation-delay) linear infinite;animation:app-shell-animation var(--animation-duration) var(--animation-delay) linear infinite;background-size:var(--animation-width)}\r\n\r\n@-webkit-keyframes app-shell-animation{0%{background-position:0 0}to{background-position:var(--animation-width) 0}}\r\n\r\n@keyframes app-shell-animation{0%{background-position:0 0}to{background-position:var(--animation-width) 0}}\r\n\r\n.sorting-header__item{align-items:center;display:flex;cursor:pointer;padding:8px 4px}\r\n\r\n.sorting-header__item:last-of-type{justify-content:flex-end}\r\n\r\n.sorting-header__item--active{color:#4073ae}\r\n\r\n.sorting-header__icon{width:var(--icon-size)}\r\n\r\n.state-selector{height:80vh;display:flex;flex-direction:column}\r\n\r\n.stay-tuned-placeholder{display:flex;flex-direction:column;align-items:center;margin:25px}\r\n\r\n.stay-tuned-placeholder-title{font-size:var(--font-large)}\r\n\r\n.stay-tuned-placeholder-subtitle{color:var(--secondary-fg-color)}\r\n\r\n.stay-tuned-placeholder-img{width:64px;height:64px;background:url(/public/imgs/stay-tune-graphic.png) no-repeat;background-size:cover;margin:8px}\r\n\r\n.text-area-input{background:none;width:100%;border:0;outline:none;padding:8px 0;font-family:inherit;color:inherit;resize:none}\r\n\r\n.timer__text{color:#c61c23;font-family:monospace}\r\n\r\n.toast{background-color:#333;position:fixed;bottom:0;width:100%;color:#eee;padding:16px 24px;--animation-duration:300ms;--animation-timing:cubic-bezier(0.24,1.5,1,1);font-size:var(--font-small)}\r\n\r\n.toast--enter{-webkit-animation:toast-enter-animation var(--animation-duration) var(--animation-timing) forwards;animation:toast-enter-animation var(--animation-duration) var(--animation-timing) forwards}\r\n\r\n.toast--exit{-webkit-animation:toast-exit-animation var(--animation-duration) var(--animation-timing) forwards;animation:toast-exit-animation var(--animation-duration) var(--animation-timing) forwards}\r\n\r\n@-webkit-keyframes toast-enter-animation{0%{-webkit-transform:translateY(100%);transform:translateY(100%)}to{-webkit-transform:translateY(0);transform:translateY(0)}}\r\n\r\n@keyframes toast-enter-animation{0%{-webkit-transform:translateY(100%);transform:translateY(100%)}to{-webkit-transform:translateY(0);transform:translateY(0)}}\r\n\r\n@-webkit-keyframes toast-exit-animation{0%{-webkit-transform:translateY(0);transform:translateY(0)}to{-webkit-transform:translateY(100%);transform:translateY(100%)}}\r\n\r\n@keyframes toast-exit-animation{0%{-webkit-transform:translateY(0);transform:translateY(0)}to{-webkit-transform:translateY(100%);transform:translateY(100%)}}\r\n\r\n.toolbar-title{flex:1;text-transform:uppercase}\r\n\r\n.toolbar-title--center{text-align:center;margin-right:var(--button-height)}\r\n\r\n@font-face{font-family:Material Icons;font-style:normal;font-weight:400;src:url(/public/MaterialIcons-Regular.eot);src:local(\"Material Icons\"),local(\"MaterialIcons-Regular\"),url(/public/MaterialIcons-Regular.woff2) format(\"woff2\"),url(/public/MaterialIcons-Regular.woff) format(\"woff\"),url(/public/MaterialIcons-Regular.ttf) format(\"truetype\")}\r\n\r\n.material-icons{font-family:Material Icons;font-weight:400;font-style:normal;font-size:var(--icon-size);width:var(--icon-size);display:inline-block;line-height:1;text-transform:none;letter-spacing:normal;word-wrap:normal;white-space:nowrap;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;-webkit-font-feature-settings:\"liga\";font-feature-settings:\"liga\"}\r\n\r\nbody,html{margin:0;padding:0;height:100%}\r\n\r\nbody{background-color:#fafafa;color:var(--color);font-family:Montserrat,sans-serif;font-size:var(--font-medium);font-weight:500;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}\r\n\r\n*{box-sizing:border-box;-webkit-tap-highlight-color:transparent}\r\n\r\n.no-scroll{overflow:hidden}\r\n\r\n.light{color:var(--secondary-fg-color)}\r\n\r\n.text-right{text-align:right}\r\n\r\n.bold{font-weight:700}\r\n\r\n.text-upper{text-transform:uppercase}\r\n\r\n.h-center-middle{justify-content:center}\r\n\r\n.h-center-middle,.h-left-middle{display:flex;flex-direction:row;align-items:center}\r\n\r\n.unused-class{color:red}"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-6 col-xs-12 cricketorList\">\r\n      <div class=\"cricketTitle\">\r\n        <h4> CRICKET</h4>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <div class=\"matchListContainer col-md-6 col-xs-12 \">\r\n    <div class=\"col-md-12 row\" style=\"padding: 11px 0;\">\r\n      <div class=\"col-md-6 \"> Pick an Upcoming Match </div>\r\n      <div class=\"col-md-6  text-right \">\r\n        <a href=\"\" class=\"filterSeries\" data-toggle=\"modal\" data-target=\"#myModal\">Filter By Series</a>\r\n      </div>\r\n    </div>\r\n    <div class=\"card\">\r\n\r\n      <div class=\"card-body\">\r\n\r\n        <div *ngIf=\"listMatch\">\r\n          <div class=\"row borderBtm\" *ngFor=\"let match of listMatch\">\r\n            <div class=\"col-md-4\">\r\n              <div class=\"lazy-loader lazy-loader--loaded\" style=\"height: auto; width:100%\">\r\n                <a routerLink=\"/cricketTeam\">\r\n                  <img src=\"{{match.Teamlogs[0].TeamLogs}}\" width=\"70\" height=\"70\" />\r\n                </a>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"matchCardInfo_9f857 col-md-4\" style=\"vertical-align: middle;top: 16px;\">\r\n              <div class=\"tourNameLabel_d619f col-xs-12\">{{match.SeriesName}} </div>\r\n              <div class=\"timer__text col-xs-12\">\r\n                <div>{{match.TImeSlot}}</div>\r\n              </div>\r\n\r\n            </div>\r\n\r\n            <div class=\"col-md-4\">\r\n              <div class=\"lazy-loader lazy-loader--loaded\" style=\"height: auto; width: 100%;\">\r\n                <img src=\"{{match.Teamlogs[1].TeamLogs}}\" width=\"70\" height=\"65\" class=\"img\" />\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n<div class=\"row\">\r\n  <div>\r\n    <div class=\"bottom-nav js--bottom-nav wrapper_b8e60 col-md-4 col-xs-12\" style=\"width: 570px;\">\r\n      <div >\r\n        <div class=\"bottom-nav__content\" >\r\n          <a class=\"bottom-nav__element bottom-nav__element--active\" href=\"/leagues\">\r\n            <div class=\"bottom-nav__element__icon\">\r\n              <i class=\"material-icons\">home</i>\r\n            </div>\r\n            <div class=\"bottom-nav__element__content__text\">Home</div>\r\n          </a>\r\n    \r\n          <a class=\"bottom-nav__element\" href=\"/contestList\">\r\n            <div class=\"bottom-nav__element__icon\">\r\n              <i class=\"material-icons\">star</i>\r\n            </div>\r\n            <div class=\"bottom-nav__element__content__text\">My Contests</div>\r\n          </a>\r\n    \r\n          <a class=\"bottom-nav__element\" href=\"/login\">\r\n            <div class=\"bottom-nav__element__icon\">\r\n              <i class=\"material-icons\">person</i>\r\n            </div>\r\n            <div class=\"bottom-nav__element__content__text\">Me</div>\r\n          </a>\r\n    \r\n          <a class=\"bottom-nav__element\" href=\"/more\">\r\n            <div class=\"bottom-nav__element__icon\">\r\n              <i class=\"material-icons\">more_horiz</i>\r\n            </div>\r\n            <div class=\"bottom-nav__element__content__text\">More</div>\r\n          </a>\r\n    \r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  </div>\r\n    <div class=\"modal\" id=\"myModal\">\r\n      <div class=\"modal-dialog\">\r\n        <div class=\"modal-content\">\r\n\r\n          <!-- Modal Header -->\r\n          <div class=\"modal-header\">\r\n            <h4 class=\"modal-title\">All Series</h4>\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n          </div>\r\n\r\n          <!-- Modal body -->\r\n          <div class=\"modal-body\">\r\n\r\n            <div class=\"row\" *ngFor=\"let match of listMatch\" style=\"padding: 10px 0;border-bottom: 1px solid #ccc;\">\r\n              <div class=\"col-md-6\">\r\n                {{match.SeriesName}}\r\n              </div>\r\n              <div class=\"col-md-6\">\r\n                <div class=\"form-check\">\r\n                  <input type=\"checkbox\" class=\"form-check-input\" id=\"exampleCheck1\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- Modal footer -->\r\n          <div class=\"modal-footer\">\r\n            <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\">APPLY</button>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- Dream11 -->\r\n\r\n"

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
/* harmony import */ var _models_userdata_userdata_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/userdata/userdata.module */ "./src/app/models/userdata/userdata.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { Router} from '@angular/router';

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(http, data) {
        this.http = http;
        this.data = data;
        this.title = 'JSON to Table Example';
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        var head = new Headers({ 'Content-Type': 'application/json' });
        this.http.get('http://idtp285/api/GetMatch').subscribe(function (data) {
            _this.listMatch = data; // FILL THE ARRAY WITH DATA.
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
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _models_userdata_userdata_module__WEBPACK_IMPORTED_MODULE_2__["UserdataModule"]])
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

module.exports = "<div class=\"topStripe\" role=\"alert\">\r\n  <a href=\"#\"> <i class=\"fas fa-crown\"></i> DREAMS</a>\r\n </div>\r\n\r\n<div class=\"col-md-6 loginBG\">\r\n<div class=\"col-md-12 loginTitle\">\r\nLogin Page\r\n</div>\r\n<div class=\"container\" >\r\n  <form (ngSubmit)=\"onSubmit(form)\">\r\n    <div class=\"form-group\">\r\n      <label for=\"exampleInputEmail1\">Email address</label>\r\n      <input type=\"email\" class=\"form-control\" name=\"userid\" aria-describedby=\"emailHelp\" placeholder=\"Enter email\">\r\n      <small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"exampleInputPassword1\">Password</label>\r\n      <input type=\"password\" class=\"form-control\"  name=\"pswrd\" placeholder=\"Password\">\r\n    </div>\r\n    <div class=\"form-group form-check\">\r\n      <input type=\"checkbox\" class=\"form-check-input\" id=\"exampleCheck1\">\r\n      <label class=\"form-check-label\" for=\"exampleCheck1\">Check me out</label>\r\n    </div>\r\n    <button type=\"submit\" class=\"btn btn-primary\" roy>Submit</button>\r\n  </form>\r\n</div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: loginDetails, LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginDetails", function() { return loginDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_userdata_userdata_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/userdata/userdata.module */ "./src/app/models/userdata/userdata.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var loginDetails = /** @class */ (function () {
    function loginDetails() {
    }
    return loginDetails;
}());

var LoginComponent = /** @class */ (function () {
    function LoginComponent(http, router, data) {
        this.http = http;
        this.router = router;
        this.data = data;
        this.checked = [];
        this.title = 'JSON to Table Example';
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onSubmit = function (form) {
        var _this = this;
        var LoginData = {};
        LoginData.UserName = "avi";
        LoginData.Password = "test";
        LoginData.RemeberMe = true;
        var jsonData = JSON.stringify(LoginData);
        var headers = new Headers({ 'Content-Type': 'application/json' });
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        var req = this.http.post('http://idtp285/api/UserLogin', JSON.stringify(LoginData), httpOptions)
            .subscribe(function (data) {
            debugger;
            console.log(_this.user = data);
            _this.data.storage = _this.user;
            _this.router.navigate(["contestList"]);
        }, function (err) {
            debugger;
            console.log(err);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], LoginComponent.prototype, "role", void 0);
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _models_userdata_userdata_module__WEBPACK_IMPORTED_MODULE_4__["UserdataModule"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/models/userdata/userdata.module.ts":
/*!****************************************************!*\
  !*** ./src/app/models/userdata/userdata.module.ts ***!
  \****************************************************/
/*! exports provided: UserdataModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserdataModule", function() { return UserdataModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserdataModule = /** @class */ (function () {
    function UserdataModule() {
    }
    UserdataModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: []
        }),
        __metadata("design:paramtypes", [])
    ], UserdataModule);
    return UserdataModule;
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

module.exports = "<div class=\"container\" *ngIf=\"matchInfo\" >\n    <ng-container *ngFor=\"let player of matchInfo.MatchPlayers | playerFilterByRole: role\">            \n        <div class=\"row teamPlayer \">\n            <div class=\"col\" >\n                <img src=\"{{player.PlayerImage}}\" width=\"60\" height=\"60\"  class=\"float-left img rounded \" />\n            </div>\n            <div class=\"col-6  text-left\" >\n                <div class=\"col-xs-12\">  {{player.FirstName}}  {{player.LastName}}<br/>\n                 <span class=\"timer__text\">   {{player.Address}} | Points: {{player.Points}}</span>\n                </div>            \n            </div>\n            <div class=\"col\"></div>\n            <div class=\"col text-right\">{{player.Credits}}\n           <!-- <input type=\"checkbox\"  (change)=\"stateChanged()\" class=\"addIcon\" [(ngModel)]=\"player.IsSelected\"/>        \n<span class=\"addIcon\"></span>\n            </div> -->\n            <label class=\"switch\">\n                    <input type=\"checkbox\" checked id=\"playerCheck\" (change)=\"stateChanged()\"  [(ngModel)]=\"player.IsSelected\"/>\n                    <span class=\"slider round\"></span>\n            </label>\n        </div>\n\n     </div>\n    </ng-container>\n  \n \n\n</div>\n"

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
        this.checked = [];
        this.title = 'JSON to Table Example';
    }
    TeamCreatorComponent.prototype.ngOnInit = function () {
    };
    TeamCreatorComponent.prototype.stateChanged = function () {
        var allmatchPlayers = this.matchInfo;
        var selectedCount = this.matchInfo.MatchPlayers.filter(function (x) { return x.IsSelected == true; }).length;
        document.getElementById("lblCounter").innerHTML = selectedCount.toString();
        var selectedCountTwo = allmatchPlayers.MatchPlayers.filter(function (x) { return x.IsSelected == true && x.PlayerRoleName == "Wicketkeeper"; }).length;
        document.getElementById("wicketkeeperCount").innerHTML = selectedCountTwo.toString();
        var selectedCountThree = allmatchPlayers.MatchPlayers.filter(function (x) { return x.IsSelected == true && x.PlayerRoleName == "Batsman"; }).length;
        document.getElementById("batsmanCount").innerHTML = selectedCountThree.toString();
        var selectedCountFour = allmatchPlayers.MatchPlayers.filter(function (x) { return x.IsSelected == true && x.PlayerRoleName == "AllRounder"; }).length;
        document.getElementById("allrounderCount").innerHTML = selectedCountFour.toString();
        var selectedCountFive = allmatchPlayers.MatchPlayers.filter(function (x) { return x.IsSelected == true && x.PlayerRoleName == "Blower"; }).length;
        document.getElementById("bowlerCount").innerHTML = selectedCountFive.toString();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], TeamCreatorComponent.prototype, "role", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TeamCreatorComponent.prototype, "matchInfo", void 0);
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

module.exports = "<div class=\"container\" *ngIf=\"matchInfo\">\r\n    <ng-container  *ngFor=\"let player of matchInfo.MatchPlayers  | playerFilterByRole: role\">\r\n        <div class=\"row teamPlayer\">\r\n            <div class=\"col\">\r\n                <img src=\"{{player.PlayerImage}}\" width=\"70\" height=\"70\" class=\"rounded img\" />\r\n            </div>\r\n            <div class=\"col-4\" >\r\n                <div class=\"col-xs-12\"> {{player.FirstName}}  {{player.LastName}}<br/>\r\n                    {{player.Address}} | Points: {{player.Points}}\r\n\r\n\r\n                </div>\r\n                \r\n            </div>\r\n            <div class=\"col\">  <input type=\"checkbox\" id=\"playerCheck\" (change)=\"stateChanged(player.PlayerId)\"  [(ngModel)]=\"player.IsSelected\"/></div>\r\n            <div class=\"col text-right\">\r\n              <a href=\"javascript:void(0)\" class=\"captainC\">C</a> <a href=\"javascript:void(0)\" class=\"captainVC\">VC</a>\r\n            </div>\r\n        </div>\r\n    </ng-container>\r\n\r\n</div>\r\n\r\n\r\n<div class=\"row\">\r\n        <div class=\"col-md-6 col-xs-12 bg-grey\" style=\"padding: 20px;\">               \r\n    \r\n                    <form  (ngSubmit)=\"onSubmit()\">\r\n                            <a routerLink=\"/login\">  \r\n                          <button type=\"submit\" class=\"btn btn-sm btn-outline-secondary \">Save Team</button></a>\r\n                       </form>\r\n    \r\n     \r\n  \r\n    </div>\r\n    </div>\r\n"

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




var TeamSelectionComponent = /** @class */ (function () {
    function TeamSelectionComponent(http) {
        this.http = http;
        this.checked = [];
        this.title = 'JSON to Table Example';
    }
    //user: IUser;
    TeamSelectionComponent.prototype.ngOnInit = function () {
        var _this = this;
        var head = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["Headers"]({ 'Content-Type': 'application/json' });
        this.http.get('http://idtp285/api/GetMatch/12').subscribe(function (data) {
            _this.matchInfo = data; // FILL THE ARRAY WITH DATA.      	
            //    console.log(this.allMatches);
        }, function (err) {
        });
    };
    TeamSelectionComponent.prototype.stateChanged = function (playerId) {
        var allmatchPlayers = this.matchInfo;
        var i;
        var count = 0;
        var matchedPlayerCount = this.matchInfo.map(function (match) {
            return match.MatchPlayers.filter(function (player) { return player.IsSelected; }).length;
        });
        var result = matchedPlayerCount.reduce(function (a, b) { return a + b; }, 0);
        var key = 'Item 1';
        localStorage.setItem(key, result.toString());
        // debugger;
        //  ( document.getElementById("lblCounter") as HTMLInputElement).innerHTML= result.toString();
        //this.allMatches[0].MatchPlayers[0].PlayerId=100;
        // alert( playerId);
    };
    TeamSelectionComponent.prototype.onSubmit = function () {
        debugger;
        var jsonData = JSON.stringify(this.matchInfo);
        var req = this.http.post('http://idtp285/api/InsertUser', {
            jsonData: jsonData
        })
            .subscribe(function (res) {
            console.log(res);
        }, function (err) {
            console.log(err);
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

/***/ "./src/app/usercontest/usercontest.component.css":
/*!*******************************************************!*\
  !*** ./src/app/usercontest/usercontest.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.cricketorTeamList{ height: 100px; background: #c51d23;box-shadow: 2px 2px 2px #ccc; position: relative;width: 550px; }\r\n.cricketTeamTitle {\r\n    \r\n    width: 100%;\r\n    left: 0;\r\n    color: #fff;\r\n  \r\n    text-align: center;\r\n    padding-top:10px;\r\n}\r\n.arrowLeft{float: left; padding-top: 10px; color: #fff}\r\n.arrowLeft a{color: #fff;}\r\n.alert {\r\n    position: relative;\r\n    padding: 6px 1.25rem;\r\n    border: 1px solid transparent;\r\n    border-radius: .25rem;\r\n    margin-top: 20px;\r\n}\r\n.demo-tab-group {\r\n    border: 1px solid #e8e8e8;\r\n  }\r\n.demo-tab-content {\r\n    padding: 16px;\r\n  }\r\n/* .row{\r\n    margin-left: 1px;\r\n  } */\r\n.row borderBtmusercontest {\r\n     margin-left: -13px;\r\n  }\r\n.card1{\r\n  position: relative;\r\n  display: flex;\r\n  flex-direction: column;\r\n  min-width: 0;\r\n  word-wrap: break-word;\r\n  background-color: #fff;\r\n  background-clip: border-box;\r\n  /* border: 1px solid rgba(0,0,0,.125); */\r\n}"

/***/ }),

/***/ "./src/app/usercontest/usercontest.component.html":
/*!********************************************************!*\
  !*** ./src/app/usercontest/usercontest.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-6 col-xs-12 cricketorTeamList\">\n      <a routerLink=\"/dashboard\">\n        <span class=\"fas fa-arrow-left arrowLeft\"></span>\n      </a>\n      <div class=\"cricketTeamTitle\">\n        <h4>CONTEST DETAILS</h4>\n      </div>\n    </div>\n  </div>\n  <div class=\"matchListContainer col-md-6 col-xs-12\">\n    <div class=\"row\">\n      <div class=\"card1 item-text-wrap\">\n        <div class=\"card1-body\">\n          <div class=\"row borderBtmusercontest\" *ngFor=\"let ucontest of usercontests\">\n            <div class=\" col-md-1 col-xs-12\">\n              <img width=\"50px\" height=\"50px\" src=\"https://s3.amazonaws.com/pwaimages/public/imgs/pwa_default_user_avatar.png\">\n            </div>\n            <div class=\"col-md-2 col-xs-12\"></div>\n            <div style=\"height: 57px\"></div>\n            <div class=\"col-md-8 col-xs-12\" routerLink=\"/viewteam\">{{ucontest.username}}({{ucontest.teamname}})</div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>\n\n<!-- <div class=\"row\">\n    <div class=\"row borderBtm\" *ngFor=\"let ucontest of usercontests\">\n      <div class=\"col-md-2 col-xs-12\">\n        <img width=\"50px\" height=\"50px\" src=\"https://s3.amazonaws.com/pwaimages/public/imgs/pwa_default_user_avatar.png\">\n      </div>\n      <div class=\"col-md-6 col-xs-12\"></div>\n      <div>{{ucontest.username}}({{ucontest.teamname}})</div>\n    </div>\n</div> -->"

/***/ }),

/***/ "./src/app/usercontest/usercontest.component.ts":
/*!******************************************************!*\
  !*** ./src/app/usercontest/usercontest.component.ts ***!
  \******************************************************/
/*! exports provided: UsercontestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsercontestComponent", function() { return UsercontestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_userdata_userdata_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/userdata/userdata.module */ "./src/app/models/userdata/userdata.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UsercontestComponent = /** @class */ (function () {
    function UsercontestComponent(http, router, data) {
        this.http = http;
        this.router = router;
        this.data = data;
    }
    UsercontestComponent.prototype.ngOnInit = function () {
        var _this = this;
        var head = new Headers({ 'Content-Type': 'application/json' });
        this.http.get('http://idtp285/api/GetContest/1').subscribe(function (data) {
            debugger;
            _this.usercontests = data; // FILL THE ARRAY WITH DATA.
            _this.data.userteamstorage = _this.usercontests;
        }, function (err) {
            console.log(err.message);
        });
    };
    UsercontestComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-usercontest',
            template: __webpack_require__(/*! ./usercontest.component.html */ "./src/app/usercontest/usercontest.component.html"),
            styles: [__webpack_require__(/*! ./usercontest.component.css */ "./src/app/usercontest/usercontest.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _models_userdata_userdata_module__WEBPACK_IMPORTED_MODULE_4__["UserdataModule"]])
    ], UsercontestComponent);
    return UsercontestComponent;
}());



/***/ }),

/***/ "./src/app/viewteam/viewteam.component.css":
/*!*************************************************!*\
  !*** ./src/app/viewteam/viewteam.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".rowimg\r\n{\r\n    margin:0px;\r\n    padding:0px;\r\n}\r\n.content_60710 {\r\n    background: url(https://assets.dream11.com/public/imgs/cricket-artwork.svg) no-repeat;\r\n    width:840px;\r\n    height: 1000px;\r\n    position: relative; \r\n}\r\n/* .header\r\n{\r\n   height: 50px;\r\n   width: 50px;\r\n   float: left;\r\n   background: red;\r\n   display: transperant;\r\n} */\r\n.container .content {\r\n    position: absolute; /* Position the background text */\r\n    margin: -1130px;; /* At the bottom. Use top:0 to append it to the top */\r\n    background: rgba(250, 249, 249, 0.5); /* Black background with 0.5 opacity */\r\n    color: #f1f1f1; /* Grey text */\r\n    width: 100%; /* Full width */\r\n}\r\n.divheight{\r\n    height: 27px;\r\n}\r\n.divheight1{\r\n    height: 57px;\r\n}\r\n.divheight2{\r\n    height: 187px;\r\n}\r\n.divheight3{\r\n    height: 177px;\r\n}"

/***/ }),

/***/ "./src/app/viewteam/viewteam.component.html":
/*!**************************************************!*\
  !*** ./src/app/viewteam/viewteam.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"rowimg\">\n  <div class=\"content_60710\">\n    <!-- <img src=\"https://assets.dream11.com/public/imgs/cricket-artwork.svg\" /> -->\n    <div class=\"content\">\n      <div *ngFor=\"let uname of player\">\n        <h1>{{uname.username}}</h1>\n\n      </div>\n      <!-- <div class=\"content\">\n        <div class=\"btn btn--icon\">\n            <i class=\"material-icons\">cancel</i>\n        </div>\n        </div> -->\n\n      <div class=\"divheight\"></div>\n      <div class=\"content\">\n        <div style=\"text-align: center\">\n          WICKET-KEEPER\n        </div>\n      </div>\n      <div *ngFor=\"let userplayer of player[0].players | playerFilterByRole:'Wicketkeeper'\">\n        <div class=\"content\">\n          <div style=\"text-align: center\">\n            <div class=\"img-circle\">\n              <img src=\"{{userplayer.playerimage}}\" width=\"67\" height=\"67\" style=\"border-radius:50%\" />\n            </div>\n            <div>\n              {{userplayer.FirstName}}\n            </div>\n            <div>\n              {{userplayer.Points}} PTS\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"divheight1\"></div>\n      <div class=\"content\">\n        <div style=\"text-align: center\">\n          BATSMAN\n        </div>\n      </div>\n      <div *ngFor=\"let playerbastman of player[0].players | playerFilterByRole:'Batsman'\">\n        <div class=\"content\">\n          <div style=\"margin-left: 90px;float: left;\">\n            <div class=\"img-circle\">\n              <img src=\"{{playerbastman.playerimage}}\" width=\"67\" height=\"67\" style=\"border-radius:50%\" />\n            </div>\n            <div>\n              {{playerbastman.FirstName}}\n            </div>\n            <div>\n              {{playerbastman.Points}} PTS\n            </div>\n          </div>\n         \n            <div class=\"img-circle\">\n              <img src=\"{{player.playerimage}}\" width=\"67\" height=\"67\" style=\"border-radius:50%\" />\n            </div>\n            <div>\n              {{playerbastman.FirstName}}\n            </div>\n            <div>\n              {{playerbastman.Points}} PTS\n            </div>\n          </div>\n          <div style=\"margin-left: 42px;float: left;\">\n            <div class=\"img-circle\">\n              <img src=\"{{playerbastman.playerimage}}\" width=\"67\" height=\"67\" style=\"border-radius:50%\" />\n            </div>\n            <div>\n              {{playerbastman.FirstName}}\n            </div>\n            <div>\n              {{playerbastman.Points}} PTS\n            </div>\n          </div>\n          <div style=\"margin-left: 42px;float: left;\">\n            <div class=\"img-circle\">\n              <img src=\"{{playerbastman.playerimage}}\" width=\"67\" height=\"67\" style=\"border-radius:50%\" />\n            </div>\n            <div>\n              {{playerbastman.FirstName}}\n            </div>\n            <div>\n              {{playerbastman.Points}} PTS\n            </div>\n          </div>\n          <div style=\"margin-left: 54px;float: left;\">\n            <div class=\"img-circle\">\n              <img src=\"{{playerbastman.playerimage}}\" width=\"67\" height=\"67\" style=\"border-radius:50%\" />\n            </div>\n            <div>\n              {{playerbastman.FirstName}}\n            </div>\n            <div>\n              {{playerbastman.Points}} PTS\n            </div>\n          </div> -->\n        </div>\n      </div>\n\n      <div class=\"divheight2\"></div>\n      <div class=\"content\">\n        <div style=\"text-align: center\">\n          ALL-ROUNDERS\n        </div>\n      </div>\n      <div *ngFor=\"let playerallrounder of player[0].players | playerFilterByRole:'AllRounder'\">\n        <div class=\"content\">\n          <div style=\"margin-left: 150px;float: left;\">\n            <div class=\"img-circle\">\n              <img src=\"{{playerallrounder.playerimage}}\" width=\"67\" height=\"67\" style=\"border-radius:50%\" />\n            </div>\n            <div>\n              {{playerallrounder.FirstName}}\n            </div>\n            <div>\n              {{playerallrounder.Points}} PTS\n            </div>\n          </div>\n\n         \n            <div class=\"img-circle\">\n              <img src=\"{{playerallrounder.playerimage}}\" width=\"67\" height=\"67\" style=\"border-radius:50%\" />\n            </div>\n            <div>\n              {{playerallrounder.FirstName}}\n            </div>\n            <div>\n              {{playerallrounder.Points}} PTS\n            </div>\n          </div>\n          <div style=\"margin-left: 135px;float: left;\">\n            <div class=\"img-circle\">\n              <img src=\"{{playerallrounder.playerimage}}\" width=\"67\" height=\"67\" style=\"border-radius:50%\" />\n            </div>\n            <div>\n              {{playerallrounder.FirstName}}\n            </div>\n            <div>\n              {{playerallrounder.Points}} PTS\n            </div>\n          </div> -->\n        </div>\n      </div>\n\n      <div class=\"divheight3\"></div>\n      <div class=\"content\">\n        <div style=\"text-align: center\">\n          BOWLERS\n        </div>\n      </div>\n      <div *ngFor=\"let blower of player[0].players | playerFilterByRole:'Blower'\">\n        <div class=\"content\">\n          <div style=\"margin-left: 90px;float: left;\">\n            <div class=\"img-circle\">\n              <img src=\"{{blower.playerimage}}\" width=\"67\" height=\"67\" style=\"border-radius:50%\" />\n            </div>\n            <div>\n              {{blower.FirstName}}\n            </div>\n            <div>\n              {{blower.Points}} PTS\n            </div>\n          </div>\n\n         \n            <div class=\"img-circle\">\n              <img src=\"{{blower.playerimage}}\" width=\"67\" height=\"67\" style=\"border-radius:50%\" />\n            </div>\n            <div>\n              {{blower.FirstName}}\n            </div>\n            <div>\n              {{blower.Points}} PTS\n            </div>\n          </div>\n          <div style=\"margin-left: 42px;float: left;\">\n            <div class=\"img-circle\">\n              <img src=\"{{blower.playerimage}}\" width=\"67\" height=\"67\" style=\"border-radius:50%\" />\n            </div>\n            <div>\n              {{blower.FirstName}}\n            </div>\n            <div>\n              {{blower.Points}} PTS\n            </div>\n          </div>\n          <div style=\"margin-left: 42px;float: left;\">\n            <div class=\"img-circle\">\n              <img src=\"{{blower.playerimage}}\" width=\"67\" height=\"67\" style=\"border-radius:50%\" />\n            </div>\n            <div>\n              {{blower.FirstName}}\n            </div>\n            <div>\n              {{blower.Points}} PTS\n            </div>\n          </div>\n          <div style=\"margin-left: 55px;float: left;\">\n            <div class=\"img-circle\">\n              <img src=\"{{blower.playerimage}}\" width=\"67\" height=\"67\" style=\"border-radius:50%\" />\n            </div>\n            <div>\n              {{blower.FirstName}}\n            </div>\n            <div>\n              {{blower.Points}} PTS\n            </div>\n          </div> -->\n        </div>\n      </div>\n    </div>\n\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/viewteam/viewteam.component.ts":
/*!************************************************!*\
  !*** ./src/app/viewteam/viewteam.component.ts ***!
  \************************************************/
/*! exports provided: ViewteamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewteamComponent", function() { return ViewteamComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var _models_userdata_userdata_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/userdata/userdata.module */ "./src/app/models/userdata/userdata.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ViewteamComponent = /** @class */ (function () {
    function ViewteamComponent(router, data1) {
        this.router = router;
        this.data1 = data1;
        debugger;
        this.player = this.data1.userteamstorage.filter(function (a) { return a.username === "Avinash Patil"; });
    }
    ViewteamComponent.prototype.ngOnInit = function () {
    };
    ViewteamComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-viewteam',
            template: __webpack_require__(/*! ./viewteam.component.html */ "./src/app/viewteam/viewteam.component.html"),
            styles: [__webpack_require__(/*! ./viewteam.component.css */ "./src/app/viewteam/viewteam.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _models_userdata_userdata_module__WEBPACK_IMPORTED_MODULE_3__["UserdataModule"]])
    ], ViewteamComponent);
    return ViewteamComponent;
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

module.exports = __webpack_require__(/*! E:\Dreams11\App\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map