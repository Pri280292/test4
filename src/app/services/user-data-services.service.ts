
import { Injectable } from '@angular/core';
import{HttpClient,HttpHeaders} from'@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserDataServicesService {
 url='https://api.pragamana.com:8443/cpq'
  constructor(private http:HttpClient) {}
  //  userDataInfo(){
  
  //   const header=new HttpHeaders({'Content-Type': 'application/json','tenantId': tenantId})
  //       return this.http.get(this.url,{headers:header})
  // }
   saveUserDatainfo(data:any){
     var dataObj=JSON.stringify(data);
    const header=new HttpHeaders({'Content-Type': 'application/json', 'tenantId': JSON.parse(dataObj).tenantId})
        return this.http.post(this.url+"/authenticate",data,{headers:header})
   } 

   getUsers(tenantId: any, token : any) {
    console.log("token: ", token);
    let t = 'Bearer '+ token;
    console.log("t: ", t);
      const header2=new HttpHeaders({'Authorization': t , 'tenantId': tenantId});
      console.log("headers: ", header2)
      return this.http.get(this.url+"/userList", {headers: header2});
   }

   getUserList(tenantId:any,token:any,id:any){
    let t = 'Bearer '+ token;
    console.log("t: ", t);
      const header3=new HttpHeaders({'Authorization': t , 'tenantId': tenantId});
      console.log("headers: ", header3)
      return this.http.get(this.url+`GET/users/${id}`,{headers:header3});
   }

}
