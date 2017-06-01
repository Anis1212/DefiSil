import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtdProfileComponent } from './etd-profile.component';

describe('EtdProfileComponent', () => {
  let component: EtdProfileComponent;
  let fixture: ComponentFixture<EtdProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtdProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtdProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
