import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelEvalComponent } from './del-eval.component';

describe('DelEvalComponent', () => {
  let component: DelEvalComponent;
  let fixture: ComponentFixture<DelEvalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelEvalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelEvalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
