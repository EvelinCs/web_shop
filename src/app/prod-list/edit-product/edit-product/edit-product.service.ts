import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Product } from 'src/app/shared/models/products';

@Injectable({
  providedIn: 'root'
})
export class EditProductService {
  
  constructor(private afs: AngularFirestore) { }

  editProduct(id: string, data: Product): Promise<void> {
    return this.afs.doc<Product>(`Product/${id}`).update(data);
  }
}
