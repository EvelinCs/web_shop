import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/cart/cart.service';
import { AuthService } from 'src/app/services/auth-service.service';
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

  constructor(private cartService: CartService, private router: Router, private auth: AuthService){}

  addToCart(cartElement: Product | FoodProduct){

    if(this.auth.userLoggedIn) {
    var cartItem = new CartProduct(cartElement.id, cartElement.name, cartElement.price, cartElement.image,
      1, cartElement.price, "");

    this.cartService.addToCart(cartItem);
    this.router.navigateByUrl('/cart');
    } else {
      this.router.navigateByUrl('/login');
    }
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

  onRatingAdded(productId: string, newRating: number) {
    let product = this.foodProduct.find(p => p.id === productId);
    if (product) {
        //TODO

      // Itt frissítheti az adatbázist az új értékelésekkel.

      
    }
  }

}
