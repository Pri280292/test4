import { Component, OnInit } from '@angular/core';
import { UserDataServicesService } from '../services/user-data-services.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users1:any;
  constructor(private userDatas :UserDataServicesService) {
    // this.userDatas.userDataInfo().subscribe((data)=>{
    //   this.users1=data;
   //})
  }
  ngOnInit(): void {
  }

}
  function ngOnInit() {
    throw new Error('Function not implemented.');
  }

