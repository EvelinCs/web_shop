import { Component, OnInit } from '@angular/core';
import { CartItemsQuantityService } from '../services/cart-items-quantity.service';

export interface CartItem {
  image: string;
  name: string;
  price: number;
  quantity: number;
  subtotal: number;
  deleteButton: string;
}

const CART_ITEM: CartItem[] = [
  {image: 'vmi', name: 'Kaja', price: 1000, quantity: 1, subtotal: 1000, deleteButton: ""},
  {image: 'vmi', name: 'Kaja2', price: 3000, quantity: 1, subtotal: 3000, deleteButton: ""},
  {image: 'vmi', name: 'Kaja3', price: 4000, quantity: 1, subtotal: 4000, deleteButton: ""},
];

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit{
  displayedColumns: string[] = ['image', 'name', 'price', 'quantity', 'subtotal', 'deleteButton'];
  cartItems = CART_ITEM;

  constructor(private cartService: CartItemsQuantityService) {}

  ngOnInit(): void {
    this.cartService.cartItems_quantity = this.countCartItems();
  }

  countCartItems(): number{
    let i = 0;
    for (let element of CART_ITEM) {
      i += element.quantity;
    }
    return i;
  }

  incrementItem(cartItem: CartItem) {
    cartItem.quantity++;
    this.cartService.cartItems_quantity = this.countCartItems();
  }

  decrementItem(cartItem: CartItem) {
    if (cartItem.quantity > 1 ) {
      cartItem.quantity--;
      this.cartService.cartItems_quantity = this.countCartItems();
    }
  }

  deleteItemFromCart(cartItem: CartItem) {
    console.log(cartItem.name + " deleted from cart");
    this.cartService.cartItems_quantity = this.countCartItems();
  }
}
