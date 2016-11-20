import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Character } from './character';

@Injectable()
export class CharacterService {
    /*private charactersUrl = 'app/characters';
    private racesUrl = 'app/races';
    private classesUrl = 'app/characterClasses';
    private headers = new Headers({ 'Content-Type': 'application/json' });
    */
    private handleError(error: any): Promise<any> {
        console.error('An error occured', error);
        return Promise.reject(error.message || error);
    }

    constructor(private http: Http) { }
    
    getCharacters(): Promise<Character[]>{
        return this.http.get('/api/characters')
        .toPromise()
        .then(response => response.json() as Character[])
        .catch(this.handleError);
    }

    getCharacter(id: string): Promise<Character> {
        return this.http.get('/api/character/'+id)
        .toPromise()
        .then(response => response.json() as Character)
        .catch(this.handleError);
    }

    addCharacter(newCharacter: Character): Promise<Character>{
        var headers = new Headers();
        headers.append('Content-Type','application/json');
        return this.http.post('/api/character',JSON.stringify(newCharacter),{headers: headers})
        .toPromise()
        .then(response => response.json() as Character)
        .catch(this.handleError);
    }

    deleteCharacter(id: string): Promise<void>{
        return this.http.delete('/api/character/'+id)
        .toPromise()
        .then(response => response.json())
        .catch(this.handleError);
    }

    updateCharacter(character: Character): Promise<Character>{
        var headers = new Headers();
        headers.append('Content-Type','application/json');
        return this.http.put('/api/character/'+character._id,JSON.stringify(character),{headers: headers})
        .toPromise()
        .then(response => response.json() as Character)
        .catch(this.handleError);
    }
    /*getCharacters() {
        return this.http.get(this.charactersUrl)
            .toPromise()
            .then(response => response.json().data as Character[])
            .catch(this.handleError);
            
    }

    getCharacter(id: number): Promise<Character> {
        return this.getCharacters()
            .then(characters => characters.find(character => character.id === id));
    }

    update(character: Character): Promise<Character> {
        const url = `${this.charactersUrl}/${character.id}`;
        return this.http
            .put(url, JSON.stringify(character), { headers: this.headers })
            .toPromise()
            .then(() => character)
            .catch(this.handleError);
    }
    create(character: Character): Promise<Character> {

        return this.http
            .post(this.charactersUrl, JSON.stringify({ name: character.name,race: character.race, characterClass: character.characterClass, strength: character.strength, agility: character.agility, intellect: character.intellect }), { headers: this.headers })
            .toPromise()
            .then(res => res.json().data)
            .catch(this.handleError);
    }

    delete(id: number): Promise<void> {
        let url = `${this.charactersUrl}/${id}`;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }*/
}