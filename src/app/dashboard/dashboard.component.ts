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

  constructor(private _userService:userService) {
  this.dataList= _userService.getUserData();
   }

  ngOnInit() {

  }

}
