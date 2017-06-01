import { TestBed, inject } from '@angular/core/testing';

import { GestServiceService } from './gest-service.service';

describe('GestServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GestServiceService]
    });
  });

  it('should ...', inject([GestServiceService], (service: GestServiceService) => {
    expect(service).toBeTruthy();
  }));
});
