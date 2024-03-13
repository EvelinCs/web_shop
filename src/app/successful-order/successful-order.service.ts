import { Injectable } from '@angular/core';
import { Order } from '../shared/models/order';

@Injectable({
  providedIn: 'root'
})
export class SuccessfulOrderService {
  orderSuccessful ?: Order;

  order(order: Order) {
    this.orderSuccessful = order;
  }

  constructor() { }

  getSuccessfulOrder(){
    return this.orderSuccessful;
  }
}
