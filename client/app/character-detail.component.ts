import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { CharacterService } from './character.service';
import { Character } from './character'

@Component({
    moduleId: module.id,
    selector: 'my-character-detail',
    templateUrl: 'character-detail.component.html',
    styleUrls: ['detail.component.css']
})
export class CharacterDetailComponent implements OnInit {
    
    character: Character;

    constructor(
    private characterService: CharacterService,
    private route: ActivatedRoute,
    private location: Location
    ) { };

    ngOnInit(): void {
        this.route.params.forEach((params: Params) =>{
            let id: string = params['id']
            this.characterService.getCharacter(id)
                .then(character => {this.character = character});
        });
    }
    goBack(): void {
        this.location.back();
    }
    save(): void {
        this.characterService.updateCharacter(this.character)
            .then(() => this.goBack());
    }
}
