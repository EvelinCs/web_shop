import { TestBed } from '@angular/core/testing';

import { CartItemsQuantityService } from './cart-items-quantity.service';

describe('CartItemsQuantityService', () => {
  let service: CartItemsQuantityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartItemsQuantityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
