import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {
msg:string = "";


  constructor() { }

  loginRef = new FormGroup({
    firstName: new FormControl(),
    lastName : new FormControl(),
    user: new FormControl(),
    pass: new FormControl()

  });

  ngOnInit(): void {
  }
  checkUser()
  {



     // obj.pass : this.loginRef.get('pass')

var obj = {
  firstName: this.loginRef.get('firstName')?.value,
  lastName : this.loginRef.get('lastName')?.value,
  user : this.loginRef.get('user')?.value,
  pass : this.loginRef.get('pass')?.value
  
}


    
   
    let tmpUser = this.loginRef.get('user')?.value;
    let tmpPass = this.loginRef.get('pass')?.value;

    
    if(tmpUser != null && tmpPass != null)
    {
      const  key:string = this.loginRef.get('user')?.value
     
      //console.log(this.loginRef.get("user")?.value || '{}') 
      localStorage.setItem(key,JSON.stringify(obj));
    }
    else{
      this.msg = "Please type in your user name and password!";
    }
    
  
    this.loginRef.reset();
  }


  DisplayInPrivate()
  {
    for (let index = 0; index < localStorage.length; index++) {
      const element = localStorage.getItem(localStorage.key(index) || '{}' );
     const  data = JSON.parse(element || '{}');
      console.log(data.user," " ,data.pass);
    }
  }

}
