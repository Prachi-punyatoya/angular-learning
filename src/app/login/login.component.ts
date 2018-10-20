import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {LoginApiService} from '../services/login-api.service'
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  model: any = {};
  role='dddd';
  constructor(private router: Router,private login_api:LoginApiService) { }
  
  onSubmit() {
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model))
    this.login_api.login(this.model).subscribe(
      (data:any)=>{
        console.log(data);
        this.router.navigate(['home']); 
      },
      (err:HttpErrorResponse)=>
      {
      console.log(err);
      }
    )
  }

}
