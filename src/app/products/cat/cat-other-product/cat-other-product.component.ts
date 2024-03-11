import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/cart/cart.service';
import { AuthService } from 'src/app/services/auth-service.service';
import { CartProduct } from 'src/app/shared/models/cartProduct';
import { FoodProduct, Product } from 'src/app/shared/models/products';

import {product} from'../../../shared/models/temp_data';

@Component({
  selector: 'app-cat-other-product',
  templateUrl: './cat-other-product.component.html',
  styleUrls: ['./cat-other-product.component.scss']
})
export class CatOtherProductComponent {

  catProduct?: Product[] = this.catProducts();

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

  catProducts() {
    let catProductArray: Product[] = [];
    for(let element of product){
      if(element.species === 'cat') {
        catProductArray.push(element);
      }
    }
    return catProductArray;
  }

  onRatingAdded(productId: string, newRating: number) {
    let product = this.catProduct.find(p => p.id === productId);
    if (product) {
        //TODO

      // Itt frissítheti az adatbázist az új értékelésekkel.

      
    }
  }

}
