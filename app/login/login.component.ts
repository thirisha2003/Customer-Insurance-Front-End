import { Component, OnInit } from '@angular/core';
import { Login } from '../Types/auth';
import { LoginserviceService } from './loginservice.service';
import { Init } from 'v8';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})


export class LoginComponent implements OnInit{
  constructor(private loginservice:LoginserviceService,private router:Router){

  }
ngOnInit(): void {

}
  form:Login={
    email:'',
    password:''
  }
  submit(){
    if(this.loginservice.authenticate(this.form))
       this.router.navigate(['payment'])
      
  }
  isLoading(){
    return this.loginservice.isLoading;
  }

}
