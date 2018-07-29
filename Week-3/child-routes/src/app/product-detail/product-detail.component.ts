import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-product-detail',
  template: `
    <div class="product">
      <h1>Product ID: {{productId}}</h1>
      <router-outlet></router-outlet>
      <p><a [routerLink]="['./seller', sellerId]">Seller's Info</a></p>
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
  `
  ]
})
export class ProductDetailComponent implements OnInit {
  
  productId: string;
  sellerId = 3824;

  constructor(route: ActivatedRoute) {
    this.productId = route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
  }

}
