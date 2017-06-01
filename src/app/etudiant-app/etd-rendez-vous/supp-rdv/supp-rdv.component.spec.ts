import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuppRdvComponent } from './supp-rdv.component';

describe('SuppRdvComponent', () => {
  let component: SuppRdvComponent;
  let fixture: ComponentFixture<SuppRdvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuppRdvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuppRdvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
