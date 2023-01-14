import { Component, OnInit } from '@angular/core';
import { User } from 'firebase/auth';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth-service.service';
import { CartItemsQuantityService } from '../services/cart-items-quantity.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{

  isLoggedIn: Boolean;

  constructor(public cartService: CartItemsQuantityService, private auth: AuthService) {
    

  }
  ngOnInit(): void {
    this.isLoggedIn = this.auth.userLoggedIn();
    

    if (this.isLoggedIn){
      alert('hello');
    }
  }

  





}
