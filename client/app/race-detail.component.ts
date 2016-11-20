import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { RaceService } from './race.service';
import { Race } from './race'

@Component({
    moduleId: module.id,
    selector: 'my-race-detail',
    templateUrl: 'race-detail.component.html',
    styleUrls: ['detail.component.css']
})
export class RaceDetailComponent implements OnInit {
    
    race: Race;

    constructor(
    private raceService: RaceService,
    private route: ActivatedRoute,
    private location: Location
    ) { };

    ngOnInit(): void {
        this.route.params.forEach((params: Params) =>{
            let id : string = params['id']
            this.raceService.getRace(id)
                .then(race => {this.race = race});
        });
    }
    goBack(): void {
        this.location.back();
    }
    save(): void {
        this.raceService.updateRace(this.race)
            .then(() => this.goBack());
    }
}
