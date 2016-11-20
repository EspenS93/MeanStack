import { Component, OnInit } from '@angular/core';
import { Race } from './race'
import { RaceService } from './race.service';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'my-races',
    templateUrl: 'races.component.html',
    styleUrls: ['races.component.css']
})
export class RacesComponent {
    selectedRace: Race;
    races: Race[];

    constructor(
        private router: Router,
        private raceService: RaceService
    ) { 
        this.raceService.getRaces().then(races => {
            this.races=races;
        });
    }
/*
    ngOnInit(): void {
        this.getRaces();
    }
*/
    onSelect(race: Race): void {
        this.selectedRace = race;
    }
/*
    getRaces(): void {
        this.raceService
            .getRaces()
            .then(races => this.races = races);
    }*/
    gotoDetail(): void {
        this.router.navigate(['/races/detail', this.selectedRace._id]);
    }

    /*deleteRace(id){
        var races = this.races;
        this.raceService.deleteRace(id).then(data => {
            if(data.n == 1){
                for(var i =0;i<races.length;i++){
                    if(races[i].id == id){
                        races.splice(i,1);
                    }
                }
            }
        })
    }*/
//Her må jeg fikse noe
    deleteRace(race: Race): void {
        this.raceService
            .deleteRace(race._id)
            .then(() => {
                this.races = this.races.filter(h => h !== race);
                if (this.selectedRace === race) { this.selectedRace = null; }
            });
    }
}