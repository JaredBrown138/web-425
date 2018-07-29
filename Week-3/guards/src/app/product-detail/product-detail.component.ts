import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'product-detail',
  template: `
  <div class="product">
    <h1>Product Detail Search</h1>
    <input  placeholder="Search Detail" type="text" [formControl]="name">
    </div>
  `,
  styles: [ `
    .product {
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

  `]
})
export class ProductDetailComponent implements OnInit {

  name: FormControl = new FormControl();

  constructor() { }

  ngOnInit() {
  }

}