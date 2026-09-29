import { Component,ViewChild } from '@angular/core';
import { FormsModule,NgForm,Validators } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-login',
  styleUrl: './login.css',
  templateUrl: './login.html',
})
export class Login {

  
username="username";
password="admin123"


@ViewChild('signupform')
form!:NgForm;

submitteddata: any=null;

@if(signupform.valid){
  this.submitteddata=this.form.value;
}

@if(Isloggedin){
  this.
}

}
