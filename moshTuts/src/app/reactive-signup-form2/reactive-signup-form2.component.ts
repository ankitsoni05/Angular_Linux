import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CommentsValidator } from '../common/validators/comments.validator';

@Component({
  selector: 'app-reactive-signup-form2',
  templateUrl: './reactive-signup-form2.component.html',
  styleUrls: ['./reactive-signup-form2.component.css'],
})
export class ReactiveSignupForm2Component implements OnInit {
  colours = [
    { id: 1, colour: 'Red' },
    { id: 2, colour: 'Green' },
    { id: 3, colour: 'Blue' },
    { id: 4, colour: 'Yellow' },
    { id: 5, colour: 'Indigo' },
    { id: 6, colour: 'Orange' },
    { id: 7, colour: 'White' },
    { id: 8, colour: 'Black' },
  ];

  cities = [
    { id: 1, ctyname: 'Nagpur' },
    { id: 1, ctyname: 'Pune' },
    { id: 1, ctyname: 'Mumbai' },
    { id: 1, ctyname: 'Hyderabad' },
    { id: 1, ctyname: 'Banglore' },
    { id: 1, ctyname: 'Chennai' },
    { id: 1, ctyname: 'Delhi' },
    { id: 1, ctyname: 'Mysore' },
  ];

  form = new FormGroup({
    email: new FormControl(),
    colour: new FormControl(),
    city: new FormControl(),
    comments: new FormControl('', [CommentsValidator.haveLengthof15]),
  });

  constructor() {}

  ngOnInit(): void {
    console.log(this.getemail);
  }
  get getemail() {
    console.log(this.form.get('email'));
    return this.form.get('email');
  }
  get comments() {
    return this.form.get('comments');
  }
  btnSubmit() {
    console.log(this.form);
  }
}
