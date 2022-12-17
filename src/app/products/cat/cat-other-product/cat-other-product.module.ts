import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatOtherProductComponent } from './cat-other-product.component';

import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    CatOtherProductComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [
    CatOtherProductComponent
  ]
})
export class CatOtherProductModule { }
