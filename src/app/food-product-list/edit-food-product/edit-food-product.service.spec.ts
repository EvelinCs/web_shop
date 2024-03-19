import { TestBed } from '@angular/core/testing';

import { EditFoodProductService } from './edit-food-product.service';

describe('EditFoodProductService', () => {
  let service: EditFoodProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditFoodProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
