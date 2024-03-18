import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/models/products';
import { ProdListService } from './prod-list.service';
import { ConfirmDeleteDialogService } from '../confirm-delete-dialog/confirm-delete-dialog.service';
import { AuthService } from '../services/auth-service.service';

@Component({
  selector: 'app-prod-list',
  templateUrl: './prod-list.component.html',
  styleUrls: ['./prod-list.component.scss']
})
export class ProdListComponent implements OnInit {

  prodList: Product[] = [];

  displayedColumns: string[] = ['id', 'name', 'species', 'price', 'sale', 'brand', 'image', 'available', 'editButton', 'deleteButton'];

  constructor(private prodListService: ProdListService, private confirmDeleteDialogService: ConfirmDeleteDialogService,
    private authService: AuthService){}

    ngOnInit() {
      this.loadProducts();
    }
  
    loadProducts(){
      this.prodListService.getProducts().subscribe(data => {
        this.prodList = data;
      });
    }

    deleteProduct(element: Product): void {
      const dialogRef = this.confirmDeleteDialogService.openConfirmDialog('Biztosan törölni szeretné ezt az elemet?');
    
      this.authService.getAuthenticatedUser().subscribe(user => {
        if (user) {
          //user is logged in
          dialogRef.afterClosed().subscribe(result => {
            if (result) {
              //user clicked yes
              this.prodListService.deleteProduct(element.id).then(() => {
                this.loadProducts();
              }).catch(error => {
                console.error("Item couldn't be deleted", error);
              });
            
            }
          });
        } else {
          // user is not logged in
          console.error('User must sign in to delete data');
        }
      });
    }

  editProduct(elementID: string) {
    throw new Error('Method not implemented.');
  }

}
