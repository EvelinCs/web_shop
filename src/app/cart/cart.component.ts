import { Component, OnInit } from '@angular/core';
import { CartItemsQuantityService } from '../services/cart-items-quantity.service';
import { CartProduct } from '../shared/models/cartProduct';
import { CartService } from './cart.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit{

  displayedColumns: string[] = ['image', 'name', 'price', 'quantity', 'subtotal', 'deleteButton'];

  cartItems = this.cartService.getProducts();

  constructor(private cartQuantityService: CartItemsQuantityService, private cartService: CartService) {}

  ngOnInit(): void {
    this.cartQuantityService.cartItems_quantity = this.countCartItems();

  }

  countCartItems(): number{
    let i = 0;
    for (let element of this.cartItems) {
      i += element.quantity;
    }
    return i;
  }

  incrementItem(cartItem: CartProduct) {

    cartItem.quantity++;
    this.cartQuantityService.cartItems_quantity = this.countCartItems();
  }

  decrementItem(cartItem: CartProduct) {
    if (cartItem.quantity > 1 ) {
      cartItem.quantity--;
      this.cartQuantityService.cartItems_quantity = this.countCartItems();
    }
  }

  deleteItemFromCart(cartItem: CartProduct) {
    for (let element of this.cartItems){
      if(element.name === cartItem.name){
        element.quantity = 1; //mert különben ha újra kosárba rakjuk, akkor a növelt mennyiséggel kerül bele
      }
    }
    this.cartItems = this.cartItems.filter(i => i.name !== cartItem.name);
    this.cartService.cartItems = this.cartService.cartItems.filter(i => i.name !== cartItem.name);  
    //azért kell a cartService-ből is kitörölni, mert különben a törlés után ebből nem törlődik ki és többször is hozzáadja.
    
    this.cartQuantityService.cartItems_quantity = this.countCartItems();
  }
}
