import { Injectable } from '@angular/core';
import { CartProduct } from '../shared/models/cartProduct';
import { AuthService } from '../services/auth-service.service';
import { Order, OrderedItem } from '../shared/models/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  orderedProducts?: OrderedItem[] = [];

  constructor() { }

  order(products: OrderedItem[]){
    //TODO
      console.log("order");

    this.orderedProducts = products;
  }

  getOrders() {
    return this.orderedProducts;
  }
}
