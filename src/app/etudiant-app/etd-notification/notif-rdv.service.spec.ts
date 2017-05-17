import { TestBed, inject } from '@angular/core/testing';

import { NotifRdvService } from './notif-rdv.service';

describe('NotifRdvService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NotifRdvService]
    });
  });

  it('should ...', inject([NotifRdvService], (service: NotifRdvService) => {
    expect(service).toBeTruthy();
  }));
});
