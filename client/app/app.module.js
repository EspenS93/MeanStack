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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
require('./rxjs-extensions');
var app_component_1 = require('./app.component');
var character_detail_component_1 = require('./character-detail.component');
var race_detail_component_1 = require('./race-detail.component');
var characterClass_detail_component_1 = require('./characterClass-detail.component');
var characters_component_1 = require('./characters.component');
var races_component_1 = require('./races.component');
var characterClasses_component_1 = require('./characterClasses.component');
var dashboard_component_1 = require('./dashboard.component');
var character_search_component_1 = require('./character-search.component');
var newCharacter_component_1 = require('./newCharacter.component');
var newRace_component_1 = require('./newRace.component');
var newCharacterClass_component_1 = require('./newCharacterClass.component');
var character_service_1 = require('./character.service');
var characterClass_service_1 = require('./characterClass.service');
var race_service_1 = require('./race.service');
var app_routing_1 = require('./app.routing');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                app_routing_1.routing
            ],
            declarations: [
                app_component_1.AppComponent,
                dashboard_component_1.DashboardComponent,
                character_detail_component_1.CharacterDetailComponent,
                race_detail_component_1.RaceDetailComponent,
                characterClass_detail_component_1.CharacterClassDetailComponent,
                characters_component_1.CharactersComponent,
                races_component_1.RacesComponent,
                characterClasses_component_1.CharacterClassesComponent,
                character_search_component_1.CharacterSearchComponent,
                newCharacter_component_1.newCharacterComponent,
                newRace_component_1.newRaceComponent,
                newCharacterClass_component_1.newCharacterClassComponent
            ],
            providers: [
                character_service_1.CharacterService,
                characterClass_service_1.CharacterClassService,
                race_service_1.RaceService
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map