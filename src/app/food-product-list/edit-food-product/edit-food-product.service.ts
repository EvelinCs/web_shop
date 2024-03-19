import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FoodProduct } from 'src/app/shared/models/products';

@Injectable({
  providedIn: 'root'
})
export class EditFoodProductService {

  constructor(private afs: AngularFirestore) { }


  editFoodProduct(id: string, data: FoodProduct): Promise<void> {
    return this.afs.doc<FoodProduct>(`FoodProduct/${id}`).update(data);
  }
}
