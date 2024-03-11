import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';

import { NavbarModule } from '../navbar/navbar.module';
import { AppRoutingModule } from '../././app-routing.module';
import { CatOtherProductModule } from '../products/cat/cat-other-product/cat-other-product.module';
import { CatFoodModule } from '../products/cat/cat-food/cat-food.module';
import { DogFoodModule } from '../products/dog/dog-food/dog-food.module';
import { DogOtherProductModule } from '../products/dog/dog-other-product/dog-other-product.module';
import { StarRatingModule } from '../products/shared/star-rating/star-rating.module';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    NavbarModule,
    AppRoutingModule,
    CatOtherProductModule,
    CatFoodModule,
    DogFoodModule,
    DogOtherProductModule, 
    StarRatingModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
