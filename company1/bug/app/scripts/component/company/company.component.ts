import {Component,OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Company} from '../About/company';
import {AboutServe} from '../../service/about/about.serve';
@Component({
	selector:'my-company',
	templateUrl:'../../../views/index.html',
	providers:[AboutServe]
})

export class CompanyComponent implements OnInit{

company:Company;
	constructor(
			private router:Router,
      private aboutServe:AboutServe
			){}
 ngOnInit():void{
 		this.aboutServe.queryList('').then((res:any)=>{
      this.company=res.json().data;
      console.log(this.company);
    });
  }
}