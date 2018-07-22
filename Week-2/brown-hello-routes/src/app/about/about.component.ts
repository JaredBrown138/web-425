import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
    <h1>
      The About Page Welcomes You!
    </h1>
  `,
  styles: [`
    h1{
      color: blue;
      margin-top: 20px;
      margin-left: 30px;
    }
  `
  ]
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
