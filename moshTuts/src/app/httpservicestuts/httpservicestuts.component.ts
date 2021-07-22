import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PostsService } from '../services/posts.service';

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
    taskName: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
    createdBy: new FormControl('', [Validators.required]),
    startDate: new FormControl('', [Validators.required]),
    endDate: new FormControl('', [Validators.required]),
    priority: new FormControl('', [Validators.required]),
  });
  constructor(private Service: PostsService) {}

  ngOnInit(): void {
    this.Service.getAllTasks().subscribe(
      (respo) => {
        console.log(respo);
        this.taskList = respo;
        if (this.taskList.length <= 0) {
          this.Service.ShowSnackBar('Currently no task found', 'warning');
        } else {
          this.Service.ShowSnackBar('Successfully loaded all tasks', 'success');
        }
      },
      (error) => {
        if (error.status === 400) {
          this.Service.ShowSnackBar(
            'Something wrong happend at Server contact Admin',
            'warning'
          );
        }
      }
    );
  }
  submitTask() {
    var payload = {
      TaskName: this.taskForm.value.taskName,
      CreatedBy: this.taskForm.value.createdBy,
      CreatedDate: new Date(),
      StartDate: this.taskForm.value.startDate,
      EndDate: this.taskForm.value.endDate,
      priority: this.taskForm.value.priority,
    };
    this.Service.createTask(payload).subscribe((returntask) => {
      this.taskList.splice(0, 0, returntask);
      this.Service.ShowSnackBar(
        `Task ${this.taskForm.value.taskName} added successfully..!`,
        'success'
      );
    });
  }
  DeleteTask(task: any) {
    this.Service.deleteTask(task.id).subscribe(
      (returnval) => {
        const removeIndex = this.taskList.findIndex(
          (item: any) => item.id === task.id
        );
        this.taskList.splice(removeIndex, 1);
        this.Service.ShowSnackBar(`Task ${task.taskName} removed..!`, 'danger');
      },
      (error) => {
        if (error.status === 404) {
          this.Service.ShowSnackBar(
            `Seems Like task ${task.taskName} is already deleted`,
            'danger'
          );
        }
      }
    );
  }
}
