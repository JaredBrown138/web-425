import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  template: `
    <h1>
      The Contact Page Welcomes You!
    </h1>
  `,
  styles: [`
    h1{
      color: red;
      margin-top: 20px;
      margin-left: 30px;
    }
  `
  ]
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
