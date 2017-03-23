import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnsSaisieNotesComponent } from './ens-saisie-notes.component';

describe('EnsSaisieNotesComponent', () => {
  let component: EnsSaisieNotesComponent;
  let fixture: ComponentFixture<EnsSaisieNotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnsSaisieNotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnsSaisieNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
