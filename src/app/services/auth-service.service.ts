import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { Router } from '@angular/router';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, User } from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: AngularFireAuth, private router: Router) { }

  login(email: string, password: string){
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
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

  register(email:string, password: string, confirmPassword: string){
    if( password !== confirmPassword){
      return;
    }

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;

    this.router.navigateByUrl('/login'); 
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
  }

  logout(){
    const auth = getAuth();
    signOut(auth).then(() => {
      this.router.navigateByUrl('/home'); 
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  }

  userLoggedIn(){
    const auth = getAuth();

    let ret;
    
    onAuthStateChanged(auth, (user) => {
      if (user) {
        ret = true;
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        // ...
      } else {
        ret = false;
      // User is signed out
      // ...
  } 
  
});
return ret;
  }
}
