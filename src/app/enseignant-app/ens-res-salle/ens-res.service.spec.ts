import { TestBed, inject } from '@angular/core/testing';

import { EnsResService } from './ens-res.service';

describe('EnsResService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EnsResService]
    });
  });

  it('should ...', inject([EnsResService], (service: EnsResService) => {
    expect(service).toBeTruthy();
  }));
});
