import { TestBed, inject } from '@angular/core/testing';

import { AjoutRdvService } from './ajout-rdv.service';

describe('AjoutRdvService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AjoutRdvService]
    });
  });

  it('should ...', inject([AjoutRdvService], (service: AjoutRdvService) => {
    expect(service).toBeTruthy();
  }));
});
