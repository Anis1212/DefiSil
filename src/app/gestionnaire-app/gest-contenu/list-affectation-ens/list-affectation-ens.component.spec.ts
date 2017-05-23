import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAffectationEnsComponent } from './list-affectation-ens.component';

describe('ListAffectationEnsComponent', () => {
  let component: ListAffectationEnsComponent;
  let fixture: ComponentFixture<ListAffectationEnsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListAffectationEnsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAffectationEnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
