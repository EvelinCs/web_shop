import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, map } from 'rxjs';
import { User } from '../shared/models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private afs: AngularFirestore) { }

  getUserById(id: string): Observable<User> {
    return this.afs.doc<User>(`Users/${id}`).snapshotChanges().pipe(
      map(action => {
        let data = action.payload.data() as User;
        let userId = action.payload.id;
        return {userId, ...data};
      })
    );
  }

  editUser(userId: string, data: User): Promise<void> {
    return this.afs.doc<User>(`Users/${userId}`).update(data);
  }
}
