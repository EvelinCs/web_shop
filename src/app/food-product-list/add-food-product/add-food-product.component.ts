import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AddFoodProductService } from './add-food-product.service';
import { FoodProduct } from 'src/app/shared/models/products';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-add-food-product',
  templateUrl: './add-food-product.component.html',
  styleUrls: ['./add-food-product.component.scss']
})
export class AddFoodProductComponent {

  foodProductAdded?: FoodProduct;

  constructor(private addFoodProductService: AddFoodProductService, private router: Router, private authService: AuthService){}

  addProductForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    species: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required]), 
    sale: new FormControl(0, [Validators.required]), 
    description: new FormControl('', [Validators.required]), 
    brand: new FormControl('', [Validators.required]), 
    rating: new FormControl([0], [Validators.required]), 
    image: new FormControl('', [Validators.required]), 
    available: new FormControl('', [Validators.required]), 
    weight: new FormControl('', [Validators.required]), 
    lastTil: new FormControl('', [Validators.required]), 
  });

  

  addProduct(){

    this.foodProductAdded = {};
    Object.assign(this.foodProductAdded, this.addProductForm.value);

    this.authService.getAuthenticatedUser().subscribe(user => {
      if (user) {
        // A felhasználó be van jelentkezve, folytathatja az adatbeszúrást

        if(this.addProductForm.valid){
          this.addFoodProductService.addFoodProduct(this.foodProductAdded);
          this.router.navigateByUrl('/food-prod-list');
        }
        
      } else {
        // A felhasználó nincs bejelentkezve, kezelje ezt az esetet
        console.error('User must sign in to add data');
      }
    });

  }


  get name(){
    return this.addProductForm.get('name');
  }

  get species(){
    return this.addProductForm.get('species');
  }

  get price(){
    return this.addProductForm.get('price');
  }

  get sale(){
    return this.addProductForm.get('sale');
  }

  get description(){
    return this.addProductForm.get('description');
  }

  get brand(){
    return this.addProductForm.get('brand');
  }

  get rating(){
    return this.addProductForm.get('rating');
  }

  get image(){
    return this.addProductForm.get('image');
  }

  get available(){
    return this.addProductForm.get('available');
  }

  get weight(){
    return this.addProductForm.get('weight');
  }

  get lastTil(){
    return this.addProductForm.get('lastTil');
  }
}
