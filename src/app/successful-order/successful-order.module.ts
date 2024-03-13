import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuccessfulOrderComponent } from './successful-order.component';
import { MatButtonModule } from '@angular/material/button';
import { AppRoutingModule } from '../app-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [SuccessfulOrderComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    AppRoutingModule,
    MatCardModule,
    MatIconModule,
    MatTableModule,
  ],
  exports: [SuccessfulOrderComponent]
})
export class SuccessfulOrderModule { }
