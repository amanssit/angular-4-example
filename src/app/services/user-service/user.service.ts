import { Injectable} from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class userService {
apiUrl:string=`http://localhost:3000/users`;
  constructor (
    private http: Http
  ) {}

  getUser(){
    return this.http.get(this.apiUrl)
    .map((res:Response) => res.json());
  }
addUser(user){
    return this.http.post(this.apiUrl,user)
    .map((res:Response) => res.json());
  }
}