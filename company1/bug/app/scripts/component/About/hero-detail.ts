import {Component,OnInit} from '@angular/core';
import {Hero} from './hero';
import {ActivatedRoute,Params} from '@angular/router';
import {Location}  from '@angular/common';
import {HeroService} from './../../service/Hero.service';

@Component({
	selector:'my-hero-detail',
	templateUrl:'../../../views/About/hero-detail.component.html',
	styles:[`
		label {
  display: inline-block;
  width: 3em;
  margin: .5em 0;
  color: #607D8B;
  font-weight: bold;
}
input {
  height: 2em;
  font-size: 1em;
  padding-left: .4em;
}
button {
  margin-top: 20px;
  font-family: Arial;
  background-color: #eee;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer; cursor: hand;
}
button:hover {
  background-color: #cfd8dc;
}
button:disabled {
  background-color: #eee;
  color: #ccc; 
  cursor: auto;
}
	`]
})

export class HeroDetailComponent implements OnInit {
	hero:Hero;

	constructor(
		private heroService:HeroService,
		private route:ActivatedRoute,
		private location:Location
	){}

	ngOnInit():void{
		this.route.params.forEach((params:Params)=>{
			let id=+params['id'];
			this.heroService.getHero(id).then(hero => this.hero = hero);
		})
	}

	goBack():void{
		this.location.back();
	}

	
}