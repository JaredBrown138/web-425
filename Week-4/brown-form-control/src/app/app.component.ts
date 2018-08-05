import { Component } from '@angular/core';
import {FormControl} from "@angular/forms";
import { debounceTime } from "rxjs/operators";

@Component({
  selector: 'app-root',
  template:`
  <nav class="navbar navbar-expand-sm bg-danger navbar-dark">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" href="#">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">About</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Contact</a>
      </li>
    </ul>
  </nav>
  <br/><br/><br/>
  <div class="container-fluid two-way-form">
      <h2 class="txt-bold">Observables</h2><br/>
      <div class="form-group">
        <label for="txtStockPrice">Stock Price: </label>
        <input type="text" 
             class="form-control" 
             id="txtStockPrice" 
             placeholder="Enter stock price..." 
             [formControl]="searchInput">
      </div>
      <div class="col">
          <h4 class="txt-bold">Results: {{ convertedStockPrice }}</h4>  
      </div>
  </div>
  `,
  styles: [
    `
    .two-way-form {
        width: 50%; 
      }
    .txt-bold{
      font-weight: bold;
    }
    h4{
      background-color: lightgreen;
      border: 1px solid darkgreen;
      padding: 5px;
      border-radius: 10px;
    }  
    `]
})
export class AppComponent {
  searchInput = new FormControl('');
  convertedStockPrice: string;

  constructor() {
    this.searchInput.valueChanges.pipe(debounceTime(500)).subscribe(stock => {
      this.getStockQuoteFromServer(stock)
    });
  }

  getStockQuoteFromServer(stock: string) {
    this.convertedStockPrice =
      `The price of ${stock} is ${(100 * Math.random()).toFixed(4)}`;
  }

}