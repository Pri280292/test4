import { Token } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDataServicesService } from '../services/user-data-services.service';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
 user:any;
  constructor(private userData:UserDataServicesService,private route:Router) { }

  ngOnInit(): void {
    //console.log("Inside User Component");
    const tenantId = localStorage.getItem("tenantId");
    const token = localStorage.getItem("tokenn");

   console.log("tenantId: " , tenantId);
  console.log("token: ", token);
 

    this.userData.getUsers(tenantId,token).subscribe((result) => {
      this.user=result;
      console.log(result);
    });
  }

}
