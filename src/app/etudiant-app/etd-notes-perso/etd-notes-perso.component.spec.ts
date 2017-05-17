import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtdNotesPersoComponent } from './etd-notes-perso.component';

describe('EtdNotesPersoComponent', () => {
  let component: EtdNotesPersoComponent;
  let fixture: ComponentFixture<EtdNotesPersoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtdNotesPersoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtdNotesPersoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
