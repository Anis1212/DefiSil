import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnsResSalleComponent } from './ens-res-salle.component';

describe('EnsResSalleComponent', () => {
  let component: EnsResSalleComponent;
  let fixture: ComponentFixture<EnsResSalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnsResSalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnsResSalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
