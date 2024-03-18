import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/app/shared/models/products';
import { AddProductService } from './add-product.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent {

  productAdded ?: Product;

  constructor(private addProductService: AddProductService, private router: Router, private authService: AuthService){}

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
  });

  

  addProduct(){
    this.productAdded = {};
    Object.assign(this.productAdded, this.addProductForm.value);

    this.authService.getAuthenticatedUser().subscribe(user => {
      if (user) {
        // A felhasználó be van jelentkezve, folytathatja az adatbeszúrást
        this.addProductService.addProduct(this.productAdded);
        this.router.navigateByUrl('/prod-list');
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

}
