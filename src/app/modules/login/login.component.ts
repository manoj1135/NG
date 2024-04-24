import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  errorMsg:string="";
  successMsg:string="";
  formGroup:FormGroup = new FormGroup({
    userName:new FormControl("", Validators.required),
    password:new FormControl("", Validators.required),
  })
}
