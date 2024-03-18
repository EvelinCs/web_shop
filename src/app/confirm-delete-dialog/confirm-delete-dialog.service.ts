import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FoodProduct, Product } from '../shared/models/products';
import { ConfirmDeleteDialogComponent } from './confirm-delete-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class ConfirmDeleteDialogService {

  constructor(private dialog: MatDialog) { }


  openConfirmDialog(msg: string) {
    return this.dialog.open(ConfirmDeleteDialogComponent, {
      width: '400px',
      disableClose: true,
      data: {
        message: msg
      }
    });
  }
}
