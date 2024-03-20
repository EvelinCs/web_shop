import { TestBed } from '@angular/core/testing';

import { RatingListService } from './rating-list.service';

describe('RatingListService', () => {
  let service: RatingListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RatingListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
