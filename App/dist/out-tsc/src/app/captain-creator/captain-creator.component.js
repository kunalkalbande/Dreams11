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
        core_1.Input(),
        __metadata("design:type", String)
    ], CaptainCreatorComponent.prototype, "role", void 0);
    CaptainCreatorComponent = __decorate([
        core_1.Component({
            selector: 'app-captain-creator',
            templateUrl: './captain-creator.component.html',
            styleUrls: ['./captain-creator.component.css']
        }),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], CaptainCreatorComponent);
    return CaptainCreatorComponent;
}());
exports.CaptainCreatorComponent = CaptainCreatorComponent;
//# sourceMappingURL=captain-creator.component.js.map