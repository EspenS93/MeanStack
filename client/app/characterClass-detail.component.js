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
var characterClass_service_1 = require('./characterClass.service');
var CharacterClassDetailComponent = (function () {
    function CharacterClassDetailComponent(characterClassService, route, location) {
        this.characterClassService = characterClassService;
        this.route = route;
        this.location = location;
    }
    ;
    CharacterClassDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            var id = params['id'];
            _this.characterClassService.getCharacterClass(id)
                .then(function (characterClass) { _this.characterClass = characterClass; });
        });
    };
    CharacterClassDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    CharacterClassDetailComponent.prototype.save = function () {
        var _this = this;
        this.characterClassService.updateCharacterClass(this.characterClass)
            .then(function () { return _this.goBack(); });
    };
    CharacterClassDetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-class-detail',
            templateUrl: 'characterClass-detail.component.html',
            styleUrls: ['detail.component.css']
        }), 
        __metadata('design:paramtypes', [characterClass_service_1.CharacterClassService, router_1.ActivatedRoute, common_1.Location])
    ], CharacterClassDetailComponent);
    return CharacterClassDetailComponent;
}());
exports.CharacterClassDetailComponent = CharacterClassDetailComponent;
//# sourceMappingURL=characterClass-detail.component.js.map