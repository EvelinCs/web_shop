import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/cart/cart.service';
import { AuthService } from 'src/app/services/auth-service.service';
import { CartProduct } from 'src/app/shared/models/cartProduct';
import { FoodProduct, Product } from 'src/app/shared/models/products';

import {product} from'../../../shared/models/temp_data';

@Component({
  selector: 'app-dog-other-product',
  templateUrl: './dog-other-product.component.html',
  styleUrls: ['./dog-other-product.component.scss']
})
export class DogOtherProductComponent {

  dogProduct?: Product[] = this.dogProducts();

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

  dogProducts() {
    let dogProductArray: Product[] = [];
    for(let element of product){
      if(element.species === 'dog') {
        dogProductArray.push(element);
      }
    }
    return dogProductArray;
  }

}
