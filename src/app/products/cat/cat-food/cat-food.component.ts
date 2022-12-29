import { Component } from '@angular/core';
import { CartService } from 'src/app/cart/cart.service';
import { CartProduct } from 'src/app/shared/models/cartProduct';
import { FoodProduct, Product } from 'src/app/shared/models/products';

import {food} from'../../../shared/models/temp_data';

@Component({
  selector: 'app-cat-food',
  templateUrl: './cat-food.component.html',
  styleUrls: ['./cat-food.component.scss']
})
export class CatFoodComponent {

  foodProduct?: FoodProduct[] = this.catFood();

  constructor(private cartService: CartService){}

  addToCart(cartElement: Product | FoodProduct){

    var cartItem = new CartProduct(cartElement.id, cartElement.name, cartElement.price, cartElement.image,
      1, cartElement.price, "");

    this.cartService.addToCart(cartItem);
  }

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
