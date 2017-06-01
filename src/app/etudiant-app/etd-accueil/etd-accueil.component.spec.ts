import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtdAccueilComponent } from './etd-accueil.component';

describe('EtdAccueilComponent', () => {
  let component: EtdAccueilComponent;
  let fixture: ComponentFixture<EtdAccueilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtdAccueilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtdAccueilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
