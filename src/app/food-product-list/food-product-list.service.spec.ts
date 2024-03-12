import { TestBed } from '@angular/core/testing';

import { FoodProductListService } from './food-product-list.service';

describe('FoodProductListService', () => {
  let service: FoodProductListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FoodProductListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
