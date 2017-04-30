import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifEvalComponent } from './modif-eval.component';

describe('ModifEvalComponent', () => {
  let component: ModifEvalComponent;
  let fixture: ComponentFixture<ModifEvalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifEvalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifEvalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
