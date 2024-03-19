import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListProductsService } from 'src/app/services/list-products.service';
import { Product } from 'src/app/shared/models/products';
import { EditProductService } from './edit-product.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {

  editedProduct: Product;
  editedID: string = "";

  constructor(
    private route: ActivatedRoute, private editProductService: EditProductService, private router: Router,
    private listProductsService: ListProductsService) {}

    ngOnInit() {
      this.editedID = this.route.snapshot.paramMap.get('id');
      if (this.editedID) {
        this.listProductsService.getProductById(this.editedID).subscribe(data => {
          this.editedProduct = data;
          this.editProductForm.patchValue({
            id: data.id,
            name: data.name,
            species: data.species,
            price: data.price,
            sale: data.sale,
            description: data.description,
            brand: data.brand,
            rating: data.rating,
            image: data.image,
            available: data.available
          });
        });
      }
    }

    editProductForm = new FormGroup({
      id: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
      species: new FormControl('', [Validators.required]),
      price: new FormControl(0, [Validators.required]), 
      sale: new FormControl(0, [Validators.required]), 
      description: new FormControl('', [Validators.required]), 
      brand: new FormControl('', [Validators.required]), 
      rating: new FormControl([0], [Validators.required]), 
      image: new FormControl('', [Validators.required]), 
      available: new FormControl(0, [Validators.required])
    });

    editProduct() {

      if (this.editProductForm.valid) {
        let updatedData = this.editProductForm.value;
        this.editProductService.editProduct(this.editedID, updatedData).then(() => {
          this.router.navigateByUrl('/prod-list');
        });
      }
    }



    get id(){
      return this.editProductForm.get('id');
    }
  
    get name(){
      return this.editProductForm.get('name');
    }
  
    get species(){
      return this.editProductForm.get('species');
    }
  
    get price(){
      return this.editProductForm.get('price');
    }
  
    get sale(){
      return this.editProductForm.get('sale');
    }
  
    get description(){
      return this.editProductForm.get('description');
    }
  
    get brand(){
      return this.editProductForm.get('brand');
    }
  
    get rating(){
      return this.editProductForm.get('rating');
    }
  
    get image(){
      return this.editProductForm.get('image');
    }
  
    get available(){
      return this.editProductForm.get('available');
    }

}
