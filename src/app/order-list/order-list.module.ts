import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderListComponent } from './order-list.component';
import { AppRoutingModule } from '../app-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ConfirmDeleteDialogModule } from '../confirm-delete-dialog/confirm-delete-dialog.module';



@NgModule({
  declarations: [OrderListComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatCardModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    ConfirmDeleteDialogModule,
  ],
  exports: [OrderListComponent]
})
export class OrderListModule { }
