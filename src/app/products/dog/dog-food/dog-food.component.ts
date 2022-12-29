import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart/cart.service';
import { CartProduct } from 'src/app/shared/models/cartProduct';
import { FoodProduct, Product } from 'src/app/shared/models/products';

import {food} from'../../../shared/models/temp_data';

@Component({
  selector: 'app-dog-food',
  templateUrl: './dog-food.component.html',
  styleUrls: ['./dog-food.component.scss']
})
export class DogFoodComponent {

  foodProduct?: FoodProduct[] = this.dogFood();

  constructor(private cartService: CartService){}

  addToCart(cartElement: Product | FoodProduct){

    var cartItem = new CartProduct(cartElement.id, cartElement.name, cartElement.price, cartElement.image,
      1, cartElement.price, "");

    this.cartService.addToCart(cartItem);
  }

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
