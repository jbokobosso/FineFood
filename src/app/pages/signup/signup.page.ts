import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  signUpForm = new FormGroup({
    lastName: new FormControl(''),
    firstName: new FormControl(''),
    phoneNumber: new FormControl(''),
    password: new FormControl(''),
    passwordConfirm: new FormControl('')
  });

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.warn(this.signUpForm.value);
  }

}
