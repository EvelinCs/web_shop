import { Component } from '@angular/core';

@Component({
  selector: 'app-prod-list',
  templateUrl: './prod-list.component.html',
  styleUrls: ['./prod-list.component.scss']
})
export class ProdListComponent {
  prodList = [];

  displayedColumns: string[] = ['image', 'name', 'price', 'quantity', 'subtotal', 'deleteButton'];

  deleteProduct(element){
    //TODO
  }

}
