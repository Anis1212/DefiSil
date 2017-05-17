import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtudiantAppComponent } from './etudiant-app.component';

describe('EtudiantAppComponent', () => {
  let component: EtudiantAppComponent;
  let fixture: ComponentFixture<EtudiantAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtudiantAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtudiantAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
