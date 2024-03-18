import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Product } from 'src/app/shared/models/products';

@Injectable({
  providedIn: 'root'
})
export class AddProductService {

  constructor(private afs: AngularFirestore) { }

  addProduct(addedProduct: Product) {
    
    let id = this.afs.createId();
    
    return this.afs.collection('Product').doc(id).set(addedProduct);
  }
}
