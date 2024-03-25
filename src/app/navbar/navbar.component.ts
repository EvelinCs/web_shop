import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth-service.service';
import { CartItemsQuantityService } from '../services/cart-items-quantity.service';
import { ListProductsService } from '../services/list-products.service';
import { FoodProduct, Product } from '../shared/models/products';
import { combineLatest } from 'rxjs';
import { SearchService } from './search.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent{

  isLoggedIn: Boolean;

  constructor(public cartService: CartItemsQuantityService, public authService: AuthService, 
    private listProductService: ListProductsService, private searchService: SearchService, private router: Router) { }

    deleteSearch(){
      this.searchService.setSearchTerm("");
      this.searchService.setSearchedItems([]);
    }

    onSearch(searchedItem: string){
      this.searchService.setSearchTerm(searchedItem);

      this.searchService.getSearchTerm().subscribe(term => {

        if(term){
          this.router.navigate(['/home']);
          let foodProducts = this.listProductService.searchFoodProducts(term);
          let products = this.listProductService.searchProducts(term);
        
        combineLatest([foodProducts, products]).subscribe(([foodProducts, products]) => {
          this.searchService.setSearchedItems([...foodProducts, ...products]);
        });
        }
      });
      
    }

}
