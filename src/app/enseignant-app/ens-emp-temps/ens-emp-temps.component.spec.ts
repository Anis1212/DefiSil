import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnsEmpTempsComponent } from './ens-emp-temps.component';

describe('EnsEmpTempsComponent', () => {
  let component: EnsEmpTempsComponent;
  let fixture: ComponentFixture<EnsEmpTempsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnsEmpTempsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnsEmpTempsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
