import { TestBed, inject } from '@angular/core/testing';

import { EtdNotesService } from './etd-notes.service';

describe('EtdNotesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EtdNotesService]
    });
  });

  it('should ...', inject([EtdNotesService], (service: EtdNotesService) => {
    expect(service).toBeTruthy();
  }));
});
