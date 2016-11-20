import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { CharacterSearchService } from './character-search.service';
import { Character } from './character';

@Component({
    moduleId: module.id,
    selector: 'character-search',
    templateUrl: 'character-search.component.html',
    styleUrls: ['character-search.component.css'],
    providers: [CharacterSearchService]
})
export class CharacterSearchComponent implements OnInit {
    characters: Observable<Character[]>;
    private searchTerms = new Subject<string>();

    constructor(
        private characterSearchService: CharacterSearchService,
        private router: Router) { }

    search(name: string): void {
        this.searchTerms.next(name);
    }

    ngOnInit(): void {
        this.characters = this.searchTerms
            .debounceTime(300)
            .distinctUntilChanged()
            .switchMap(term => term
                ? this.characterSearchService.search(term)
                : Observable.of<Character[]>([]))
            .catch(error => {
                console.log(error);
                return Observable.of<Character[]>([]);
            })
    }
    gotoDetail(character: Character): void {
        let link = ['/characters/detail', character._id];
        this.router.navigate(link);
    }
}