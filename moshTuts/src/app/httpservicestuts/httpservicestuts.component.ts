import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-httpservicestuts',
  templateUrl: './httpservicestuts.component.html',
  styleUrls: ['./httpservicestuts.component.css'],
})
export class HttpservicestutsComponent implements OnInit {
  taskList: any;
  creators: any = [
    { cname: 'Admin', id: 1 },
    { cname: 'User', id: 2 },
    { cname: 'Manager', id: 3 },
    { cname: 'System', id: 4 },
  ];

  priorities: any = [
    { pname: 'Low', id: 1 },
    { pname: 'Medium', id: 2 },
    { pname: 'High', id: 3 },
    { pname: 'Critical', id: 4 },
  ];

  taskForm = new FormGroup({
    taskName: new FormControl(),
    createdBy: new FormControl(),
    startDate: new FormControl(),
    endDate: new FormControl(),
    priority: new FormControl(),
  });
  constructor(private clientHttp: HttpClient) {}

  ngOnInit(): void {
    this.clientHttp
      .get('https://localhost:5001/AllTasks')
      .subscribe((respo) => {
        console.log(respo);
        this.taskList = respo;
      });
  }
  submitTask() {
    console.log(this.taskForm.value);
    var payload = {
      TaskName: this.taskForm.value.taskName,
      CreatedBy: this.taskForm.value.createdBy,
      CreatedDate: new Date(),
      StartDate: this.taskForm.value.startDate,
      EndDate: this.taskForm.value.endDate,
      priority: this.taskForm.value.priority,
    };
    const headers = { 'content-type': 'application/json' };
    console.log('Final Payload', payload);
    this.clientHttp
      .post('https://localhost:5001/CreateTask', JSON.stringify(payload), {
        headers: headers,
      })
      .subscribe((returntask) => {
        console.log('Task Returned', returntask);
        console.log('Task List already', this.taskList);
        this.taskList.splice(0, 0, returntask);
      });
  }
}
