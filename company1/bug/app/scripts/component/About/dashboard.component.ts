import {Component,OnInit} from '@angular/core';

import {Hero} from './hero';
import {Company} from './company';
import {HeroService} from '../../service/Hero.service';
import { Router } from '@angular/router';
import {AboutServe} from '../../service/about/about.serve';
@Component({
	selector:'my-dashboard',
  providers:[AboutServe],
	templateUrl:'../../../views/menu.html',
	styles:[`
		[class*='col-'] {
  float: left;
}
*, *:after, *:before {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}
h3 {
  text-align: center; margin-bottom: 0;
}
[class*='col-'] {
  padding-right: 20px;
  padding-bottom: 20px;
}
[class*='col-']:last-of-type {
  padding-right: 0;
}
.grid {
  margin: 0;
}
.col-1-4 {
  width: 25%;
}
.module {
    padding: 20px;
    text-align: center;
    color: #eee;
    max-height: 120px;
    min-width: 120px;
    background-color: #607D8B;
    border-radius: 2px;
}
h4 {
  position: relative;
}
.module:hover {
  background-color: #EEE;
  cursor: pointer;
  color: #607d8b;
}
.grid-pad {
  padding: 10px 0;
}
.grid-pad > [class*='col-']:last-of-type {
  padding-right: 20px;
}
@media (max-width: 600px) {
    .module {
      font-size: 10px;
      max-height: 75px; }
}
@media (max-width: 1024px) {
    .grid {
      margin: 0;
    }
    .module {
      min-width: 60px;
    }
} 


	`]
})

export class DashboardComponent implements OnInit{
	heroes:Hero[]=[];
  company:Company;
	constructor(
			private router:Router,
			private heroService:HeroService,
      private aboutServe:AboutServe
			){}

	ngOnInit():void{
	
	}

	gotoDetail(hero: Hero): void {
	  let link = ['/detail', hero.id];
	  this.router.navigate(link);
	}
}