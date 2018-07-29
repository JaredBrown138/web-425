import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <div class="container">
      <h1>Welcome to ShopAngular.com!</h1>
      <p>An exclusive shopping experience! (Please Login)</p>  
    </div>
  `,
  styles: [ `
    .container {
      background-color: lightgray;
      margin: 5% 15% 0 15%;
      padding: 100px;
    }
    h1{
      margin: 0 0 30px 0;
    }
    p{
      margin: 30px 0 0 0;
    }
  `
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
