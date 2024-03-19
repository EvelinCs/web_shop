import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodProductListComponent } from './food-product-list.component';
import { AppRoutingModule } from '../app-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AddFoodProductComponent } from './add-food-product/add-food-product.component';
import { AddFoodProductModule } from './add-food-product/add-food-product.module';
import { ConfirmDeleteDialogModule } from '../confirm-delete-dialog/confirm-delete-dialog.module';
import { EditFoodProductModule } from './edit-food-product/edit-food-product.module';



@NgModule({
  declarations: [FoodProductListComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatCardModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    AddFoodProductModule,
    ConfirmDeleteDialogModule,
    EditFoodProductModule
  ], 
  exports: 
  [FoodProductListComponent]
})
export class FoodProductListModule { }
