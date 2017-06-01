import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtdRendezVousComponent } from './etd-rendez-vous.component';

describe('EtdRendezVousComponent', () => {
  let component: EtdRendezVousComponent;
  let fixture: ComponentFixture<EtdRendezVousComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtdRendezVousComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtdRendezVousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
