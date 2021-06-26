import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templatedrivenform',
  templateUrl: './templatedrivenform.component.html',
  styleUrls: ['./templatedrivenform.component.css']
})
export class TemplatedrivenformComponent implements OnInit {

  cities = 
  [
    {id:1,name:"Nagpur"},
    {id:2,name:"Pune"},
    {id:3,name:"Mumbai"},
    {id:4,name:"Banglore"},
    {id:5,name:"Hyderabad"}
  ];
  genders = 
  [
    {id:1,name:"Male"},
    {id:2,name:"Female"},
    {id:3,name:"N/A"},
  ];
  finalisedJSON :any;
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(f:any)
  {
    console.log(f);
    this.finalisedJSON = f.value;
  }
}
