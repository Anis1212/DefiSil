import { TestBed, inject } from '@angular/core/testing';

import { ModifRdvService } from './modif-rdv.service';

describe('ModifRdvService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ModifRdvService]
    });
  });

  it('should ...', inject([ModifRdvService], (service: ModifRdvService) => {
    expect(service).toBeTruthy();
  }));
});
