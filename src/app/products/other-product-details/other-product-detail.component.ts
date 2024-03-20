import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/cart/cart.service';
import { AuthService } from 'src/app/services/auth-service.service';
import { ListProductsService } from 'src/app/services/list-products.service';
import { CartProduct } from 'src/app/shared/models/cartProduct';
import { FoodProduct, Product } from 'src/app/shared/models/products';
import { StarRatingService } from '../shared/star-rating/star-rating.service';

@Component({
  selector: 'app-other-product-detail',
  templateUrl: './other-product-detail.component.html',
  styleUrls: ['./other-product-detail.component.scss']
})
export class OtherProductDetailComponent {

  otherProduct: Product | undefined;
  currentUserId?: string;

  constructor(private route: ActivatedRoute, private cartService: CartService, private router: Router, 
    private auth: AuthService, private listProductsService: ListProductsService, private starRatingService: StarRatingService) { }

  ngOnInit() {
    this.getProduct();
    this.currentUserId = this.auth.currentUserId;
  }

  getProduct(){
    this.listProductsService.getProducts().subscribe(data => {
      let params = this.route.snapshot.paramMap;
      let prodID = params.get('id');
      this.otherProduct = data.find(product => product.id === prodID);
    });
  }

  addToCart(cartElement: Product | FoodProduct){

    if(this.auth.userLoggedIn && cartElement.available > 0) {
      var cartItem = new CartProduct(cartElement.id, cartElement.name, cartElement.price, cartElement.image,
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
          console.error('No userID');
          return;
        }

        if ( newRating >= 1 && newRating <= 5) {  
          
          this.starRatingService.addRating(this.currentUserId, productId, newRating, this.otherProduct.name);
          this.starRatingService.updateProductRating(productId, newRating);
        }
      } else {
        console.error("user must be logged in to add rating");
      }
    });    
  }


}
