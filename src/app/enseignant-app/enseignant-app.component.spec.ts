import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnseignantAppComponent } from './enseignant-app.component';

describe('EnseignantAppComponent', () => {
  let component: EnseignantAppComponent;
  let fixture: ComponentFixture<EnseignantAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnseignantAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnseignantAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
