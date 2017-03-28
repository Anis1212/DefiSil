import { TestBed, inject } from '@angular/core/testing';

import { EnsServiceService } from './ens-service.service';

describe('EnsServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EnsServiceService]
    });
  });

  it('should ...', inject([EnsServiceService], (service: EnsServiceService) => {
    expect(service).toBeTruthy();
  }));
});
