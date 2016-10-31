
import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';
import { RouterModule }   from '@angular/router';
import '../component/About/rxjs-extensions';


import { AboutComponent}   from './../component/About/about';
import { HeroDetailComponent }   from './../component/About/hero-detail';
import { AppComponent }   from './../component/About/app.component';
import { DashboardComponent }   from './../component/About/dashboard.component';
import { HeroSearchComponent }   from './../component/About/hero-search.component';

import { CompanyComponent }   from './../component/company/company.component';
import {HeroService} from './../service/Hero.service';
import {httpServe} from '../service/Http.service';

@NgModule({
  imports:[ 
  	BrowserModule,
  	CommonModule,
  	FormsModule,
  	HttpModule,
  	RouterModule.forRoot([
		{
			path:'heroes',
			component:AboutComponent
		},{
			path:'dashboard',
			component:CompanyComponent
		},{
			path:'',
			redirectTo:'/dashboard',
			pathMatch:'full'
		}
	])
  ],//引入模块
  declarations: [AppComponent,AboutComponent,HeroDetailComponent,DashboardComponent,HeroSearchComponent,CompanyComponent],//声明需要加载的模块
  bootstrap:    [ AppComponent],//加载模块入口
	providers: [HeroService,httpServe]
})
export class AppModule{
  
}
