import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <h1>
      The Home Page Welcomes You!
    </h1>
  `,
  styles: [`
    h1{
      color: green;
      margin-top: 20px;
      margin-left: 30px;
    }
  `
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
