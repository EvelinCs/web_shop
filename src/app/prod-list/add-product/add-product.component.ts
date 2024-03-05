import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent {

  addProductForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    species: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required]), 
    sale: new FormControl('', [Validators.required]), 
    description: new FormControl('', [Validators.required]), 
    brand: new FormControl('', [Validators.required]), 
    rating: new FormControl('', [Validators.required]), 
    image: new FormControl('', [Validators.required]), 
  });

  

  addProduct(){
    //TODO
    console.log(this.addProductForm.get('name').value + " product added");
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

}
