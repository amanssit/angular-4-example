import { Injectable,NgModule } from '@angular/core';
import {HttpModule, Http, URLSearchParams, Headers, RequestOptions} from '@angular/http';

@NgModule({
  imports: [HttpModule],
  providers: [Http]
})

@Injectable()
export class userService {
dataList: any[] = [];
  constructor(private http: Http) {

   }

  getUserData(){
  
    this.http.get('http://localhost:3000/users').subscribe(res => console.log(res.json()));


 this.dataList= [
{id:1,fname:'Aman',lname:'kumar',username:'amanssit'},
{id:2,fname:'Amit',lname:'kumar',username:'amanssit'},
{id:3,fname:'Ajay',lname:'kumar',username:'amanssit'},
{id:4,fname:'Anil',lname:'kumar',username:'amanssit'}
] 

return this.dataList;

  }

}
