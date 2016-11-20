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
var characterClass_1 = require('./characterClass');
var characterClass_service_1 = require('./characterClass.service');
var router_1 = require('@angular/router');
var newCharacterClassComponent = (function () {
    function newCharacterClassComponent(router, characterClassService) {
        this.router = router;
        this.characterClassService = characterClassService;
        this.newCharacterClass = new characterClass_1.CharacterClass;
    }
    newCharacterClassComponent.prototype.ngOnInit = function () {
        this.newCharacterClass.strength = 0;
        this.newCharacterClass.agility = 0;
        this.newCharacterClass.intellect = 0;
    };
    newCharacterClassComponent.prototype.add = function () {
        this.newCharacterClass.name = this.newCharacterClass.name.trim();
        if (!this.newCharacterClass.name || this.newCharacterClass.strength === 0 || this.newCharacterClass.agility === 0 || this.newCharacterClass.intellect === 0) {
            return;
        }
        this.characterClassService.addCharacterClas(this.newCharacterClass);
        this.router.navigateByUrl('/classes');
    };
    newCharacterClassComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'new-character-class',
            templateUrl: 'newCharacterClass.component.html',
            styleUrls: ['newX.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, characterClass_service_1.CharacterClassService])
    ], newCharacterClassComponent);
    return newCharacterClassComponent;
}());
exports.newCharacterClassComponent = newCharacterClassComponent;
//# sourceMappingURL=newCharacterClass.component.js.map