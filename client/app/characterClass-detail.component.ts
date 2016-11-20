import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { CharacterClassService } from './characterClass.service';
import { CharacterClass } from './characterClass'

@Component({
    moduleId: module.id,
    selector: 'my-class-detail',
    templateUrl: 'characterClass-detail.component.html',
    styleUrls: ['detail.component.css']
})
export class CharacterClassDetailComponent implements OnInit {
    
    characterClass: CharacterClass;

    constructor(
    private characterClassService: CharacterClassService,
    private route: ActivatedRoute,
    private location: Location
    ) { };

    ngOnInit(): void {
        this.route.params.forEach((params: Params) =>{
            let id: string = params['id']
            this.characterClassService.getCharacterClass(id)
                .then(characterClass => {this.characterClass = characterClass});
        });
    }
    goBack(): void {
        this.location.back();
    }
    save(): void {
        this.characterClassService.updateCharacterClass(this.characterClass)
            .then(() => this.goBack());
    }
}
