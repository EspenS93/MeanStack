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
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var Observable_1 = require('rxjs/Observable');
var Subject_1 = require('rxjs/Subject');
var character_search_service_1 = require('./character-search.service');
var CharacterSearchComponent = (function () {
    function CharacterSearchComponent(characterSearchService, router) {
        this.characterSearchService = characterSearchService;
        this.router = router;
        this.searchTerms = new Subject_1.Subject();
    }
    CharacterSearchComponent.prototype.search = function (name) {
        this.searchTerms.next(name);
    };
    CharacterSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.characters = this.searchTerms
            .debounceTime(300)
            .distinctUntilChanged()
            .switchMap(function (term) { return term
            ? _this.characterSearchService.search(term)
            : Observable_1.Observable.of([]); })
            .catch(function (error) {
            console.log(error);
            return Observable_1.Observable.of([]);
        });
    };
    CharacterSearchComponent.prototype.gotoDetail = function (character) {
        var link = ['/characters/detail', character._id];
        this.router.navigate(link);
    };
    CharacterSearchComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'character-search',
            templateUrl: 'character-search.component.html',
            styleUrls: ['character-search.component.css'],
            providers: [character_search_service_1.CharacterSearchService]
        }), 
        __metadata('design:paramtypes', [character_search_service_1.CharacterSearchService, router_1.Router])
    ], CharacterSearchComponent);
    return CharacterSearchComponent;
}());
exports.CharacterSearchComponent = CharacterSearchComponent;
//# sourceMappingURL=character-search.component.js.map