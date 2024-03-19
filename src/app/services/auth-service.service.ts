import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, User } from 'firebase/auth';
import { doc, getFirestore, setDoc } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userLoggedIn: boolean;

  constructor(private auth: Auth, private router: Router, private afAuth: AngularFireAuth) {
        this.userLoggedIn = false;

        onAuthStateChanged(this.auth, (user) => {    
            if (user) {
                this.userLoggedIn = true;
            } else {
                this.userLoggedIn = false;
            }
        });
   }

   getAuthenticatedUser() {
    return this.afAuth.authState;
  }


   login(email: string, password: string){
    this.auth = getAuth();
    signInWithEmailAndPassword(this.auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        this.router.navigateByUrl('/home'); 
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
    });
  }

  register(userEmail:string, password: string, confirmPassword: string, userName: string, userAddress: string, userPhone: string){
    if( password !== confirmPassword){
      return;
    }

    this.auth = getAuth();
    createUserWithEmailAndPassword(this.auth, userEmail, password)
    .then((userCredential) => {
    // Successful registration - Signed in 
    let user = userCredential.user;
    let userId = user.uid;

    let fireStore = getFirestore();
    setDoc(doc(fireStore, 'Users', user.uid), {
      userId,
      userName,
      userEmail,
      userAddress,
      userPhone
    }).then(() => {
      this.router.navigateByUrl('/home');
    })
    .catch((error) => {
      console.error("User datas couldn't be saved ", error);
    });
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
  }

  logout(){
    this.auth = getAuth();
    
    signOut(this.auth).then(() => {
      //this.userLoggedIn = false;
      this.router.navigateByUrl('/home'); 
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
   
  }

}
