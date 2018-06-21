"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
require("rxjs/add/operator/map");
var http_2 = require("@angular/http");
var CricketTeamComponent = /** @class */ (function () {
    function CricketTeamComponent(http) {
        this.http = http;
        this.checked = false;
        this.title = 'JSON to Table Example';
    }
    CricketTeamComponent.prototype.ngOnInit = function () {
        var _this = this;
        var head = new http_2.Headers({ 'Content-Type': 'application/json' });
        this.http.get('http://idtp285/api/GetMatch/12').subscribe(function (data) {
            _this.allMatches = data; // FILL THE ARRAY WITH DATA.      	
            console.log(_this.allMatches);
        }, function (err) {
            //  console.log (err.message);
        });
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], CricketTeamComponent.prototype, "role", void 0);
    CricketTeamComponent = __decorate([
        core_1.Component({
            selector: 'app-cricket-team',
            templateUrl: './cricket-team.component.html',
            styleUrls: ['./cricket-team.component.css']
        }),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], CricketTeamComponent);
    return CricketTeamComponent;
}());
exports.CricketTeamComponent = CricketTeamComponent;
//# sourceMappingURL=cricket-team.component.js.map