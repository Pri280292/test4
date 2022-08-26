import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup} from '@angular/forms'
import { Router } from '@angular/router';
import { UserDataServicesService } from '../services/user-data-services.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm!:FormGroup
  users:any;


  constructor(private formBuilder:FormBuilder,private userData:UserDataServicesService,private router:Router) { 
    //  this.userData.userDataInfo().subscribe((data)=>{
    //   this.users=data;
   // })
  }

  ngOnInit(): void {
    this.loginForm=this.formBuilder.group({
      userId:'',
      tenantId:'',
      password:''
    })
  }
  login(data:any){
    
    this.userData.saveUserDatainfo(data).subscribe((result)=>{
      localStorage.clear();
        localStorage.setItem("tokenn", JSON.parse(JSON.stringify(result)).jwtResponse.token);
        localStorage.setItem("tenantId", data.tenantId);   
        this.router.navigate(['users']);    
      })
    }
   
  }



