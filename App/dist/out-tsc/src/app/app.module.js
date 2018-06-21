"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var app_component_1 = require("./app.component");
var login_component_1 = require("./login/login.component");
var app_routing_module_1 = require(".//app-routing.module");
var dashboard_component_1 = require("./dashboard/dashboard.component");
var cricket_team_component_1 = require("./cricket-team/cricket-team.component");
var animations_1 = require("@angular/platform-browser/animations");
var tabview_1 = require("primeng/tabview");
var accordion_1 = require("primeng/accordion");
var primeng_1 = require("primeng/primeng");
var team_creator_component_1 = require("./team-creator/team-creator.component");
var car_service_1 = require("./car.service");
var table_1 = require("primeng/table");
var player_filter_by_role_pipe_1 = require("./player-filter-by-role.pipe");
var captain_creator_component_1 = require("./captain-creator/captain-creator.component");
var team_selection_component_1 = require("./team-selection/team-selection.component");
var contest_list_component_1 = require("./contest-list/contest-list.component");
// import { MyFilterPipe } from './my-filter.pipe';
var progressbar_1 = require("primeng/progressbar");
var checkbox_1 = require("primeng/checkbox");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/common/http");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                login_component_1.LoginComponent,
                dashboard_component_1.DashboardComponent,
                cricket_team_component_1.CricketTeamComponent,
                team_creator_component_1.TeamCreatorComponent,
                player_filter_by_role_pipe_1.PlayerFilterByRolePipe,
                captain_creator_component_1.CaptainCreatorComponent,
                team_selection_component_1.TeamSelectionComponent,
                contest_list_component_1.ContestListComponent,
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                http_1.HttpClientModule,
                animations_1.BrowserAnimationsModule,
                primeng_1.SharedModule, primeng_1.PanelModule,
                tabview_1.TabViewModule,
                table_1.TableModule,
                progressbar_1.ProgressBarModule,
                checkbox_1.CheckboxModule,
                forms_1.FormsModule
            ],
            schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA],
            exports: [tabview_1.TabViewModule, accordion_1.AccordionModule, primeng_1.SharedModule, table_1.TableModule, progressbar_1.ProgressBarModule, checkbox_1.CheckboxModule],
            bootstrap: [app_component_1.AppComponent],
            providers: [car_service_1.CarService]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map