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
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var httpOptions = {
    headers: new http_1.HttpHeaders({})
};
var TeamService = /** @class */ (function () {
    function TeamService(http, teamService) {
        this.http = http;
        this.teamService = teamService;
        this.heroesUrl = './assets/teamDetails.json'; // URL to web api
    }
    /** GET heroes from the server */
    TeamService.prototype.getHeroes = function () {
        var _this = this;
        return this.http.get(this.heroesUrl)
            .pipe(operators_1.tap(function (heroes) { return _this.log("fetched heroes"); }), operators_1.catchError(this.handleError('getHeroes', [])));
    };
    /** GET hero by id. Return `undefined` when id not found */
    TeamService.prototype.getHeroNo404 = function (id) {
        var _this = this;
        var url = this.heroesUrl + "/?id=" + id;
        return this.http.get(url)
            .pipe(operators_1.map(function (heroes) { return heroes[0]; }), // returns a {0|1} element array
        operators_1.tap(function (h) {
            var outcome = h ? "fetched" : "did not find";
            _this.log(outcome + " hero id=" + id);
        }), operators_1.catchError(this.handleError("getHero id=" + id)));
    };
    /** GET hero by id. Will 404 if id not found */
    TeamService.prototype.getHero = function (id) {
        var _this = this;
        var url = this.heroesUrl + "/" + id;
        return this.http.get(url).pipe(operators_1.tap(function (_) { return _this.log("fetched hero id=" + id); }), operators_1.catchError(this.handleError("getHero id=" + id)));
    };
    /* GET heroes whose name contains search term */
    TeamService.prototype.searchHeroes = function (term) {
        var _this = this;
        if (!term.trim()) {
            // if not search term, return empty hero array.
            return rxjs_1.of([]);
        }
        return this.http.get(this.heroesUrl + "/?name=" + term).pipe(operators_1.tap(function (_) { return _this.log("found heroes matching \"" + term + "\""); }), operators_1.catchError(this.handleError('searchHeroes', [])));
    };
    //////// Save methods //////////
    /** PUT: update the hero on the server */
    TeamService.prototype.updateHero = function (hero) {
        var _this = this;
        return this.http.put(this.heroesUrl, hero, httpOptions).pipe(operators_1.tap(function (_) { return _this.log("updated hero id=" + hero.id); }), operators_1.catchError(this.handleError('updateHero')));
    };
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    TeamService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            _this.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return rxjs_1.of(result);
        };
    };
    /** Log a HeroService message with the MessageService */
    TeamService.prototype.log = function (message) {
        this.teamService.add('TeamService: ' + message);
    };
    TeamService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [http_1.HttpClient,
            TeamService])
    ], TeamService);
    return TeamService;
}());
exports.TeamService = TeamService;
//# sourceMappingURL=team.service.js.map