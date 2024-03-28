import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SaleComponent } from './sale.component';
import { AppRoutingModule } from '../app-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { StarRatingModule } from '../products/shared/star-rating/star-rating.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [SaleComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    StarRatingModule,
    RouterModule
  ], 
  exports: [SaleComponent]
})
export class SaleModule { }
