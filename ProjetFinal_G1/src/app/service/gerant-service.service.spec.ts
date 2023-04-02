import { TestBed } from '@angular/core/testing';

import { GerantServiceService } from './gerant-service.service';

describe('GerantServiceService', () => {
  let service: GerantServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GerantServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
