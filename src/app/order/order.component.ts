import { Component, OnInit } from '@angular/core';
import { OrderService } from './order.service';
import { Order, OrderedItem } from '../shared/models/order';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../shared/models/user';
import { Router } from '@angular/router';
import { CartService } from '../cart/cart.service';
import { CartItemsQuantityService } from '../services/cart-items-quantity.service';
import { SuccessfulOrderService } from '../successful-order/successful-order.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { UserService } from '../services/user.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit{

  orderedItems = this.orderService.getOrders();
  totalPrice: number;

  currentUserId: string;
  currentUser: User;

  displayedColumns: string[] = ['image', 'name', 'price', 'quantity', 'subtotal'];

  orderForm = new FormGroup({
    userName: new FormControl('', [Validators.required]),
    userEmail: new FormControl('', [Validators.required, Validators.email]),
    userAddress: new FormControl('', [Validators.required]), 
    userPhone: new FormControl('', [Validators.required, Validators.maxLength(11), Validators.minLength(10),Validators.pattern(/^06/)]), 
  });

  constructor(private orderService: OrderService, private router: Router, 
    private cartService: CartService, private cartItemsQuantityService: CartItemsQuantityService,
    private successfulOrderService: SuccessfulOrderService, private afAuth: AngularFireAuth, 
    private userService: UserService, private afs: AngularFirestore) {
    this.totalPrice = 0;
    this.countPrice();
  }

  ngOnInit(): void {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.currentUserId = user.uid;

        this.userService.getUserById(this.currentUserId).subscribe(userData => {
          this.currentUser = userData;

          if (userData && userData.userName && userData.userEmail && userData.userAddress && userData.userPhone) {
            this.orderForm.patchValue({
              userName: userData.userName,
              userEmail: userData.userEmail,
              userAddress: userData.userAddress,
              userPhone: userData.userPhone
            });
          }
        });
      } else {
        // Ha nincs bejelentkezett felhasználó
        this.currentUserId = null; 
      }
    });    
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

  orderSend(items: OrderedItem[], orderTime: Date) {

    if(this.orderForm.valid && items.length > 0) {
      let id = this.afs.createId();
      let order = new Order(id, items, this.totalPrice, this.currentUser, orderTime);

      this.orderService.saveOrder(order);
      this.successfulOrderService.order(order);
      
      this.orderService.decreaseProductAvailabe(order.orderedItems);

      this.cartService.cartItems = [];
      this.cartItemsQuantityService.cartItems_quantity = 0;
      this.router.navigateByUrl('/successfulOrder');
      
    }
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
