import { TestBed, inject } from '@angular/core/testing';

import { EtdAccueilService } from './etd-accueil.service';

describe('EtdAccueilService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EtdAccueilService]
    });
  });

  it('should ...', inject([EtdAccueilService], (service: EtdAccueilService) => {
    expect(service).toBeTruthy();
  }));
});
