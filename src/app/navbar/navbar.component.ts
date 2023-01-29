import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth-service.service';
import { CartItemsQuantityService } from '../services/cart-items-quantity.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent{

  isLoggedIn: Boolean;

  constructor(public cartService: CartItemsQuantityService, public authService: AuthService) { }



}
