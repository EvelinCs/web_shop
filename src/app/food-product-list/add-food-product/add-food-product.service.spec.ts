import { TestBed } from '@angular/core/testing';

import { AddFoodProductService } from './add-food-product.service';

describe('AddFoodProductService', () => {
  let service: AddFoodProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddFoodProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
