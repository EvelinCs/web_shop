import { Injectable } from '@angular/core';
import { CartProduct } from '../shared/models/cartProduct';
import { FoodProduct, Product } from '../shared/models/products';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  cartItems?: CartProduct[] = [];
  
  addToCart(item: CartProduct) {
    
    
    let index = this.cartItems.findIndex(x => x.id === item.id);  //benne van e már a termék

    if(index === -1){ //ha nincs benne, belerakjuk
      this.cartItems.push(item);
    } else {  //ha már benne van a kosárban, töröljük onnan és hozzáadjuk a megnövelt mennyiséggel

      this.cartItems = this.cartItems.filter(i => i.id !== item.id);
      item.quantity++; 
      this.cartItems.push(item);
    }
    
  }

  getProducts(){
    return this.cartItems;
  }
}
