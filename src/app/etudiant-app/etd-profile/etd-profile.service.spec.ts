import { TestBed, inject } from '@angular/core/testing';

import { EtdProfileService } from './etd-profile.service';

describe('EtdProfileService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EtdProfileService]
    });
  });

  it('should ...', inject([EtdProfileService], (service: EtdProfileService) => {
    expect(service).toBeTruthy();
  }));
});
