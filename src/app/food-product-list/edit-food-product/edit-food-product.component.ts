import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodProduct } from 'src/app/shared/models/products';
import { EditFoodProductService } from './edit-food-product.service';
import { ListProductsService } from 'src/app/services/list-products.service';

@Component({
  selector: 'app-edit-food-product',
  templateUrl: './edit-food-product.component.html',
  styleUrls: ['./edit-food-product.component.scss']
})
export class EditFoodProductComponent implements OnInit {

  editedFoodProduct: FoodProduct;
  editedID: string = "";

  constructor(
    private route: ActivatedRoute, private editFoodService: EditFoodProductService, private router: Router,
    private listProductsService: ListProductsService) {}

    ngOnInit() {
      this.editedID = this.route.snapshot.paramMap.get('id');
      if (this.editedID) {
        this.listProductsService.getFoodProductById(this.editedID).subscribe(data => {
          this.editedFoodProduct = data;
          this.editFoodProductForm.patchValue({
            id: data.id,
            name: data.name,
            species: data.species,
            price: data.price,
            sale: data.sale,
            description: data.description,
            brand: data.brand,
            rating: data.rating,
            image: data.image,
            available: data.available,
            weight: data.weight,
            lastTil: data.lastTil
          });
        });
      }
    }

  editFoodProductForm = new FormGroup({
    id: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    species: new FormControl('', [Validators.required]),
    price: new FormControl(0, [Validators.required]), 
    sale: new FormControl(0, [Validators.required]), 
    description: new FormControl('', [Validators.required]), 
    brand: new FormControl('', [Validators.required]), 
    rating: new FormControl([0], [Validators.required]), 
    image: new FormControl('', [Validators.required]), 
    available: new FormControl(0, [Validators.required]), 
    weight: new FormControl(0, [Validators.required]), 
    lastTil: new FormControl(0, [Validators.required]), 
  });


  editFoodProduct() {

    if (this.editFoodProductForm.valid) {
      let updatedData = this.editFoodProductForm.value;
      this.editFoodService.editFoodProduct(this.editedID, updatedData).then(() => {
        this.router.navigateByUrl('/food-prod-list');
      });
    }
  }

  get id(){
    return this.editFoodProductForm.get('id');
  }

  get name(){
    return this.editFoodProductForm.get('name');
  }

  get species(){
    return this.editFoodProductForm.get('species');
  }

  get price(){
    return this.editFoodProductForm.get('price');
  }

  get sale(){
    return this.editFoodProductForm.get('sale');
  }

  get description(){
    return this.editFoodProductForm.get('description');
  }

  get brand(){
    return this.editFoodProductForm.get('brand');
  }

  get rating(){
    return this.editFoodProductForm.get('rating');
  }

  get image(){
    return this.editFoodProductForm.get('image');
  }

  get available(){
    return this.editFoodProductForm.get('available');
  }

  get weight(){
    return this.editFoodProductForm.get('weight');
  }

  get lastTil(){
    return this.editFoodProductForm.get('lastTil');
  }

}
