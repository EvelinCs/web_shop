import { Component } from '@angular/core';

@Component({
  selector: 'app-food-product-list',
  templateUrl: './food-product-list.component.html',
  styleUrls: ['./food-product-list.component.scss']
})
export class FoodProductListComponent {
  foodProdList = [];

  displayedColumns: string[] = ['image', 'name', 'price', 'quantity', 'subtotal', 'deleteButton'];

  deleteProduct(element){
    //TODO
  }
}
