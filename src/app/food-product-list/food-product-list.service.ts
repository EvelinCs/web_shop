import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { FoodProduct } from '../shared/models/products';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class FoodProductListService {

  constructor(private afs: AngularFirestore) { }

  getProducts(): Observable<FoodProduct[]> {
    return this.afs.collection('FoodProduct').snapshotChanges().pipe(
      map(actions => actions.map(a => {
        let data = a.payload.doc.data() as FoodProduct;
        let id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }

  deleteProduct(productId: string) {
    return this.afs.collection('FoodProduct').doc(productId).delete();
  }
}
