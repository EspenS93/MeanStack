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
var character_1 = require('./character');
var race_1 = require('./race');
var characterClass_1 = require('./characterClass');
var character_service_1 = require('./character.service');
var race_service_1 = require('./race.service');
var characterClass_service_1 = require('./characterClass.service');
var router_1 = require('@angular/router');
var newCharacterComponent = (function () {
    function newCharacterComponent(router, characterService, raceService, characterClassService) {
        this.router = router;
        this.characterService = characterService;
        this.raceService = raceService;
        this.characterClassService = characterClassService;
        this.newCharacter = new character_1.Character();
        this.race = new race_1.Race;
        this.characterClass = new characterClass_1.CharacterClass;
    }
    newCharacterComponent.prototype.ngOnInit = function () {
        this.getRaces();
        this.getClasses();
        this.newCharacter.race = 'Human';
        this.newCharacter.characterClass = 'Warrior';
        this.refresh();
    };
    newCharacterComponent.prototype.getRaces = function () {
        var _this = this;
        this.raceService
            .getRaces()
            .then(function (races) { _this.races = races; });
    };
    newCharacterComponent.prototype.getClasses = function () {
        var _this = this;
        this.characterClassService
            .getCharacterClasses()
            .then(function (characterClasses) { _this.characterClasses = characterClasses; });
    };
    newCharacterComponent.prototype.add = function () {
        this.newCharacter.name = this.newCharacter.name.trim();
        if (!this.newCharacter.name) {
            return;
        }
        this.characterService.addCharacter(this.newCharacter);
        this.router.navigateByUrl('/characters');
    };
    newCharacterComponent.prototype.onRaceChange = function (raceName) {
        this.race.strength = this.races.find(function (race) { return race.name == raceName; }).strength;
        this.race.agility = this.races.find(function (race) { return race.name == raceName; }).agility;
        this.race.intellect = this.races.find(function (race) { return race.name == raceName; }).intellect;
        this.newCharacter.race = raceName;
    };
    newCharacterComponent.prototype.onClassChange = function (className) {
        this.characterClass.strength = this.characterClasses.find(function (character) { return character.name == className; }).strength;
        this.characterClass.agility = this.characterClasses.find(function (character) { return character.name == className; }).agility;
        this.characterClass.intellect = this.characterClasses.find(function (character) { return character.name == className; }).intellect;
        this.newCharacter.characterClass = className;
    };
    newCharacterComponent.prototype.refresh = function () {
        this.newCharacter.strength = +this.characterClass.strength + +this.race.strength;
        this.newCharacter.agility = +this.characterClass.agility + +this.race.agility;
        this.newCharacter.intellect = +this.characterClass.intellect + +this.race.intellect;
    };
    newCharacterComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'new-character',
            templateUrl: 'newCharacter.component.html',
            styleUrls: ['newX.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, character_service_1.CharacterService, race_service_1.RaceService, characterClass_service_1.CharacterClassService])
    ], newCharacterComponent);
    return newCharacterComponent;
}());
exports.newCharacterComponent = newCharacterComponent;
//# sourceMappingURL=newCharacter.component.js.map