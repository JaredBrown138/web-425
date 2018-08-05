import { Injectable } from '@angular/core';
import { Fruit } from '../fruit/fruit';
import { fromEventPattern } from '../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class FruitService {
  getFruit(): Fruit{
    return new Fruit(1234, "Apple", "Green");
  }
}
