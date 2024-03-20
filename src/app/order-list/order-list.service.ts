import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, map } from 'rxjs';
import { Order } from '../shared/models/order';

@Injectable({
  providedIn: 'root'
})
export class OrderListService {

  constructor(private afs: AngularFirestore) { }

  deleteOrder(orderId: string) {
    return this.afs.collection('Orders').doc(orderId).delete();
  }

  getOrders(): Observable<Order[]> {
    return this.afs.collection('Orders').snapshotChanges().pipe(
      map(actions => actions.map(element => {
        let data = element.payload.doc.data() as Order;
        return data;
      }))
    );
  }

}
