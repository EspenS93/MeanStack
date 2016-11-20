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
var character_service_1 = require('./character.service');
var router_1 = require('@angular/router');
var CharactersComponent = (function () {
    function CharactersComponent(router, characterService) {
        this.router = router;
        this.characterService = characterService;
        /*this.characterService.getCharacters().then(characters => {
            this.characters=characters;
        });*/
    }
    CharactersComponent.prototype.ngOnInit = function () {
        this.getCharacters();
    };
    CharactersComponent.prototype.onSelect = function (character) {
        this.selectedCharacter = character;
    };
    CharactersComponent.prototype.getCharacters = function () {
        var _this = this;
        this.characterService
            .getCharacters()
            .then(function (characters) { return _this.characters = characters; });
    };
    CharactersComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/characters/detail', this.selectedCharacter._id]);
    };
    /*deleteCharacter(id): void{
        var characters = this.characters;
        this.characterService.deleteCharacter(id).then(data => {
            if(data.n == 1){
                for(var i =0;i<characters.length;i++){
                    if(characters[i].id == id){
                        characters.splice(i,1);
                    }
                }
            }
        })
    }*/
    //Her må jeg fikse noe
    CharactersComponent.prototype.deleteCharacter = function (character) {
        var _this = this;
        this.characterService
            .deleteCharacter(character._id)
            .then(function () {
            _this.characters = _this.characters.filter(function (h) { return h !== character; });
            if (_this.selectedCharacter === character) {
                _this.selectedCharacter = null;
            }
        });
    };
    CharactersComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-characters',
            templateUrl: 'characters.component.html',
            styleUrls: ['characters.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, character_service_1.CharacterService])
    ], CharactersComponent);
    return CharactersComponent;
}());
exports.CharactersComponent = CharactersComponent;
//# sourceMappingURL=characters.component.js.map