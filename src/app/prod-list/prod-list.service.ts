import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, map } from 'rxjs';
import { Product } from '../shared/models/products';

@Injectable({
  providedIn: 'root'
})
export class ProdListService {

  constructor(private afs: AngularFirestore) { }

  deleteProduct(productId: string) {
    return this.afs.collection('Product').doc(productId).delete();
  }

  editProduct(productId: string) {
    
  }

}
