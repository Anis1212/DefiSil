import { TestBed, inject } from '@angular/core/testing';

import { EtdRendezVousService } from './etd-rendez-vous.service';

describe('EtdRendezVousService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EtdRendezVousService]
    });
  });

  it('should ...', inject([EtdRendezVousService], (service: EtdRendezVousService) => {
    expect(service).toBeTruthy();
  }));
});
