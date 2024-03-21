import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FoodProduct, Product } from '../shared/models/products';
import { Observable, map, take } from 'rxjs';
import { UserFavouriteProducts, UserFavourites } from '../shared/models/UserFavourites';

@Injectable({
  providedIn: 'root'
})
export class FavouritesService {

  constructor(private afs: AngularFirestore){}

  getFavouriteFoods(id: string):Observable<FoodProduct[]> {
    return this.afs.doc<UserFavourites>(`FavouriteFoodProducts/${id}`).valueChanges().pipe(
      map(doc => doc ? doc.favourites : [])
    );
  }

  getFavouriteProducts(id: string):Observable<Product[]> {
    return this.afs.doc<UserFavouriteProducts>(`FavouriteProducts/${id}`).valueChanges().pipe(
      map(doc => doc ? doc.favourites : [])
    );
  }

  deleteFavouriteFood(foodId: string, userId: string) {
    let userFavouritesRef = this.afs.doc<UserFavourites>(`FavouriteFoodProducts/${userId}`);

    return this.afs.firestore.runTransaction(async transaction => {
      let docSnapshot = await transaction.get(userFavouritesRef.ref);
      if (docSnapshot.exists) {
        let favourites = docSnapshot.data().favourites;
        let updatedFavourites = favourites.filter(f => f.id !== foodId);
        transaction.update(userFavouritesRef.ref, { favourites: updatedFavourites });
      }
    });
  }

  deleteFavouriteProduct(productId: string, userId: string){
    let userFavouritesRef = this.afs.doc<UserFavouriteProducts>(`FavouriteProducts/${userId}`);

    return this.afs.firestore.runTransaction(async transaction => {
      let docSnapshot = await transaction.get(userFavouritesRef.ref);
      if (docSnapshot.exists) {
        let favourites = docSnapshot.data().favourites;
        let updatedFavourites = favourites.filter(f => f.id !== productId);
        transaction.update(userFavouritesRef.ref, { favourites: updatedFavourites });
      }
    });
  }

}
