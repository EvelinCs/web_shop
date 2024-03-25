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

  /*searchProducts(searchedTerm: string): Observable<Product[]>{
    let searchedProduct = this.titleCaseWord(searchedTerm);
    return this.afs.collection('Product', ref => 
    ref.orderBy('name').startAt(searchedProduct).endAt(searchedProduct + '\uf8ff')).valueChanges();
  }

  searchFoodProducts(searchedTerm: string): Observable<FoodProduct[]>{
    let searchedFoodProduct = this.titleCaseWord(searchedTerm);
    return this.afs.collection('FoodProduct', ref => 
    ref.orderBy('name').startAt(searchedFoodProduct).endAt(searchedFoodProduct + '\uf8ff')).valueChanges();
  }

  titleCaseWord(word: string) {
    if (!word) return word;
    return word[0].toUpperCase() + word.substr(1).toLowerCase();
  }*/


  searchFoodProducts(searchedTerm: string): Observable<FoodProduct[]>{
    return this.getFoodProducts().pipe(
      map(foods => foods.filter(product =>
        product.name.toLowerCase().includes(searchedTerm.toLowerCase())
      ))
    );
  }

  searchProducts(searchedTerm: string): Observable<Product[]>{
    return this.getProducts().pipe(
      map(products => products.filter(product =>
        product.name.toLowerCase().includes(searchedTerm.toLowerCase())
      ))
    );
  }


  


}
