import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodDetailComponent } from './food-detail.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { StarRatingModule } from '../shared/star-rating/star-rating.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [FoodDetailComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    StarRatingModule,
    RouterModule
  ], 
  exports: [FoodDetailComponent]
})
export class FoodDetailModule { }
