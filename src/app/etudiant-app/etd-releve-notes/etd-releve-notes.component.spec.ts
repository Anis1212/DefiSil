import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtdReleveNotesComponent } from './etd-releve-notes.component';

describe('EtdReleveNotesComponent', () => {
  let component: EtdReleveNotesComponent;
  let fixture: ComponentFixture<EtdReleveNotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtdReleveNotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtdReleveNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
