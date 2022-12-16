import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';

import { MenuModule } from './menu/menu.module';
import { AccountMenuModule } from './account-menu/account-menu.module';
import { CartModule} from '../cart/cart.module';

import { MatToolbarModule } from '@angular/material/toolbar'; 
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AppRoutingModule } from '../app-routing.module';
import {MatBadgeModule} from '@angular/material/badge'; 




@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,

    MenuModule,
    AccountMenuModule,
    CartModule,

    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    AppRoutingModule,
    MatBadgeModule
    
  ],
  exports: [ NavbarComponent]
})
export class NavbarModule { }
