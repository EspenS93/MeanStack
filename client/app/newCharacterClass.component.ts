import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { CharacterClass } from './characterClass'
import { CharacterClassService } from './characterClass.service';

import { Router } from '@angular/router';


@Component({
    moduleId: module.id,
    selector: 'new-character-class',
    templateUrl: 'newCharacterClass.component.html',
    styleUrls: ['newX.component.css']
})
export class newCharacterClassComponent implements OnInit {
    constructor(
        private router: Router,
        private characterClassService: CharacterClassService
    ) { }

    ngOnInit(): void {
        this.newCharacterClass.strength=0;
        this.newCharacterClass.agility=0;
        this.newCharacterClass.intellect=0;

    }
    newCharacterClass: CharacterClass = new CharacterClass;

    add(): void {
        this.newCharacterClass.name = this.newCharacterClass.name.trim();
        if (!this.newCharacterClass.name || this.newCharacterClass.strength===0 || this.newCharacterClass.agility===0|| this.newCharacterClass.intellect===0) {
            return;
        }
        this.characterClassService.addCharacterClas(this.newCharacterClass);
        this.router.navigateByUrl('/classes');
    }
}
