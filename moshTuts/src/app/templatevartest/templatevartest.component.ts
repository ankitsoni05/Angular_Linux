import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templatevartest',
  templateUrl: './templatevartest.component.html',
  styleUrls: ['./templatevartest.component.css']
})
export class TemplatevartestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  getVal(event:any){
    console.log(event);
  }

}
