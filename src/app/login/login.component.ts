import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isTrue = false;
  email="admin@admin.com";
  password="12345678";
  emailValid: boolean = true;
  passValid: boolean = true;
  changeEmail(){
    if (this.email.indexOf(".")==-1 || this.email.indexOf("@")==-1) 
      {this.emailValid=false;}
    else
    {this.emailValid=true;}
    
  }

  changePass(){
    if (this.password.length==0) 
      {this.passValid=false;} 
    else {this.passValid=true;}
  }

  signClick(){
    window.location.href='/Dashboard';
  }

  sampleNumber: number | null;

  constructor() { }

 
  ngOnInit() {
  }

}
