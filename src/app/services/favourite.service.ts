import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';


@Injectable({
  providedIn: 'root'
})
export class FavouriteService {

  constructor(private afs: AngularFirestore) {}

}
