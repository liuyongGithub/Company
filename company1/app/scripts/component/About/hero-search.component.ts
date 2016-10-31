import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';

import { HeroSearchService } from '../../service/hero-search.service';
import {Hero} from './hero';
@Component({
  selector: 'hero-search',
  templateUrl: '../../../views/About/hero-search.component.html',
  styles: [ `
    .search-result{
      border-bottom: 1px solid gray;
      border-left: 1px solid gray;
      border-right: 1px solid gray;
      width:195px;
      height: 20px;
      padding: 5px;
      background-color: white;
      cursor: pointer;
    }
    #search-box{
      width: 200px;
      height: 20px;
    }

  ` ],
  providers: [HeroSearchService]
})
export class HeroSearchComponent implements OnInit {
  heroes: Observable<Hero[]>;
  private searchTerms = new Subject<string>();
  constructor(
    private heroSearchService: HeroSearchService,
    private router: Router) {}
  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }
  ngOnInit(): void {
    this.heroes = this.searchTerms
      .debounceTime(300)        // wait for 300ms pause in events
      .distinctUntilChanged()   // ignore if next search term is same as previous
      .switchMap(term => term   // switch to new observable each time
        // return the http search observable
        ? this.heroSearchService.search(term)
        // or the observable of empty heroes if no search term
        : Observable.of<Hero[]>([]))
      .catch(error => {
        // TODO: real error handling
        console.log(error);
        return Observable.of<Hero[]>([]);
      });
      console.log(this.heroes);
  }
  gotoDetail(hero: Hero): void {
    let link = ['/detail', hero.id];
    this.router.navigate(link);
  }
}