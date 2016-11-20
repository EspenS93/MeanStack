import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Character } from './character'
import { Race } from './race'
import { CharacterClass } from './characterClass'

import { CharacterService } from './character.service';
import { RaceService } from './race.service';
import { CharacterClassService } from './characterClass.service';

import { Router } from '@angular/router';


@Component({
    moduleId: module.id,
    selector: 'new-character',
    templateUrl: 'newCharacter.component.html',
    styleUrls: ['newX.component.css']
})
export class newCharacterComponent implements OnInit {
    constructor(
        private router: Router,
        private characterService: CharacterService,
        private raceService: RaceService,
        private characterClassService: CharacterClassService
    ) { }

    ngOnInit(): void {
        this.getRaces();
        this.getClasses();

        this.newCharacter.race = 'Human';
        this.newCharacter.characterClass = 'Warrior';
        this.refresh();

    }
    newCharacter: Character = new Character();
    races: Race[];
    race: Race = new Race;

    characterClasses: CharacterClass[];
    characterClass: CharacterClass = new CharacterClass;

    getRaces(): void {
        this.raceService
            .getRaces()
            .then(races => {this.races = races});
    }

    getClasses(): void {
        this.characterClassService
            .getCharacterClasses()
            .then(characterClasses => {this.characterClasses = characterClasses});
    }

    add(): void {
        this.newCharacter.name = this.newCharacter.name.trim();
        if (!this.newCharacter.name) {
            return;
        }
        this.characterService.addCharacter(this.newCharacter);
        this.router.navigateByUrl('/characters');
    }

    onRaceChange(raceName: string) {
        this.race.strength = this.races.find(race => race.name == raceName).strength;
        this.race.agility = this.races.find(race => race.name == raceName).agility;
        this.race.intellect = this.races.find(race => race.name == raceName).intellect;
        this.newCharacter.race = raceName;
    }

    onClassChange(className: string) {
        this.characterClass.strength = this.characterClasses.find(character => character.name == className).strength;
        this.characterClass.agility = this.characterClasses.find(character => character.name == className).agility;
        this.characterClass.intellect = this.characterClasses.find(character => character.name == className).intellect;
        this.newCharacter.characterClass = className;
    }

    refresh() {
        this.newCharacter.strength = +this.characterClass.strength + +this.race.strength;
        this.newCharacter.agility = +this.characterClass.agility + +this.race.agility;
        this.newCharacter.intellect = +this.characterClass.intellect + +this.race.intellect;
    }

}
