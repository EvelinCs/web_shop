import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DogOtherProductComponent } from './dog-other-product.component';

import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { StarRatingModule } from '../../shared/star-rating/star-rating.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    DogOtherProductComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule, 
    StarRatingModule,
    RouterModule
  ],
  exports: [
    DogOtherProductComponent
  ]
})
export class DogOtherProductModule { }
