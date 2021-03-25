import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }

  loginRef = new FormGroup({
    user: new FormControl(),
    pass: new FormControl()

  });

  ngOnInit(): void {
  }
  checkUser()
  {
   console.log(this.loginRef.value) 
  }
}
