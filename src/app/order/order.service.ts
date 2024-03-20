import { Injectable } from '@angular/core';
import { Order, OrderedItem } from '../shared/models/order';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ListProductsService } from '../services/list-products.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  orderedProducts?: OrderedItem[] = [];

  constructor(private afs: AngularFirestore, private listProductsService: ListProductsService,
    private auth: AngularFireAuth) { }

  order(products: OrderedItem[]) {
    this.orderedProducts = products;
  }

  saveOrder(order: Order) {
    return this.afs.collection('Orders').doc(order.orderId).set(order.toFirestoreObject());
  }

  decreaseProductAvailabe(orderedItems: OrderedItem[]) {

    if(orderedItems.length > 0){
      this.auth.user.subscribe(user => {
        if(user){
          orderedItems.forEach(orderedItem => {
            if(orderedItem.available - orderedItem.quantity >= 0){
              orderedItem.available -= orderedItem.quantity;

            let productDocRef = this.afs.collection('Product').doc(orderedItem.id);
            productDocRef.get().toPromise().then(docSnapshot => {
              if (docSnapshot.exists) {
                productDocRef.update({
                  available: orderedItem.available
                }).catch(error => {
                  console.error("an error occured during the order", error);
                });
              } 
            }).catch(error => {
              console.error("an error occured during the order", error);
            });


            let foodProductDocRef = this.afs.collection('FoodProduct').doc(orderedItem.id);
            foodProductDocRef.get().toPromise().then(docSnapshot => {
              if (docSnapshot.exists) {
                foodProductDocRef.update({
                  available: orderedItem.available
                }).catch(error => {
                  console.error("an error occured during the order", error);
                });
              } 
            }).catch(error => {
              console.error("an error occured during the order", error);
            });
            }
          });
        } else {
          console.error("user must be logged in to order");
        }
      });
    }
  }

  getOrders() {
    return this.orderedProducts;
  }
}
