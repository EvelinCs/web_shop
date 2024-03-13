import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';

import {MatButtonModule} from '@angular/material/button';
import {AppRoutingModule} from '../app-routing.module';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import { OrderModule } from '../order/order.module';



@NgModule({
  declarations: [
    CartComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    AppRoutingModule,
    MatCardModule,
    MatTableModule,
    MatIconModule,
    OrderModule
  ]
})
export class CartModule { }
