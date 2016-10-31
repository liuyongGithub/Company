import {Injectable} from '@angular/core';
import {httpServe} from '../Http.service';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AboutServe{
	constructor(
		private httpServe:httpServe){}
	querylogin(message:any){
		return this.httpServe.post('/company/userInfo/login',message).toPromise();
	}
	query(message:any){
		return this.httpServe.get('',message).toPromise();
	}
	queryList(message:any){
		return this.httpServe.post('/company/userInfo/query',message).toPromise();
	}
}