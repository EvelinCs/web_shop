import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DogFoodComponent } from './dog-food.component';



@NgModule({
  declarations: [
    DogFoodComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DogFoodComponent
  ]
})
export class DogFoodModule { }
