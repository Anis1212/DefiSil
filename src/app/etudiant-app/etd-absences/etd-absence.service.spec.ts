import { TestBed, inject } from '@angular/core/testing';

import { EtdAbsenceService } from './etd-absence.service';

describe('EtdAbsenceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EtdAbsenceService]
    });
  });

  it('should ...', inject([EtdAbsenceService], (service: EtdAbsenceService) => {
    expect(service).toBeTruthy();
  }));
});
