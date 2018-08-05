import { Injectable } from '@angular/core';
import { Fruit } from './fruit';
import {Observable, of} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FruitService {

  fruits: Fruit[] = [
    {id: 3543, name: "Apple", pricePerPound: "4.10", quantity: 12 },
    {id: 3543, name: "Pear", pricePerPound: "5.87", quantity: 6 },
    {id: 3543, name: "Grapes", pricePerPound: "3.42", quantity: 1 },
    {id: 3543, name: "Grapefruit", pricePerPound: "4.52", quantity: 4 },
    {id: 3543, name: "Lime", pricePerPound: "8.78", quantity: 5 },
  ]

  constructor() { }

  getFruits(): Observable<Fruit[]>{
    return of(this.fruits);
  }
}
