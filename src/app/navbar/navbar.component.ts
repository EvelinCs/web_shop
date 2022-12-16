import { Component } from '@angular/core';
import { CartItemsQuantityService } from '../services/cart-items-quantity.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(public cartService: CartItemsQuantityService) {}

}
