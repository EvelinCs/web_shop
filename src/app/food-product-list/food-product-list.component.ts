import { Component, OnInit } from '@angular/core';
import { FoodProductListService } from './food-product-list.service';
import { FoodProduct } from '../shared/models/products';
import { ConfirmDeleteDialogService } from '../confirm-delete-dialog/confirm-delete-dialog.service';
import { AuthService } from '../services/auth-service.service';
import { ListProductsService } from '../services/list-products.service';
import { EditFoodProductService } from './edit-food-product/edit-food-product.service';

@Component({
  selector: 'app-food-product-list',
  templateUrl: './food-product-list.component.html',
  styleUrls: ['./food-product-list.component.scss']
})
export class FoodProductListComponent implements OnInit {

  foodProdList: FoodProduct[] = [];

  displayedColumns: string[] = ['id', 'name', 'species', 'price', 'sale', 'brand', 'image', 'available', 'editButton', 'deleteButton'];

  constructor(private foodProductListService: FoodProductListService, private confirmDeleteDialogService: ConfirmDeleteDialogService,
     private authService: AuthService, private listProductsService: ListProductsService,
     private editFoodProductService: EditFoodProductService){}

  ngOnInit() {
    
    this.loadProducts();
  }

  loadProducts(){
    this.listProductsService.getFoodProducts().subscribe(data => {
      this.foodProdList = data;
    });
  }

  deleteProduct(element: FoodProduct): void {
    let dialogRef = this.confirmDeleteDialogService.openConfirmDialog('Are you sure you want to delete this item?');
  
    this.authService.getAuthenticatedUser().subscribe(user => {
      if (user) {
        //user is logged in
        dialogRef.afterClosed().subscribe(result => {
          if (result) {
            //user clicked yes
            this.foodProductListService.deleteProduct(element.id).then(() => {
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

  editFoodProduct(elementID: string, element: FoodProduct) {
    this.authService.getAuthenticatedUser().subscribe(user => {
      if (user) {
        //user is logged in
        this.editFoodProductService.editFoodProduct(elementID, element);
      } else {
        // user is not logged in
        console.error('User must sign in to edit data');
      }
    });
  }
}
