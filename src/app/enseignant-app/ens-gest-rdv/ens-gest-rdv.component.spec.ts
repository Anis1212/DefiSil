import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnsGestRdvComponent } from './ens-gest-rdv.component';

describe('EnsGestRdvComponent', () => {
  let component: EnsGestRdvComponent;
  let fixture: ComponentFixture<EnsGestRdvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnsGestRdvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnsGestRdvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
