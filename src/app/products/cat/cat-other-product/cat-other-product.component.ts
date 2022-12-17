import { Component } from '@angular/core';
import { Product } from 'src/app/shared/models/products';

import {product} from'../../../shared/models/temp_data';

@Component({
  selector: 'app-cat-other-product',
  templateUrl: './cat-other-product.component.html',
  styleUrls: ['./cat-other-product.component.scss']
})
export class CatOtherProductComponent {

  catProduct?: Product[] = this.catProducts();

  catProducts() {
    let catProductArray: Product[] = [];
    for(let element of product){
      if(element.species === 'cat') {
        catProductArray.push(element);
      }
    }
    return catProductArray;
  }

}
