import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'moshTuts';
  phoneno : string = '';
  countryValue : any;
  countryToCodes : any = [
    {country : 'India',code : '+91'},
    {country : 'United Kingdom	',code : '+44'},
    {country : 'United States',code : '+1'},
    {country : 'UAE',code : '+971'}
  ];
  countryChange(){
    this.phoneno = '';
  }
}


