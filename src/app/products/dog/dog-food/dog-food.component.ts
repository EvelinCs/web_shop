import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/cart/cart.service';
import { AuthService } from 'src/app/services/auth-service.service';
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
