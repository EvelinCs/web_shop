import { Injectable } from '@angular/core';
import { CartProduct } from '../shared/models/cartProduct';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  cartItems?: CartProduct[] = [];

  addToCart(item: CartProduct) {
    
    var index = this.cartItems.findIndex(x => x.name === item.name);

    if(index === -1){ //there is no such item in cart
      this.cartItems.push(item);
    } else {  //the item is already in the cart

      /*let num = this.cartItems.filter(x => x.name === item.name).length;

      this.cartItems.forEach(x =>  {
      (x.name === item.name) ? x.quantity = num++ : x.quantity++
   });*/

      this.cartItems = this.cartItems.filter(i => i.name !== item.name);
      item.quantity++; 
      this.cartItems.push(item);
    }
    
  }

  getProducts(){
    return this.cartItems;
  }
}
