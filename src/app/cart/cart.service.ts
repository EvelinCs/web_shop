import { Injectable } from '@angular/core';
import { CartProduct } from '../shared/models/cartProduct';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  cartItems?: CartProduct[] = [];

  addToCart(item: CartProduct) {
    
    var index = this.cartItems.findIndex(x => x.name === item.name);  //benne van e már a termék

    if(index === -1){ //ha nincs benne, belerakjuk
      this.cartItems.push(item);
    } else {  //ha már benne van a kosárban, töröljük onnan és hozzáadjuk a megnövelt mennyiséggel

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
