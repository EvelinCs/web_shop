import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdListComponent } from './prod-list.component';
import { AppRoutingModule } from '../app-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AddProductModule } from './add-product/add-product.module';
import { EditProductComponent } from './edit-product/edit-product/edit-product.component';
import { EditProductModule } from './edit-product/edit-product/edit-product.module';



@NgModule({
  declarations: [
    ProdListComponent,
    
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatCardModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    AddProductModule,
    EditProductModule
  ], 
  exports: [ProdListComponent]
})
export class ProdListModule { }
