import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, map } from 'rxjs';
import { FoodProduct, Product } from '../shared/models/products';

@Injectable({
  providedIn: 'root'
})
export class ListProductsService {

  constructor(private afs: AngularFirestore) { }

  getFoodProducts(): Observable<Product[]> {
    return this.afs.collection('FoodProduct').snapshotChanges().pipe(
      map(actions => actions.map(element => {
        let data = element.payload.doc.data() as Product;
        let id = element.payload.doc.id;
        return { id, ...data };
      }))
    );
  }

  getProducts(): Observable<Product[]> {
    return this.afs.collection('Product').snapshotChanges().pipe(
      map(actions => actions.map(element => {
        let data = element.payload.doc.data() as Product;
        let id = element.payload.doc.id;
        return { id, ...data };
      }))
    );
  }
  
  getCatProducts(): Observable<Product[]> {
    return this.afs.collection('Product', ref => ref.where('species', '==', 'cat'))
      .snapshotChanges().pipe(
        map(actions => actions.map(element => {
          let data = element.payload.doc.data() as Product;
          let id = element.payload.doc.id;
          return { id, ...data };
        }))
      );
  }

  getDogProducts(): Observable<Product[]> {
    return this.afs.collection('Product', ref => ref.where('species', '==', 'dog'))
      .snapshotChanges().pipe(
        map(actions => actions.map(element => {
          let data = element.payload.doc.data() as Product;
          let id = element.payload.doc.id;
          return { id, ...data };
        }))
      );
  }

  getCatFoodProducts(): Observable<FoodProduct[]> {
    return this.afs.collection('FoodProduct', ref => ref.where('species', '==', 'cat'))
      .snapshotChanges().pipe(
        map(actions => actions.map(element => {
          let data = element.payload.doc.data() as FoodProduct;
          let id = element.payload.doc.id;
          return { id, ...data };
        }))
      );
  }

  getDogFoodProducts(): Observable<FoodProduct[]> {
    return this.afs.collection('FoodProduct', ref => ref.where('species', '==', 'dog'))
      .snapshotChanges().pipe(
        map(actions => actions.map(element => {
          let data = element.payload.doc.data() as FoodProduct;
          let id = element.payload.doc.id;
          return { id, ...data };
        }))
      );
  }

  getFoodProductById(id: string): Observable<FoodProduct> {
    return this.afs.doc<FoodProduct>(`FoodProduct/${id}`).snapshotChanges().pipe(
      map(action => {
        let data = action.payload.data() as FoodProduct;
        let id = action.payload.id;
        return { id, ...data };
      })
    );
  }

  getProductById(id: string): Observable<Product> {
    return this.afs.doc<Product>(`Product/${id}`).snapshotChanges().pipe(
      map(action => {
        let data = action.payload.data() as Product;
        let id = action.payload.id;
        return { id, ...data };
      })
    );
  }


}
