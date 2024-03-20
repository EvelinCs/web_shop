import { Injectable, OnInit } from '@angular/core';
import { Order, OrderedItem } from '../shared/models/order';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FoodProduct, Product } from '../shared/models/products';
import { ListProductsService } from '../services/list-products.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class OrderService implements OnInit{

  orderedProducts?: OrderedItem[] = [];
  foodProducts: FoodProduct[];
  products: Product[];

  constructor(private afs: AngularFirestore, private listProductsService: ListProductsService,
    private auth: AngularFireAuth) { }

  ngOnInit(): void {
    /*this.listProductsService.getFoodProducts().subscribe(data => {
        this.foodProducts = data;
      });

      this.listProductsService.getProducts().subscribe(data => {
        this.products = data;
      });*/
  }

  order(products: OrderedItem[]){

    this.orderedProducts = products;
  }

  saveOrder(order: Order){
    return this.afs.collection('Orders').doc(order.orderId).set(order.toFirestoreObject());
  }

  decreaseProductAvailabe(orderedItems: OrderedItem[]){

    if(orderedItems.length > 0){
      this.auth.user.subscribe(user => {
        if(user){
          orderedItems.forEach(orderedItem => {
            if(orderedItem.available - orderedItem.quantity >= 0){
              orderedItem.available -= orderedItem.quantity;

              // Ellenőrizze, hogy a dokumentum létezik-e
            const productDocRef = this.afs.collection('Product').doc(orderedItem.id);
            productDocRef.get().toPromise().then(docSnapshot => {
              if (docSnapshot.exists) {
                // Ha a dokumentum létezik, akkor frissítse
                productDocRef.update({
                  available: orderedItem.available
                }).catch(error => {
                  console.error("an error occured during the order", error);
                });
              } 
            }).catch(error => {
              console.error("an error occured during the order", error);
            });


            const foodProductDocRef = this.afs.collection('FoodProduct').doc(orderedItem.id);
            foodProductDocRef.get().toPromise().then(docSnapshot => {
              if (docSnapshot.exists) {
                // Ha a dokumentum létezik, akkor frissítse
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
        }
      });
    }
  }

  getOrders() {
    return this.orderedProducts;
  }
}
