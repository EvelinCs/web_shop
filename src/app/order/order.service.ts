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
    let foods: FoodProduct[] = [];
    let products = [];
    if(orderedItems.length > 0){
      this.listProductsService.getFoodProducts().subscribe(data => {
        this.foodProducts = data;

        orderedItems.forEach(orderedItem => {
          if(this.foodProducts){
            const foodProductIndex = this.foodProducts.findIndex(foodProduct => foodProduct.id === orderedItem.id);
            if (foodProductIndex !== -1){
              foods[foodProductIndex] = this.foodProducts[foodProductIndex];
              foods[foodProductIndex].available -= orderedItem.quantity;
            }
          }
        });
      });
      console.log(foods[0].available);

      this.listProductsService.getProducts().subscribe(data => {
        this.products = data;
      });
    }

    /*this.auth.user.subscribe(user =>{
      if(user){
        if(orderedItems.length > 0){
          this.listProductsService.getFoodProducts().subscribe(data => {
            this.foodProducts = data;

            orderedItems.forEach(orderedItem => {
              if(this.foodProducts){
                const foodProductIndex = this.foodProducts.findIndex(foodProduct => foodProduct.id === orderedItem.id);
              if (foodProductIndex !== -1 && (this.foodProducts[foodProductIndex].available - orderedItem.quantity >= 0)) {
                this.foodProducts[foodProductIndex].available -= orderedItem.quantity;
                this.afs.collection('FoodProduct').doc(orderedItem.id).update({
                  available: this.foodProducts[foodProductIndex].available
                }).catch(error =>{
                  console.error("an error occured during the order", error)
                });
              } 
              } 
            });
          });

          this.listProductsService.getProducts().subscribe(data => {
            this.products = data;

            orderedItems.forEach(orderedItem => {
              if(this.products){
                const productIndex = this.products.findIndex(product => product.id === orderedItem.id);
              if (productIndex !== -1 && (this.products[productIndex].available - orderedItem.quantity >= 0)) {
                this.products[productIndex].available -= orderedItem.quantity;
                this.afs.collection('Product').doc(orderedItem.id).update({
                  available: this.products[productIndex].available
                });
              }
              } 
            });
          });
        }
      } else {
        console.error("user must be logged in to order");
      }
    });*/
  }

  getOrders() {
    return this.orderedProducts;
  }
}
