import { Component, OnInit } from '@angular/core';
import { UserDataServicesService } from '../services/user-data-services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users1:any;
  constructor(private userDatas :UserDataServicesService,private router:Router) {
    // this.userDatas.userDataInfo().subscribe((data)=>{
    //   this.users1=data;
   //})
  }
  ngOnInit(): void {
    console.log("Inside User Component");
    const tenantId = localStorage.getItem("tenantId");
    const token = localStorage.getItem("tokenn");
    console.log("tenantId: " , tenantId);
    console.log("token: ", token);

    this.userDatas.getUsers(tenantId, token).subscribe((result) => {
      this.users1=result;
      console.log(result);
    });
    

  }
  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['login'])
  }

  getDetail(userId:any){
    console.log("UserId",userId)
    this.router.navigate(['user-list'])
  }


}
  function ngOnInit() {
    throw new Error('Function not implemented.');
  }

