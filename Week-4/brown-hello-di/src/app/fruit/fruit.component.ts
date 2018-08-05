import { Component, OnInit } from '@angular/core';
import { Fruit } from '../fruit/fruit';
import { FruitService } from './fruit.service';

@Component({
  selector: 'app-fruit',
  template: `
    <div class="container">
      <div class="row">
        <h2>Fruits</h2>
        <table class="table table-hover table-striped">
          <thead class="tbl-header">
            <tr>
              <th>ID</th>
              <th>Nanme</th>
              <th>Color</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{{ fruit.id }}</td>
              <td>{{ fruit.name }}</td>
              <td>{{ fruit.color }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `,
  styles: [`
    .tbl-header {
      background-color: #28a745;
      color: white; 
    }
  `],
  providers: [FruitService]
})
export class FruitComponent implements OnInit {

  fruit: Fruit;

  constructor(fruitService: FruitService) {
    this.fruit = fruitService.getFruit();
  }

  ngOnInit() {
  }

}
