import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  courses = ['c1','c2','c3'];
  constructor() { }

  ngOnInit(): void {
  }

}
