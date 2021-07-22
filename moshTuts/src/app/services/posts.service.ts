import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  endpointUrl = 'https://localhost:5001/';
  headers = { 'content-type': 'application/json' };
  constructor(private clientHttp: HttpClient, private _snackBar: MatSnackBar) {}

  getAllTasks() {
    return this.clientHttp.get(this.endpointUrl + 'AllTasks');
  }

  createTask(payload: any) {
    return this.clientHttp.post(
      this.endpointUrl + 'CreateTask',
      JSON.stringify(payload),
      {
        headers: this.headers,
      }
    );
  }

  deleteTask(taskId: any) {
    return this.clientHttp.delete(this.endpointUrl + 'DeleteTask/' + taskId);
  }

  ShowSnackBar(message: string, type: string) {
    this._snackBar.open(message, '', {
      duration: 2000,
      horizontalPosition: 'right',
      verticalPosition: 'bottom',
      panelClass: [type],
    });
  }
}
