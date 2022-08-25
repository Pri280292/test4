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
     var dataObj=JSON.parse(data);
    const header=new HttpHeaders({'Content-Type': 'application/json', 'tenantId': dataObj.tenantId})
        return this.http.post(this.url,data,{headers:header})
   } 

}
