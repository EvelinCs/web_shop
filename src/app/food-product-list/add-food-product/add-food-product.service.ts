import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AuthService } from 'src/app/services/auth-service.service';
import { FoodProduct } from 'src/app/shared/models/products';

@Injectable({
  providedIn: 'root'
})
export class AddFoodProductService {

  constructor(private afs: AngularFirestore) { }

  addFoodProduct(addedFoodProduct: FoodProduct) {
    
    let id = this.afs.createId();
    
    return this.afs.collection('FoodProduct').doc(id).set(addedFoodProduct);
  }
}


  



