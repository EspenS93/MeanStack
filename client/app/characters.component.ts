import { Component, OnInit } from '@angular/core';
import { Character } from './character'
import { CharacterService } from './character.service';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'my-characters',
    templateUrl: 'characters.component.html',
    styleUrls: ['characters.component.css']
})
export class CharactersComponent implements OnInit {
    selectedCharacter: Character;
    characters: Character[];

    constructor(
        private router: Router,
        private characterService: CharacterService
    ) { 
        /*this.characterService.getCharacters().then(characters => {
            this.characters=characters;
        });*/
    }

    ngOnInit(): void {
        this.getCharacters();
    }

    onSelect(character: Character): void {
        this.selectedCharacter = character;
    }

    getCharacters(): void {
        this.characterService
            .getCharacters()
            .then(characters => this.characters = characters);
    }
    gotoDetail(): void {
        this.router.navigate(['/characters/detail', this.selectedCharacter._id]);
    }

    /*deleteCharacter(id): void{
        var characters = this.characters;
        this.characterService.deleteCharacter(id).then(data => {
            if(data.n == 1){
                for(var i =0;i<characters.length;i++){
                    if(characters[i].id == id){
                        characters.splice(i,1);
                    }
                }
            }
        })
    }*/
//Her må jeg fikse noe
    deleteCharacter(character: Character): void {
        this.characterService
            .deleteCharacter(character._id)
            .then(() => {
                this.characters = this.characters.filter(h => h !== character);
                if (this.selectedCharacter === character) { this.selectedCharacter = null; }
            });
    }
}