import { Component,Input,Output,OnInit} from '@angular/core';
import {Hero} from './hero';
import {Login} from './login';

import { Router } from '@angular/router';
import {HeroService} from '../../service/Hero.service';
import {AboutServe} from '../../service/about/about.serve';

@Component({
  selector: 'my-heroes',
  templateUrl:'../../../views/login.html',
  providers:[AboutServe],
  styles: [`
    .selected {
    background-color: #CFD8DC !important;
    color: white;
  }
  .heroes {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    width: 15em;
  }
  .heroes li {
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #EEE;
    margin: .5em;
    padding: .3em 0;
    height: 1.6em;
    border-radius: 4px;
  }
  .heroes li.selected:hover {
    background-color: #BBD8DC !important;
    color: white;
  }
  .heroes li:hover {
    color: #607D8B;
    background-color: #DDD;
    left: .1em;
  }
  .heroes .text {
    position: relative;
    top: -3px;
  }
  .heroes .badge {
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.8em 0.7em 0 0.7em;
    background-color: #607D8B;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.8em;
    margin-right: .8em;
    border-radius: 4px 0 0 4px;
  }

  `]
}) 
export class AboutComponent implements OnInit{
  title = 'Tour of Heroes';
 	
  constructor(
  	private router:Router,
    private aboutServe:AboutServe,
  	private heroService:HeroService){
  }

  heroes:Hero[];
  selectedHero: Hero;
  user:Login;
  
  getHeroes():void{
  	this.heroService.getHeroes().then(heroes=>this.heroes=heroes);
  };

  ngOnInit():void{
  	this.getHeroes();
    this.user=new Login('','','','',''); //初始化
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  gotoDetail():void{
  	this.router.navigate(['/detail',this.selectedHero.id]);
  }

  logins(login:Login):void{
    console.log(login);
    this.aboutServe.querylogin(login).then((res:any)=>{
      this.user=res.json().data;
      console.log(this.user);
    });
    
    this.router.navigate(['/dashboard']);
  }
}
  