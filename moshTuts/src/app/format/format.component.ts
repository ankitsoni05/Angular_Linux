import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-format',
  templateUrl: './format.component.html',
  styleUrls: ['./format.component.css']
})
export class FormatComponent implements OnInit {

  restaurent = {"menu": {
    "items": [
        {
            "name":"coke",
            "qty": 20,
            "category":"drinks",
            "sizes":["small","large"]
        },
        {
            "name":"pepsi",
            "qty": 20,
            "category":"drinks",
            "sizes":["small","large"]
        },
        {
            "name":"water",
            "qty": 20,
            "category":"drinks",
            "sizes":["small","large"]
        },
        {
            "name":"hamburger",
            "qty": 40,
            "category":"junk food",
            "sizes":["small","large"]
        },
        {
            "name":"fries",
            "qty": 20,
            "category":"junk food",
            "sizes":["small","large"]
        },
        {
            "name":"pizza",
            "qty": 20,
            "category":"junk food",
            "sizes":["small","large"]
        }
    ]
}}

  constructor() { }

  ngOnInit(): void {
    console.log(this.restaurent);
  }

}
