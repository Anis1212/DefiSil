import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtdPlanExamsComponent } from './etd-plan-exams.component';

describe('EtdPlanExamsComponent', () => {
  let component: EtdPlanExamsComponent;
  let fixture: ComponentFixture<EtdPlanExamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtdPlanExamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtdPlanExamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
