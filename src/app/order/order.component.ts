import { Component } from '@angular/core';
import { OrderService } from './order.service';
import { Order, OrderedItem } from '../shared/models/order';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../shared/models/user';
import { Router } from '@angular/router';
import { CartService } from '../cart/cart.service';
import { CartItemsQuantityService } from '../services/cart-items-quantity.service';
import { SuccessfulOrderService } from '../successful-order/successful-order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent {

  orderedItems = this.orderService.getOrders();

  totalPrice: number;

  displayedColumns: string[] = ['image', 'name', 'price', 'quantity', 'subtotal'];

  orderForm = new FormGroup({
    userName: new FormControl('', [Validators.required]),
    userEmail: new FormControl('', [Validators.required, Validators.email]),
    userAddress: new FormControl('', [Validators.required]), 
    userPhone: new FormControl('', [Validators.required, Validators.maxLength(11), Validators.minLength(10),Validators.pattern(/^06/)]), 
  });

  constructor(private orderService: OrderService, private router: Router, 
    private cartService: CartService, private cartItemsQuantityService: CartItemsQuantityService,
    private successfulOrderService: SuccessfulOrderService){
    this.totalPrice = 0;
    this.countPrice();
  }

  getOrderTime(): Date {
    return new Date();
  }

  countPrice(){
    this.totalPrice = 0;
    for( let element of this.orderedItems){
      this.totalPrice += (element.quantity * element.price);
    }
    Math.round(this.totalPrice * 100) / 100;

  }

  orderSend(items: OrderedItem[], orderTime: Date){
      let user = new User("id", this.userEmail.value, this.userName.value, this.userAddress.value, this.userPhone.value);
      /** TODO
       * adatbázishoz adni */

      let order = new Order(items, this.totalPrice, user, orderTime);

      this.successfulOrderService.order(order);

      this.cartService.cartItems = [];
      this.cartItemsQuantityService.cartItems_quantity = 0;
      this.router.navigateByUrl('/successfulOrder');
      

      console.log("sikeres rendelés");

  }

  get userName(){
    return this.orderForm.get('userName');
  }

  get userEmail(){
    return this.orderForm.get('userEmail');
  }

  get userAddress(){
    return this.orderForm.get('userAddress');
  }

  get userPhone(){
    return this.orderForm.get('userPhone');
  }

}
