import { Component, OnInit } from '@angular/core';
import { FoodProduct, Product } from '../shared/models/products';
import { ConfirmDeleteDialogService } from '../confirm-delete-dialog/confirm-delete-dialog.service';
import { AuthService } from '../services/auth-service.service';
import { FavouritesService } from './favourites.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss']
})
export class FavouritesComponent implements OnInit {

  favouriteFoods?: FoodProduct[] = [];
  favouriteProducts?: Product[] = [];

  currentUserId?: string;

  displayedFoodColumns: string[] = ['foodImage', 'foodName', 'foodTotalPrice', 'jumpToProduct', 'deleteButton'];
  displayedProductColumns: string[] = ['productImage', 'productName', 'totalPrice', 'jumpToProduct', 'deleteButton'];

  constructor(private confirmDeleteDialogService: ConfirmDeleteDialogService, private authService: AuthService,
    private favouritesService: FavouritesService){}

    ngOnInit() {
      this.currentUserId = this.authService.currentUserId;

      this.loadFavouriteFoods(this.currentUserId);
      this.loadFavouriteProducts(this.currentUserId);
    }

    loadFavouriteFoods(userId: string){
      this.favouritesService.getFavouriteFoods(userId).subscribe(data => {
        this.favouriteFoods = data;
      });
    }

    loadFavouriteProducts(userId: string){
      this.favouritesService.getFavouriteProducts(userId).subscribe(data => {
        this.favouriteProducts = data;
      });
    }


  deleteFavouriteFood(elementId: string) {
    let dialogRef = this.confirmDeleteDialogService.openConfirmDialog('Are you sure you want to unlike this product?');

    this.authService.getAuthenticatedUser().subscribe(user => {
      if(user){
        this.currentUserId = this.authService.currentUserId;
        dialogRef.afterClosed().subscribe(result => {
          if (result) {
            this.favouritesService.deleteFavouriteFood(elementId, this.currentUserId).then(() => {
              this.loadFavouriteFoods(this.currentUserId);
            }).catch(error => {
              console.error("Error removing favourite product: ", error);
            });
          }
        });
      } else {
        console.error("user must be logged in to remove favourite product");
      }
    });
  }

    deleteFavouriteProduct(elementId: string) {
      let dialogRef = this.confirmDeleteDialogService.openConfirmDialog('Are you sure you want to unlike this product?');

      this.authService.getAuthenticatedUser().subscribe(user => {
      if(user){
        this.currentUserId = this.authService.currentUserId;
        dialogRef.afterClosed().subscribe(result => {
          if (result) {
            this.favouritesService.deleteFavouriteProduct(elementId, this.currentUserId).then(() => {
              this.loadFavouriteProducts(this.currentUserId);
            }).catch(error => {
              console.error("Error removing favourite product: ", error);
            });
          }
        });
      } else {
        console.error("user must be logged in to remove favourite product");
      }
    });
    }
}
