import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class httpServe{
	constructor(
		private http:Http){}
	get(url:string,message:string){
		return this.http.get(url+"?"+message);
	}
	post(url:string,message:JSON){
		return this.http.post(url,message);
	}
}