import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireEnsComponent } from './formulaire-ens.component';

describe('FormulaireEnsComponent', () => {
  let component: FormulaireEnsComponent;
  let fixture: ComponentFixture<FormulaireEnsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormulaireEnsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaireEnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
