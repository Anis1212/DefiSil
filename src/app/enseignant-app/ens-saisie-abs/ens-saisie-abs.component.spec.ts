import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnsSaisieAbsComponent } from './ens-saisie-abs.component';

describe('EnsSaisieAbsComponent', () => {
  let component: EnsSaisieAbsComponent;
  let fixture: ComponentFixture<EnsSaisieAbsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnsSaisieAbsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnsSaisieAbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
