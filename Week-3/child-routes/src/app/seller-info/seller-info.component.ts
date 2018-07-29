import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-seller-info',
  template: `
    The seller is Jean-Luc: ID-{{ sellerID }}
  `,
  styles: [ `
    :host { 
      background: white;
      border-radius: 5px;
      padding: 10px;
      margin: 30px 0 30px 0;
    }
  `
  ]
})
export class SellerInfoComponent implements OnInit {

  sellerID: string;

  constructor(route: ActivatedRoute) {
    this.sellerID = route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
  }

}