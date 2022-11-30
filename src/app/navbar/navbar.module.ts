import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';

import { MenuModule } from './menu/menu.module';
import { AccountMenuModule } from './account-menu/account-menu.module';

import { MatToolbarModule } from '@angular/material/toolbar'; 
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AppRoutingModule } from '../app-routing.module';




@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,

    MenuModule,
    AccountMenuModule,

    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    AppRoutingModule
  ],
  exports: [ NavbarComponent]
})
export class NavbarModule { }
