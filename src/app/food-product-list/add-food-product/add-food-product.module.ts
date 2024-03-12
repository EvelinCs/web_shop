import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddFoodProductComponent } from './add-food-product.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';



@NgModule({
  declarations: [AddFoodProductComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatIconModule,
    MatInputModule
  ], 
  exports: [AddFoodProductComponent]
})
export class AddFoodProductModule { }
