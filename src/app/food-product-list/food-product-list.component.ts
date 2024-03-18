import { Component, OnInit } from '@angular/core';
import { FoodProductListService } from './food-product-list.service';
import { FoodProduct } from '../shared/models/products';

@Component({
  selector: 'app-food-product-list',
  templateUrl: './food-product-list.component.html',
  styleUrls: ['./food-product-list.component.scss']
})
export class FoodProductListComponent implements OnInit {

  foodProdList: FoodProduct[] = [];

  //displayedColumns: string[] = ['id', 'name', 'species', 'price', 'sale', 'description', 'brand', 'rating','image', 'available', 'weight', 'lastTil', 'editButton', 'deleteButton'];
  displayedColumns: string[] = ['id', 'name', 'species', 'price', 'sale', 'brand', 'image', 'available', 'editButton', 'deleteButton'];

  constructor(private foodProductListService: FoodProductListService){}

  ngOnInit() {
    this.foodProductListService.getProducts().subscribe(data => {
      this.foodProdList = data;
    });
  }

  deleteProduct(elementID: string){
    //TODO
  }

  editProduct(elementID: string) {
    throw new Error('Method not implemented.');
    }
}
