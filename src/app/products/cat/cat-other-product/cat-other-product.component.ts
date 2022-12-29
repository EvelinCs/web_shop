import { Component } from '@angular/core';
import { CartService } from 'src/app/cart/cart.service';
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

  constructor(private cartService: CartService){}

  addToCart(cartElement: Product | FoodProduct){

    var cartItem = new CartProduct(cartElement.id, cartElement.name, cartElement.price, cartElement.image,
      1, cartElement.price, "");

    this.cartService.addToCart(cartItem);
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

}
