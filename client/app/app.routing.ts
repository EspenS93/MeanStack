import { ModuleWithProviders } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { DashboardComponent } from './dashboard.component'
import { CharactersComponent } from './characters.component'
import { RacesComponent } from './races.component'
import { CharacterClassesComponent } from './characterClasses.component'
import { CharacterDetailComponent } from './character-detail.component';
import { RaceDetailComponent } from './race-detail.component';
import { CharacterClassDetailComponent } from './characterClass-detail.component';
import { newCharacterComponent } from './newCharacter.component';
import { newRaceComponent } from './newRace.component';
import { newCharacterClassComponent } from './newCharacterClass.component';

const appRoutes: Routes = [
    {
        path: 'characters',
        component: CharactersComponent
    },
    {
        path: 'races',
        component: RacesComponent
    },
    {
        path: 'classes',
        component: CharacterClassesComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'characters/detail/:id',
        component: CharacterDetailComponent
    },
    {
        path: 'races/detail/:id',
        component: RaceDetailComponent
    },
    {
        path: 'classes/detail/:id',
        component: CharacterClassDetailComponent
    },
    {
        path: 'newCharacter',
        component: newCharacterComponent
    },
    {
        path: 'newRace',
        component: newRaceComponent
    },
    {
        path: 'newClass',
        component: newCharacterClassComponent
    }
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);