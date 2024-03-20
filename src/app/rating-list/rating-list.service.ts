import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Rating } from '../shared/models/rating';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RatingListService {

  constructor(private afs: AngularFirestore) {}

  getRatings(): Observable<Rating[]> {
    return this.afs.collection('Ratings').snapshotChanges().pipe(
      map(actions => actions.map(element => {
        let data = element.payload.doc.data() as Rating;
        let id = element.payload.doc.id;
        return {id, ...data};
      }))
    );
  }
}
