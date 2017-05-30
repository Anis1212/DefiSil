import { TestBed, inject } from '@angular/core/testing';

import { SuppRdvService } from './supp-rdv.service';

describe('SuppRdvService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SuppRdvService]
    });
  });

  it('should ...', inject([SuppRdvService], (service: SuppRdvService) => {
    expect(service).toBeTruthy();
  }));
});
