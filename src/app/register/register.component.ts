import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { AuthService } from '../services/auth-service.service';
import { mustContainCapitalLetter, mustContainDigit, mustContainSpecialCharacter, PasswordConfirmPasswordMatch } from '../shared/validation/password.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  
  hidePassword = true;
  hideConfirmPassword = true;

  registerForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      userName: new FormControl('', [Validators.required]),
      userAddress: new FormControl('', [Validators.required]),
      userPhone: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(8),
        mustContainDigit(/\d/), mustContainCapitalLetter(/.*[A-Z].*/), 
        mustContainSpecialCharacter(/.*\W.*/)]),
      confirmPassword: new FormControl('', [Validators.required])
   }, {validators: PasswordConfirmPasswordMatch}   
   );


  constructor(private router: Router, private authService: AuthService){}

  register(): void {
    if(this.registerForm.valid){

      this.authService.register(this.email.value, this.password.value, this.confirmPassword.value, this.userName.value, this.userAddress.value, this.userPhone.value);

    }
    else {
      return;
    } 
  }

  get email(){
    return this.registerForm.get('email');
  }

  get userName(){
    return this.registerForm.get('userName');
  }

  get userAddress(){
    return this.registerForm.get('userAddress');
  }

  get userPhone(){
    return this.registerForm.get('userPhone');
  }

  get password(){
    return this.registerForm.get('password');
  }

  get confirmPassword(){
    return this.registerForm.get('confirmPassword');
  }

  matcherPwd = new MyErrorStateMatcherPwd();
  matcher = new MyErrorStateMatcherPwd();
  matcherConfirmPwd = new MyErrorStateMatcherPwd();
}

export class MyErrorStateMatcherPwd implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    //!!(value) === Boolean(value)
    return !!(control && control.invalid && (control.dirty || control.touched));
  }
}