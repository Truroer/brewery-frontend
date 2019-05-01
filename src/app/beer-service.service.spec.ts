import { TestBed } from '@angular/core/testing';

import { BeerServiceService } from './beer-service.service';

describe('BeerServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BeerServiceService = TestBed.get(BeerServiceService);
    expect(service).toBeTruthy();
  });
});
