import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  model: any = {};
  constructor(private router: Router) { }
  
  onSubmit() {
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model))
  }

}
