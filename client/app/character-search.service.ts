import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

import { Character } from './character';

@Injectable()
export class CharacterSearchService {

    constructor(private http: Http) {}

    search(name: string): Observable<Character[]> {
        return this.http
            .get('/api/characters/'+name)
            .map((r: Response) => r.json() as Character[]);
    }
}