import { Component, OnInit } from '@angular/core';
import { Character } from './character';
import { CharacterService } from './character.service';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'my-dashboard',
    templateUrl: 'dashboard.component.html',
    styleUrls: ['dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    characters: Character[];
    constructor(
        private characterService: CharacterService,
        private router: Router) {
    }

   ngOnInit(): void {
        this.characterService.getCharacters()
            .then(characters => this.characters = characters.slice(0, 4));
    }

    gotoDetail(character: Character): void {
        let link = ['/characters/detail', character._id];
        this.router.navigate(link);
    }
}