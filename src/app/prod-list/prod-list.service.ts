import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, map } from 'rxjs';
import { Product } from '../shared/models/products';

@Injectable({
  providedIn: 'root'
})
export class ProdListService {

  constructor(private afs: AngularFirestore) { }
  
  getProducts(): Observable<Product[]> {
    return this.afs.collection('Product').snapshotChanges().pipe(
      map(actions => actions.map(a => {
        let data = a.payload.doc.data() as Product;
        let id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }

}
