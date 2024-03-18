import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/models/products';
import { ProdListService } from './prod-list.service';

@Component({
  selector: 'app-prod-list',
  templateUrl: './prod-list.component.html',
  styleUrls: ['./prod-list.component.scss']
})
export class ProdListComponent implements OnInit {

  prodList: Product[] = [];

  displayedColumns: string[] = ['id', 'name', 'species', 'price', 'sale', 'brand', 'image', 'available', 'editButton', 'deleteButton'];

  constructor(private prodListService: ProdListService){}

  ngOnInit() {
    this.prodListService.getProducts().subscribe(data => {
      this.prodList = data;
    });
  }

  deleteProduct(elementID: string){
    //TODO
  }

  editProduct(elementID: string) {
    throw new Error('Method not implemented.');
  }

}
