import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartItemsQuantityService {

  public cartItems_quantity?: number;

  constructor() { }
}
