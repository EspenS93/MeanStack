import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Race } from './race'
import { RaceService } from './race.service';

import { Router } from '@angular/router';


@Component({
    moduleId: module.id,
    selector: 'new-race',
    templateUrl: 'newRace.component.html',
    styleUrls: ['newX.component.css']
})
export class newRaceComponent implements OnInit {
    constructor(
        private router: Router,
        private raceService: RaceService
    ) { }

    ngOnInit(): void {
        this.newRace.strength=0;
        this.newRace.agility=0;
        this.newRace.intellect=0;

    }
    newRace: Race = new Race;

    add(): void {
        this.newRace.name = this.newRace.name.trim();
        if (!this.newRace.name || this.newRace.strength===0 || this.newRace.agility===0|| this.newRace.intellect===0) {
            return;
        }
        this.raceService.addRace(this.newRace);
        this.router.navigateByUrl('/races');
    }
}
