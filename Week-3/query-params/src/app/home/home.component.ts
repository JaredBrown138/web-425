import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <div class="container">
      <div class="row">
        <h2>The Best Home Page, Ever.</h2>
      </div>
    </div>
  `,
  styles: [ `
  .container {
    margin-top: 40px;
    text-align: center; 
  }
  h2 {
    width: 100%;
    margin: auto;
    font-size: 55px;
    text-align: center;
    color: magenta;
  }
  `
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
