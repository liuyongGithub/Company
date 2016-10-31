import {Injectable} from '@angular/core';
import {Headers,Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';

import {Hero} from '../component/About/hero';
import {HEROES} from '../component/About/mock-heroes';

@Injectable()
export class HeroService{
	private heroesUrl = 'app/heroes';  // URL to web api
	constructor(
		private http:Http){}

	getHeroes():Promise<Hero[]>{
		return Promise.resolve(HEROES);
		/*return this.http.post('/company/userInfo/query',1,2)
				.toPromise()
				.then(response=>response.json().data as Hero[]);*/
	}

	getHero(id:number):Promise<Hero>{
		return this.getHeroes().then(HEROES=>HEROES.find(hero=>hero.id===id))
	}

	private headers = new Headers({'Content-Type': 'application/json'});

	
}	