import { Injectable } from '@angular/core';
import { Login } from '../Types/auth';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {
url:string=environment.apibaseURL+ '/Insurance'
  constructor(private http:HttpClient) { }
  isLoading:boolean=false;
  
  authenticate(form:Login){
   return this.http.post(this.url,form).subscribe({next:res=>{console.log(res)},error:err=>{console.log(err)}})
  }
  
     
  
}

