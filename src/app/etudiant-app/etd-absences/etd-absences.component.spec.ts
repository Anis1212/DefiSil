import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtdAbsencesComponent } from './etd-absences.component';

describe('EtdAbsencesComponent', () => {
  let component: EtdAbsencesComponent;
  let fixture: ComponentFixture<EtdAbsencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtdAbsencesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtdAbsencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
