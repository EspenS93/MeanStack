"use strict";
var router_1 = require('@angular/router');
var dashboard_component_1 = require('./dashboard.component');
var characters_component_1 = require('./characters.component');
var races_component_1 = require('./races.component');
var characterClasses_component_1 = require('./characterClasses.component');
var character_detail_component_1 = require('./character-detail.component');
var race_detail_component_1 = require('./race-detail.component');
var characterClass_detail_component_1 = require('./characterClass-detail.component');
var newCharacter_component_1 = require('./newCharacter.component');
var newRace_component_1 = require('./newRace.component');
var newCharacterClass_component_1 = require('./newCharacterClass.component');
var appRoutes = [
    {
        path: 'characters',
        component: characters_component_1.CharactersComponent
    },
    {
        path: 'races',
        component: races_component_1.RacesComponent
    },
    {
        path: 'classes',
        component: characterClasses_component_1.CharacterClassesComponent
    },
    {
        path: 'dashboard',
        component: dashboard_component_1.DashboardComponent
    },
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'characters/detail/:id',
        component: character_detail_component_1.CharacterDetailComponent
    },
    {
        path: 'races/detail/:id',
        component: race_detail_component_1.RaceDetailComponent
    },
    {
        path: 'classes/detail/:id',
        component: characterClass_detail_component_1.CharacterClassDetailComponent
    },
    {
        path: 'newCharacter',
        component: newCharacter_component_1.newCharacterComponent
    },
    {
        path: 'newRace',
        component: newRace_component_1.newRaceComponent
    },
    {
        path: 'newClass',
        component: newCharacterClass_component_1.newCharacterClassComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map