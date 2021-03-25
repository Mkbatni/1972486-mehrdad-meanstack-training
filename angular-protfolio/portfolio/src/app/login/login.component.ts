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
  
    let jsonData = localStorage.getItem(userName)!;
    let jSonString = JSON.parse(jsonData);

    //console.log(jSonString.user, jSonString.pass, jSonString.firstName , jSonString.last)
    if(jsonData != null && passWord == jSonString.pass)
    {
      let obj = {
        first :  jSonString.firstName,
        last : jSonString.lastName
      }
     
      console.log(obj.first, obj.last);
      sessionStorage.setItem('0',JSON.stringify(obj));
      this.router.navigate(["dashboard"])

    }
    else{
      this.msg = "Username or password is not recognized, did you try to sign up!";
    }
 
    loginRef.reset()
  }

}
