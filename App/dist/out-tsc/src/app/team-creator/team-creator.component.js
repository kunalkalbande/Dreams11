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
var TeamCreatorComponent = /** @class */ (function () {
    function TeamCreatorComponent(http) {
        this.http = http;
        this.checked = false;
        this.title = 'JSON to Table Example';
    }
    TeamCreatorComponent.prototype.ngOnInit = function () {
        var _this = this;
        var head = new http_2.Headers({ 'Content-Type': 'application/json' });
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
        debugger;
        for (i = 0; i < allmatchPlayers[0].MatchPlayers.length; i++) {
            var matchPlayerId = allmatchPlayers[0].MatchPlayers[i].PlayerId;
            if (matchPlayerId == playerId) {
                allmatchPlayers[0].MatchPlayers[i].IsSelected = true;
            }
        }
        //let checked = document.getElementById('playerCheck');
        var checked = function () {
            debugger;
            var checkedCheckBoxes = (playerId).parent().find(':checkbox:checked');
            if (checkedCheckBoxes.length > 5) {
                this.checked = false;
                (function (err) {
                    console.log("Only 5 can be checked. Please uncheck some if you want to check others... ");
                });
            }
            else {
                //$("#error").empty();
            }
            // alert(allmatchPlayers[0].MatchPlayers[i].IsSelected = true);
        };
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
        core_1.Input(),
        __metadata("design:type", String)
    ], TeamCreatorComponent.prototype, "role", void 0);
    TeamCreatorComponent = __decorate([
        core_1.Component({
            selector: 'app-team-creator',
            templateUrl: './team-creator.component.html',
            styleUrls: ['./team-creator.component.css']
        }),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], TeamCreatorComponent);
    return TeamCreatorComponent;
}());
exports.TeamCreatorComponent = TeamCreatorComponent;
//# sourceMappingURL=team-creator.component.js.map