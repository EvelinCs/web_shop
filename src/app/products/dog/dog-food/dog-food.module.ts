import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DogFoodComponent } from './dog-food.component';

import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {NgxStarRatingModule} from 'ngx-star-rating';



@NgModule({
  declarations: [
    DogFoodComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    NgxStarRatingModule
  ],
  exports: [
    DogFoodComponent
  ]
})
export class DogFoodModule { }
