import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DogFoodComponent } from './dog-food.component';

import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { StarRatingModule } from '../../shared/star-rating/star-rating.module';




@NgModule({
  declarations: [
    DogFoodComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    StarRatingModule
  ],
  exports: [
    DogFoodComponent
  ]
})
export class DogFoodModule { }
