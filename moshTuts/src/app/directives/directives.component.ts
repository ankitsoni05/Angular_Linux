import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  courses = ['c1','c2','c3'];
  tasks = {
  totaltasks : ['T1','T2','T3','T4','T5'],
  activetasks : ['A1','A2','A3','A4','A5','A6','A7'],
  inactivetasks : ['I1','I2','I3']
  }
  ActiveStatus = "tt";
  contentActiveClass = "show active";
  constructor() { }

  ngOnInit(): void {
  }

  changeStatus(currentStatus :string){
    this.ActiveStatus = currentStatus;
  }

}
