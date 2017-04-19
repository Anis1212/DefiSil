import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnsHomeComponent } from './ens-home.component';

describe('EnsHomeComponent', () => {
  let component: EnsHomeComponent;
  let fixture: ComponentFixture<EnsHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnsHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
