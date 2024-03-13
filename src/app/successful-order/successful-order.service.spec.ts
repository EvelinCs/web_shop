import { TestBed } from '@angular/core/testing';

import { SuccessfulOrderService } from './successful-order.service';

describe('SuccessfulOrderService', () => {
  let service: SuccessfulOrderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SuccessfulOrderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
