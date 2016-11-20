import { Component, OnInit } from '@angular/core';
import { CharacterClass } from './characterClass'
import { CharacterClassService } from './characterClass.service';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'my-classes',
    templateUrl: 'characterClasses.component.html',
    styleUrls: ['characterClasses.component.css']
})
export class CharacterClassesComponent {
    selectedCharacterClass: CharacterClass;
    characterClasses: CharacterClass[];

    constructor(
        private router: Router,
        private characterClassService: CharacterClassService
    ) { 
        this.characterClassService.getCharacterClasses().then(characterClasses => {
            this.characterClasses=characterClasses;
        });
    }

    /*ngOnInit(): void {
        this.getCharacterClasses();
    }*/

    onSelect(characterClass: CharacterClass): void {
        this.selectedCharacterClass = characterClass;
    }

    /*getCharacterClasses(): void {
        this.characterClassService
            .getCharacterClasses()
            .then(characterClasses => this.characterClasses = characterClasses);
    }*/
    gotoDetail(): void {
        this.router.navigate(['/classes/detail', this.selectedCharacterClass._id]);
    }

    /*deleteCharacterClass(id: number): void{
        var characterClasses = this.characterClasses;
        this.characterClassService.deleteCharacterClass(id).subscribe(data => {
            if(data.n == 1){
                for(var i =0;i<characterClasses.length;i++){
                    if(characterClasses[i].id == id){
                        characterClasses.splice(i,1);
                    }
                }
            }
        })
    }*/
//Her må jeg fikse noe
    deleteCharacterClass(characterClass: CharacterClass): void {
        this.characterClassService
            .deleteCharacterClass(characterClass._id)
            .then(() => {
                this.characterClasses = this.characterClasses.filter(h => h !== characterClass);
                if (this.selectedCharacterClass === characterClass) { this.selectedCharacterClass = null; }
            });
    }
}