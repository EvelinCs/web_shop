import { Component } from '@angular/core';
import { Product } from 'src/app/shared/models/products';

import {product} from'../../../shared/models/temp_data';

@Component({
  selector: 'app-dog-other-product',
  templateUrl: './dog-other-product.component.html',
  styleUrls: ['./dog-other-product.component.scss']
})
export class DogOtherProductComponent {

  dogProduct?: Product[] = this.dogProducts();

  dogProducts() {
    let dogProductArray: Product[] = [];
    for(let element of product){
      if(element.species === 'dog') {
        dogProductArray.push(element);
      }
    }
    return dogProductArray;
  }

}
