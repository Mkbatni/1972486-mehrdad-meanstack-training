import { JsonPipe } from '@angular/common';
import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public router : Router) { }
msg:string = "";

  ngOnInit(): void {
  }

  checkUser(loginRef: any)
  {
 // it is a Json the jsonObj . name of the text field
   
 let obj = loginRef.value;
 let userName = obj.UserName;
    let passWord = obj.pass;
  
    let data = localStorage.getItem(userName)!;
    let dataS = JSON.parse(data);

    if(data != null && passWord == dataS.pass)
    {
      this.router.navigate(["dashboard"])
    }
    else{
      this.msg = "Username or password is not recognized, did you try to sign up!";
    }
 
    loginRef.reset()
  }

}
