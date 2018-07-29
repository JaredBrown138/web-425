import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-e404',
  template: `
    <div class="container">
      <div class="row">
        <h2>¯\\\_(⊙_ʖ⊙)_/¯ <br />404<br /> Page Not Found</h2>
      </div>
      <p>The page at the url {{url}} does not exist!</p>
    </div>
  `,
  styles: [`
    .container {
      margin-top: 40px;
      text-align: center; 
    }
    h2 {
      width: 100%;
      margin: auto;
      font-size: 55px;
      text-align: center;
    }
    p{
      margin-top: 30px;
    }
  `]
})
export class E404Component implements OnInit {
  url:string;
  

  constructor(location: Location) {
    this.url = location.path();
   }

  ngOnInit() {
    
  }

}
