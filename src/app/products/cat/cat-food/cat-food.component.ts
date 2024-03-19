import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/cart/cart.service';
import { AuthService } from 'src/app/services/auth-service.service';
import { CartProduct } from 'src/app/shared/models/cartProduct';
import { FoodProduct, Product } from 'src/app/shared/models/products';
import { ListProductsService } from 'src/app/services/list-products.service';

@Component({
  selector: 'app-cat-food',
  templateUrl: './cat-food.component.html',
  styleUrls: ['./cat-food.component.scss']
})
export class CatFoodComponent implements OnInit {

  catFoodProducts?: FoodProduct[] = [];

  constructor(private cartService: CartService, private router: Router, private auth: AuthService,
    private listProductsService: ListProductsService){}

  ngOnInit(): void {
    this.getCatFood();
  }

  getCatFood(){
    this.listProductsService.getCatFoodProducts().subscribe(data => {
      this.catFoodProducts = data;
    });
  }

  addToCart(cartElement: Product | FoodProduct){
    if(this.auth.userLoggedIn && cartElement.available > 0) {
    var cartItem = new CartProduct(cartElement.id, cartElement.name, cartElement.price, cartElement.image,
      1, cartElement.price, "");

    this.cartService.addToCart(cartItem);
    this.router.navigateByUrl('/cart');
    } else {
      this.router.navigateByUrl('/login');
    }
  }

  onRatingAdded(productId: string, newRating: number) {
    let product = this.catFoodProducts.find(p => p.id === productId);
    if (product) {
        //TODO

      // Itt frissítheti az adatbázist az új értékelésekkel.

      
    }
  }

}
