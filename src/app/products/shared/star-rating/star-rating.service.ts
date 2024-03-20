import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FoodProduct, Product } from 'src/app/shared/models/products';

@Injectable({
  providedIn: 'root'
})
export class StarRatingService {

  constructor(private afs: AngularFirestore) { }

  addRating(userId: string, productId: string, rating: number, productName: string) {
    let ratingRef = this.afs.collection('Ratings').doc();
    return ratingRef.set({
      userId,
      productId,
      rating,
      productName
    });
  }

  updateFoodProductRating(productId: string, newRating: number) {
    let productRef = this.afs.collection('FoodProduct').doc(productId);
    return this.afs.firestore.runTransaction(async transaction => {
      let productDoc = await transaction.get(productRef.ref);
      let data = productDoc.data() as FoodProduct;
      let ratings = data.rating || [];
      ratings.push(newRating);
      transaction.update(productRef.ref, { rating: ratings });
    });
  }

  updateProductRating(productId: string, newRating: number) {
    let productRef = this.afs.collection('Product').doc(productId);
    return this.afs.firestore.runTransaction(async transaction => {
      let productDoc = await transaction.get(productRef.ref);
      let data = productDoc.data() as Product;
      let ratings = data.rating || [];
      ratings.push(newRating);
      transaction.update(productRef.ref, { rating: ratings });
    });
  }
}
