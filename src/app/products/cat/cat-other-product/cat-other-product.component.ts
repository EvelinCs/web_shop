import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/cart/cart.service';
import { AuthService } from 'src/app/services/auth-service.service';
import { ListProductsService } from 'src/app/services/list-products.service';
import { CartProduct } from 'src/app/shared/models/cartProduct';
import { FoodProduct, Product } from 'src/app/shared/models/products';


@Component({
  selector: 'app-cat-other-product',
  templateUrl: './cat-other-product.component.html',
  styleUrls: ['./cat-other-product.component.scss']
})
export class CatOtherProductComponent implements OnInit {

  catProducts?: Product[] = [];

  constructor(private cartService: CartService, private router: Router, private auth: AuthService,
    private listProductsService: ListProductsService){}

    ngOnInit(): void {
      this.getCatPruducts();
    }
  
    getCatPruducts(){
      this.listProductsService.getCatProducts().subscribe(data => {
        this.catProducts = data;
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
    let product = this.catProducts.find(p => p.id === productId);
    if (product) {
        //TODO

      // Itt frissítheti az adatbázist az új értékelésekkel.

      
    }
  }

}
