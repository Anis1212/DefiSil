import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnsConfirmResComponent } from './ens-confirm-res.component';

describe('EnsConfirmResComponent', () => {
  let component: EnsConfirmResComponent;
  let fixture: ComponentFixture<EnsConfirmResComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnsConfirmResComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnsConfirmResComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
