import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DogOtherProductComponent } from './dog-other-product.component';

import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    DogOtherProductComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [
    DogOtherProductComponent
  ]
})
export class DogOtherProductModule { }
