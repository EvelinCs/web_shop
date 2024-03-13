import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderComponent } from './order.component';
import { MatButtonModule } from '@angular/material/button';
import { AppRoutingModule } from '../app-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { SuccessfulOrderModule } from '../successful-order/successful-order.module';



@NgModule({
  declarations: [OrderComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    AppRoutingModule,
    MatCardModule,
    MatTableModule,
    MatIconModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    SuccessfulOrderModule
  ], 
  exports: [OrderComponent]
})
export class OrderModule { }
