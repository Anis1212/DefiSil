import { TestBed, inject } from '@angular/core/testing';

import { GestEmpTempsService } from './gest-emp-temps.service';

describe('GestEmpTempsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GestEmpTempsService]
    });
  });

  it('should ...', inject([GestEmpTempsService], (service: GestEmpTempsService) => {
    expect(service).toBeTruthy();
  }));
});
