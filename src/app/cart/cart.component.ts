import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartItemsQuantityService } from '../services/cart-items-quantity.service';
import { CartProduct } from '../shared/models/cartProduct';
import { CartService } from './cart.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit{

  totalPrice: number;

  displayedColumns: string[] = ['image', 'name', 'price', 'quantity', 'subtotal', 'deleteButton'];

  cartItems = this.cartService.getProducts();

  constructor(private cartQuantityService: CartItemsQuantityService, private cartService: CartService) {
    this.totalPrice = 0;
    this.countPrice();
  }

  ngOnInit(): void {
    this.cartQuantityService.cartItems_quantity = this.countCartItems();
  }

  countPrice(){
    this.totalPrice = 0;
    for( let element of this.cartItems){
      this.totalPrice += (element.quantity * element.price);
    }
    Math.round(this.totalPrice * 100) / 100;

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
    this.countPrice();
  }

  decrementItem(cartItem: CartProduct) {
    if (cartItem.quantity > 1 ) {
      cartItem.quantity--;
      this.cartQuantityService.cartItems_quantity = this.countCartItems();
      this.countPrice();
    }
  }

  order(){
    //TODO
    console.log("order");
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
    this.countPrice();
  }
}
