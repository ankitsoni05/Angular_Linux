import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { usernameValidator } from './username.validators';

@Component({
  selector: 'app-reactive-signup-form',
  templateUrl: './reactive-signup-form.component.html',
  styleUrls: ['./reactive-signup-form.component.css'],
})
export class ReactiveSignupFormComponent implements OnInit {
  form = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      usernameValidator.cannotContainSpace,
    ]),
    password: new FormControl('', Validators.required),
  });
  constructor() {}

  ngOnInit(): void {}

  get userName() {
    console.log(this.form.get('username'));
    return this.form.get('username');
  }
  get password() {
    return this.form.get('password');
  }
}
