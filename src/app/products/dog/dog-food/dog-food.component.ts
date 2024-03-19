import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/cart/cart.service';
import { AuthService } from 'src/app/services/auth-service.service';
import { CartProduct } from 'src/app/shared/models/cartProduct';
import { FoodProduct, Product } from 'src/app/shared/models/products';

import {food} from'../../../shared/models/temp_data';
import { ListProductsService } from 'src/app/services/list-products.service';

@Component({
  selector: 'app-dog-food',
  templateUrl: './dog-food.component.html',
  styleUrls: ['./dog-food.component.scss']
})
export class DogFoodComponent implements OnInit {

  dogFoodProducts?: FoodProduct[] = [];
  

  constructor(private cartService: CartService, private router: Router, private auth: AuthService,
    private listProductsService: ListProductsService){}

  ngOnInit(): void {
    this.getDogFood();
  }

  getDogFood(){
    this.listProductsService.getDogFoodProducts().subscribe(data => {
      this.dogFoodProducts = data;
    });
  }

  addToCart(cartElement: Product | FoodProduct){

    if(this.auth.userLoggedIn && cartElement.available > 0) {
      let cartItem = new CartProduct(cartElement.id, cartElement.name, cartElement.price, cartElement.image,
        1, cartElement.price, ""); 
  
      

      this.cartService.addToCart(cartItem);
      this.router.navigateByUrl('/cart'); 

    } else {
      this.router.navigateByUrl('/login'); 
    }    
  }


  onRatingAdded(productId: string, newRating: number) {
    let product = this.dogFoodProducts.find(p => p.id === productId);
    if (product) {
        //TODO

      // Itt frissítheti az adatbázist az új értékelésekkel.

      
    }
  }
}
