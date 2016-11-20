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
var common_1 = require('@angular/common');
var character_service_1 = require('./character.service');
var CharacterDetailComponent = (function () {
    function CharacterDetailComponent(characterService, route, location) {
        this.characterService = characterService;
        this.route = route;
        this.location = location;
    }
    ;
    CharacterDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            var id = params['id'];
            _this.characterService.getCharacter(id)
                .then(function (character) { _this.character = character; });
        });
    };
    CharacterDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    CharacterDetailComponent.prototype.save = function () {
        var _this = this;
        this.characterService.updateCharacter(this.character)
            .then(function () { return _this.goBack(); });
    };
    CharacterDetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-character-detail',
            templateUrl: 'character-detail.component.html',
            styleUrls: ['detail.component.css']
        }), 
        __metadata('design:paramtypes', [character_service_1.CharacterService, router_1.ActivatedRoute, common_1.Location])
    ], CharacterDetailComponent);
    return CharacterDetailComponent;
}());
exports.CharacterDetailComponent = CharacterDetailComponent;
//# sourceMappingURL=character-detail.component.js.map