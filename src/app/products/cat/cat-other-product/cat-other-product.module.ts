import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatOtherProductComponent } from './cat-other-product.component';

import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { StarRatingModule } from '../../shared/star-rating/star-rating.module';



@NgModule({
  declarations: [
    CatOtherProductComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    StarRatingModule
  ],
  exports: [
    CatOtherProductComponent
  ]
})
export class CatOtherProductModule { }
