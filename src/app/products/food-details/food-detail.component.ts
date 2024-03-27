import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/cart/cart.service';
import { AuthService } from 'src/app/services/auth-service.service';
import { ListProductsService } from 'src/app/services/list-products.service';
import { CartProduct } from 'src/app/shared/models/cartProduct';
import { FoodProduct, Product} from 'src/app/shared/models/products';
import { StarRatingService } from '../shared/star-rating/star-rating.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { UserFavourites } from 'src/app/shared/models/UserFavourites';
import { take } from 'rxjs';

@Component({
  selector: 'app-food-detail',
  templateUrl: './food-detail.component.html',
  styleUrls: ['./food-detail.component.scss']
})
export class FoodDetailComponent implements OnInit {

  foodProduct: FoodProduct | undefined;
  currentUserId?: string;

  isFavourite: boolean = false;

  constructor(private route: ActivatedRoute, private cartService: CartService, private router: Router, 
    private auth: AuthService, private listProductsService: ListProductsService, private starRatingService: StarRatingService,
    private afs: AngularFirestore) { }

  ngOnInit() {
    this.getFood();
    this.currentUserId = this.auth.currentUserId;

    this.checkIfFavourite();
  }

  checkIfFavourite() {
    this.currentUserId = this.auth.currentUserId;
    this.afs.collection('FavouriteFoodProducts').doc<UserFavourites>(this.currentUserId).valueChanges().subscribe(doc => {
      if (doc && doc.favourites && doc.favourites.some(f => f.id === this.foodProduct.id)) {
        this.isFavourite = true;
      } else {
        this.isFavourite = false;
      }
    });
  }

  toggleFavourite(food: FoodProduct) {

    this.auth.getAuthenticatedUser().subscribe(user => {
      if(user){
        this.currentUserId = this.auth.currentUserId;

        let userFavouritesRef = this.afs.doc<UserFavourites>(`FavouriteFoodProducts/${this.currentUserId}`);
        userFavouritesRef.valueChanges().pipe(
        // Csak egyszer kéri le az adatokat, nem iratkozik fel folyamatosan, mert különben végtelen ciklusba esik
        take(1) 
        ).subscribe((doc: UserFavourites) => {
      let favouritesIds = doc ? doc.favourites.map(element => element.id) : [];
      if (favouritesIds.includes(food.id)) {
        let updatedFavourites = doc.favourites.filter(element => element.id !== food.id);
        userFavouritesRef.update({ favourites: updatedFavourites });
        this.isFavourite = false;
      } else {
        let updatedFavourites = [...doc.favourites, food];
        userFavouritesRef.update({ favourites: updatedFavourites });
        this.isFavourite = true;
      }
    });
      } else {
        console.error("user must be logged in to save favourites");
      }
    });
  }

  getFood(){
    this.listProductsService.getFoodProducts().subscribe(data => {
      let params = this.route.snapshot.paramMap;
      let prodID = params.get('id');
      this.foodProduct = data.find(product => product.id === prodID);
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
        
        if ( newRating >= 1 && newRating <= 5) {  
          
          this.starRatingService.addRating(this.currentUserId, productId, newRating, this.foodProduct.name);
          this.starRatingService.updateFoodProductRating(productId, newRating);
        }
      } else {
        console.error("user must be logged in to add rating");
      }
    });    
  }

}
