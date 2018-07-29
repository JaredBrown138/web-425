import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-user',
  template: `
    <div class="container">
      <div class="row">
        <h2>Welcome back User {{ userId }}, It's great to have you back.</h2>
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
    font-size: 35px;
    text-align: center;
    color: gray;
  }
  `]
})
export class UserComponent implements OnInit {
  userId: string;
  constructor(route: ActivatedRoute) {
    this.userId = route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
  }

}