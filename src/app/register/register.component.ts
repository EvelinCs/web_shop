import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';
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
      password: new FormControl('', [Validators.required, Validators.minLength(8),
        mustContainDigit(/\d/), mustContainCapitalLetter(/.*[A-Z].*/), 
        mustContainSpecialCharacter(/.*\W.*/)]),
      confirmPassword: new FormControl('', [Validators.required])
   }, {validators: PasswordConfirmPasswordMatch}   
   );





  constructor(private router: Router){}

  register(): void {
    console.log("Register");
    this.router.navigateByUrl('/login'); 
  }

  get email(){
    return this.registerForm.get('email');
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