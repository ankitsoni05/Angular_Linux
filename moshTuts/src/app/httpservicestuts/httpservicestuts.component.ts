import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-httpservicestuts',
  templateUrl: './httpservicestuts.component.html',
  styleUrls: ['./httpservicestuts.component.css'],
})
export class HttpservicestutsComponent implements OnInit {
  constructor(private clientHttp: HttpClient) {}

  ngOnInit(): void {
    this.clientHttp.get('http://localhost:5230/courses').subscribe((respo) => {
      console.log(respo);
    });
  }
}
