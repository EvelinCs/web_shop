import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { FoodProduct } from '../shared/models/products';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class FoodProductListService {

  constructor(private afs: AngularFirestore) { }

  deleteProduct(productId: string) {
    return this.afs.collection('FoodProduct').doc(productId).delete();
  }

  editFoodProduct(productID: string){
    
  }
}
