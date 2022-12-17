import { Component } from '@angular/core';
import { FoodProduct } from 'src/app/shared/models/products';

import {food} from'../../../shared/models/temp_data';

@Component({
  selector: 'app-dog-food',
  templateUrl: './dog-food.component.html',
  styleUrls: ['./dog-food.component.scss']
})
export class DogFoodComponent{

  foodProduct?: FoodProduct[] = this.dogFood();

  dogFood() {
    let dogArray: FoodProduct[] = [];
    for(let element of food){
      if(element.species === 'dog') {
          dogArray.push(element);
      }
    }
    return dogArray;
  }

}
