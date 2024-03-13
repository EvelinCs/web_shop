import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartItemsQuantityService } from '../services/cart-items-quantity.service';
import { CartProduct } from '../shared/models/cartProduct';
import { CartService } from './cart.service';
import { OrderService } from '../order/order.service';
import { AuthService } from '../services/auth-service.service';
import { Order, OrderedItem } from '../shared/models/order';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit{

  totalPrice: number;

  displayedColumns: string[] = ['image', 'name', 'price', 'quantity', 'subtotal', 'deleteButton'];

  cartItems = this.cartService.getProducts();

  

  constructor(private cartQuantityService: CartItemsQuantityService, private cartService: CartService, 
    private orderService: OrderService,  private router: Router) {
    this.totalPrice = 0;
    this.countPrice();
  }

  order(cartItems: CartProduct[]){
    //TODO
    if(cartItems.length === 0){
      console.log("Your cart is empty");

    } else {
      let orders: OrderedItem[] = [];
      for(let item of cartItems){
        let order = new OrderedItem(item.id, item.name, item.price, item.image, item.quantity, item.subtotal);
        orders.push(order);
      }
      this.orderService.order(orders);
      this.router.navigateByUrl('/order');
    }
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
