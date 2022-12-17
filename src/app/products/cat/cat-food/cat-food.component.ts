import { Component } from '@angular/core';
import { FoodProduct } from 'src/app/shared/models/products';

import {food} from'../../../shared/models/temp_data';

@Component({
  selector: 'app-cat-food',
  templateUrl: './cat-food.component.html',
  styleUrls: ['./cat-food.component.scss']
})
export class CatFoodComponent {

  foodProduct?: FoodProduct[] = this.catFood();

  catFood() {
    let catArray: FoodProduct[] = [];
    for(let element of food){
      if(element.species === 'cat') {
          catArray.push(element);
      }
    }
    return catArray;
  }

}
