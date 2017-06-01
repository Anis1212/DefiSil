import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutRdvComponent } from './ajout-rdv.component';

describe('AjoutRdvComponent', () => {
  let component: AjoutRdvComponent;
  let fixture: ComponentFixture<AjoutRdvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutRdvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutRdvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
