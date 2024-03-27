import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, map } from 'rxjs';
import { User } from '../shared/models/user';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit{

  currentUserId: string;
  currentUser: User;

  profileForm = new FormGroup({
    userName: new FormControl('', [Validators.required]),
    userEmail: new FormControl('', [Validators.required, Validators.email]),
    userAddress: new FormControl('', [Validators.required]), 
    userPhone: new FormControl('', [Validators.required, Validators.maxLength(11), Validators.minLength(10),Validators.pattern(/^06/)]), 
  });

  constructor(private afAuth: AngularFireAuth, private userService: UserService,
    private router: Router) {}

  ngOnInit(): void {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.currentUserId = user.uid;

        this.userService.getUserById(this.currentUserId).subscribe(userData => {
          this.currentUser = userData;

          if (userData && userData.userName && userData.userEmail && userData.userAddress && userData.userPhone) {
            this.profileForm.patchValue({
              userName: userData.userName,
              userEmail: userData.userEmail,
              userAddress: userData.userAddress,
              userPhone: userData.userPhone
            });
          }
        });
      } else {
        // Ha nincs bejelentkezett felhasználó
        this.currentUserId = null; 
      }
    });    
  }

  saveProfile(){
    if(this.currentUserId && this.profileForm.valid){
      let updatedData = this.profileForm.value;
      updatedData.userEmail = this.currentUser.userEmail;
      this.userService.editUser(this.currentUserId, updatedData).then(() => {
        this.router.navigateByUrl('/home');
      });
    }
  }


  get userName(){
    return this.profileForm.get('userName');
  }

  get userEmail(){
    return this.profileForm.get('userEmail');
  }

  get userAddress(){
    return this.profileForm.get('userAddress');
  }

  get userPhone(){
    return this.profileForm.get('userPhone');
  }

}
