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
var race_1 = require('./race');
var race_service_1 = require('./race.service');
var router_1 = require('@angular/router');
var newRaceComponent = (function () {
    function newRaceComponent(router, raceService) {
        this.router = router;
        this.raceService = raceService;
        this.newRace = new race_1.Race;
    }
    newRaceComponent.prototype.ngOnInit = function () {
        this.newRace.strength = 0;
        this.newRace.agility = 0;
        this.newRace.intellect = 0;
    };
    newRaceComponent.prototype.add = function () {
        this.newRace.name = this.newRace.name.trim();
        if (!this.newRace.name || this.newRace.strength === 0 || this.newRace.agility === 0 || this.newRace.intellect === 0) {
            return;
        }
        this.raceService.addRace(this.newRace);
        this.router.navigateByUrl('/races');
    };
    newRaceComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'new-race',
            templateUrl: 'newRace.component.html',
            styleUrls: ['newX.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, race_service_1.RaceService])
    ], newRaceComponent);
    return newRaceComponent;
}());
exports.newRaceComponent = newRaceComponent;
//# sourceMappingURL=newRace.component.js.map