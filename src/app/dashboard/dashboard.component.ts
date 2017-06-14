import { Component, OnInit } from '@angular/core';
import {userService} from '../services/user-service/user.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [userService] 
})
export class DashboardComponent implements OnInit {
dataList: any[] = [];

  constructor(private userService:userService) {
  this.getUser();

   }

  ngOnInit() {

  }

  getUser()
  {
  this.userService.getUser().subscribe(data => this.dataList = data);
  }

  addUser(fname,lname,username){
this.userService.addUser({fname:fname,lname:lname,username:username}).subscribe(data => console.log('data added',data,this.getUser()) 	

);
  }

}
