import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, User } from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userLoggedIn: boolean;

  constructor(private auth: Auth, private router: Router) {
        this.userLoggedIn = false;

        onAuthStateChanged(this.auth, (user) => {    
            if (user) {
                this.userLoggedIn = true;
            } else {
                this.userLoggedIn = false;
            }
        });
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

  register(email:string, password: string, confirmPassword: string){
    if( password !== confirmPassword){
      return;
    }

    this.auth = getAuth();
    createUserWithEmailAndPassword(this.auth, email, password)
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
