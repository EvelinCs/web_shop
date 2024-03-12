import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatFoodComponent } from './cat-food.component';

import { AppRoutingModule } from '../../../app-routing.module';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { StarRatingModule } from '../../shared/star-rating/star-rating.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CatFoodComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    StarRatingModule,
    RouterModule
  ],
  exports: [
    CatFoodComponent
  ]
})
export class CatFoodModule { }
