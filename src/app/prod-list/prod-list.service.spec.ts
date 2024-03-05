import { TestBed } from '@angular/core/testing';

import { ProdListService } from './prod-list.service';

describe('ProdListService', () => {
  let service: ProdListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProdListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
