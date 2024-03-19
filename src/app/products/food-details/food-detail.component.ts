import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/cart/cart.service';
import { AuthService } from 'src/app/services/auth-service.service';
import { ListProductsService } from 'src/app/services/list-products.service';
import { CartProduct } from 'src/app/shared/models/cartProduct';
import { FoodProduct, Product} from 'src/app/shared/models/products';
import { food } from 'src/app/shared/models/temp_data';

@Component({
  selector: 'app-food-detail',
  templateUrl: './food-detail.component.html',
  styleUrls: ['./food-detail.component.scss']
})
export class FoodDetailComponent {

  foodProduct: FoodProduct | undefined;

  constructor(private route: ActivatedRoute, private cartService: CartService, private router: Router, 
    private auth: AuthService, private listProductsService: ListProductsService) { }

  ngOnInit() {
    this.getFood();
  }

  getFood(){
    this.listProductsService.getFoodProducts().subscribe(data => {
      let params = this.route.snapshot.paramMap;
      let prodID = params.get('id');
      this.foodProduct = data.find(product => product.id === prodID);
    });
  }

  addToCart(cartElement: Product | FoodProduct){

    if(this.auth.userLoggedIn) {
      var cartItem = new CartProduct(cartElement.id, cartElement.name, cartElement.price, cartElement.image,
        1, cartElement.price, ""); 
  
      this.cartService.addToCart(cartItem);
      this.router.navigateByUrl('/cart'); 

    } else {
      this.router.navigateByUrl('/login'); 
    }    
  }

  onRatingAdded(productId: string, newRating: number) {
    let product = food.find(p => p.id === productId);     //itt a food-ot lecserélni!!
    if (product) {
        //TODO

      // Itt frissítheti az adatbázist az új értékelésekkel.
      //a new rating igazából már hozzá van adva a rating tömbhöz

      
    }
  }

}
