import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, map } from 'rxjs';
import { FoodProduct, Product } from '../shared/models/products';

@Injectable({
  providedIn: 'root'
})
export class SaleService {

  constructor(private afs: AngularFirestore) { }

  getProductsOnSale(): Observable<Product[]>{
    return this.afs.collection<Product>('Product', ref => ref.where('sale', '>', 0)).snapshotChanges().pipe(
      map(actions => {
        return actions.map(element => {
          let data = element.payload.doc.data() as Product;
          let id = element.payload.doc.id;
          return {id, ...data};
        });
      })
    );
  }


  getFoodProductsOnSale(): Observable<FoodProduct[]>{
    return this.afs.collection<FoodProduct>('FoodProduct', ref => ref.where('sale', '>', 0)).snapshotChanges().pipe(
      map(actions => {
        return actions.map(element => {
          let data = element.payload.doc.data() as FoodProduct;
          let id = element.payload.doc.id;
          return {id, ...data};
        });
      })
    );
  }
}
