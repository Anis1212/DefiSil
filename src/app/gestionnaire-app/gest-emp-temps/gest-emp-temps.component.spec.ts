import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestEmpTempsComponent } from './gest-emp-temps.component';

describe('GestEmpTempsComponent', () => {
  let component: GestEmpTempsComponent;
  let fixture: ComponentFixture<GestEmpTempsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestEmpTempsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestEmpTempsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
