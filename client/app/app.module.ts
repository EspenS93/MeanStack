import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
//import { Database } from './database';
import './rxjs-extensions';

import { AppComponent }        from './app.component';

import { CharacterDetailComponent } from './character-detail.component';
import { RaceDetailComponent } from './race-detail.component';
import { CharacterClassDetailComponent } from './characterClass-detail.component';

import { CharactersComponent }     from './characters.component';
import { RacesComponent }     from './races.component';
import { CharacterClassesComponent }     from './characterClasses.component';
import { DashboardComponent } from './dashboard.component';
import { CharacterSearchComponent } from './character-search.component';
import { newCharacterComponent } from './newCharacter.component';
import { newRaceComponent } from './newRace.component';
import { newCharacterClassComponent } from './newCharacterClass.component';

import { CharacterService }         from './character.service';
import { CharacterClassService }         from './characterClass.service';
import { RaceService }         from './race.service';

import { routing } from './app.routing'

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    //InMemoryWebApiModule.forRoot(Database),
    routing
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    CharacterDetailComponent,
    RaceDetailComponent,
    CharacterClassDetailComponent,
    CharactersComponent,
    RacesComponent,
    CharacterClassesComponent,
    CharacterSearchComponent,
    newCharacterComponent,
    newRaceComponent,
    newCharacterClassComponent
  ],
  providers: [
    CharacterService,
    CharacterClassService,
    RaceService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}