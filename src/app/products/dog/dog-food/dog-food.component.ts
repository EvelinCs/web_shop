import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/cart/cart.service';
import { AuthService } from 'src/app/services/auth-service.service';
import { CartProduct } from 'src/app/shared/models/cartProduct';
import { FoodProduct, Product } from 'src/app/shared/models/products';
import { ListProductsService } from 'src/app/services/list-products.service';
import { StarRatingService } from '../../shared/star-rating/star-rating.service';


@Component({
  selector: 'app-dog-food',
  templateUrl: './dog-food.component.html',
  styleUrls: ['./dog-food.component.scss']
})
export class DogFoodComponent implements OnInit {

  dogFoodProducts?: FoodProduct[] = [];
  currentUserId?: string;
  

  constructor(private cartService: CartService, private router: Router, private auth: AuthService,
    private listProductsService: ListProductsService, private starRatingService: StarRatingService){}

  ngOnInit(): void {
    this.getDogFood();
    this.currentUserId = this.auth.currentUserId;

  }

  getDogFood(){
    this.listProductsService.getDogFoodProducts().subscribe(data => {
      this.dogFoodProducts = data;
    });
  }
  
  addToCart(cartElement: Product | FoodProduct){

    if(this.auth.userLoggedIn && cartElement.available > 0) {
      let cartItem = new CartProduct(cartElement.id, cartElement.name, cartElement.price, cartElement.image,
        1, cartElement.price, cartElement.available); 
  
      
      this.cartService.addToCart(cartItem);
      this.router.navigateByUrl('/cart'); 

    } else {
      this.router.navigateByUrl('/login'); 
    }    
  }

  onRatingAdded(productId: string, newRating: number) {

    this.auth.getAuthenticatedUser().subscribe(user => {
      if(user){
        this.currentUserId = this.auth.currentUserId;
        if (!this.currentUserId) {
          return;
        }
        let product = this.dogFoodProducts.find(p => p.id === productId);
        if (product && newRating >= 1 && newRating <= 5) {   
          
          this.starRatingService.addRating(this.currentUserId, productId, newRating, product.name);
          this.starRatingService.updateFoodProductRating(productId, newRating);
        }
      } else {
        console.error("user must be logged in to add rating");
      }
    });    
  }
}
