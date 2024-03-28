import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart/cart.service';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth-service.service';
import { StarRatingService } from '../products/shared/star-rating/star-rating.service';
import { FoodProduct, Product } from '../shared/models/products';
import { SaleService } from './sale.service';
import { CartProduct } from '../shared/models/cartProduct';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.scss']
})
export class SaleComponent implements OnInit {

  saleProducts : Product[] = [];
  saleFoodProducts: FoodProduct[] = [];
  currentUserId?: string;

  constructor(private cartService: CartService, private router: Router, private auth: AuthService,
     private starRatingService: StarRatingService, private saleService: SaleService){}

  ngOnInit(): void {
    this.getOnSale();
    this.currentUserId = this.auth.currentUserId;
  }

  getOnSale(){
    this.saleService.getFoodProductsOnSale().subscribe(data => {
      this.saleFoodProducts = data;
    });

    this.saleService.getProductsOnSale().subscribe(data => {
      this.saleProducts = data;
    });
  }


  addToCart(cartElement: Product | FoodProduct){
    if(this.auth.userLoggedIn && cartElement.available > 0) {
      let price = 0;
      let cartItem = new CartProduct(cartElement.id, cartElement.name, cartElement.price, cartElement.image,
        1, cartElement.price, cartElement.available);
      if(cartElement.sale > 0){
        price = cartElement.price - (cartElement.price * (cartElement.sale / 100));
        cartItem.price = price;
      } 
    

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
          console.error('No userID');
          return;
        }

        let product = this.saleProducts.find(p => p.id === productId);
        if (product && newRating >= 1 && newRating <= 5) {   
          
          this.starRatingService.addRating(this.currentUserId, productId, newRating, product.name);
          this.starRatingService.updateProductRating(productId, newRating);
        }

        let foodProduct = this.saleFoodProducts.find(p => p.id === productId);
        if (foodProduct && newRating >= 1 && newRating <= 5) {   
          
          this.starRatingService.addRating(this.currentUserId, productId, newRating, foodProduct.name);
          this.starRatingService.updateFoodProductRating(productId, newRating);
        }
      } else {
        console.error("user must be logged in to add rating");
      }
    });    
  }

}
