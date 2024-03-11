import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdListComponent } from './prod-list.component';
import { AppRoutingModule } from '../app-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AddProductComponent } from './add-product/add-product.component';
import { AddProductModule } from './add-product/add-product.module';



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
    AddProductModule
  ], 
  exports: [ProdListComponent]
})
export class ProdListModule { }
