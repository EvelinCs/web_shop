import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { ConfirmDeleteDialogComponent } from './confirm-delete-dialog.component';



@NgModule({
  declarations: [ConfirmDeleteDialogComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule
  ], 
  exports: [ConfirmDeleteDialogComponent]
})
export class ConfirmDeleteDialogModule { }
