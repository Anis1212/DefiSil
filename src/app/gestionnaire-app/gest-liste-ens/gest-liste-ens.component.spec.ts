import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestListeEnsComponent } from './gest-liste-ens.component';

describe('GestListeEnsComponent', () => {
  let component: GestListeEnsComponent;
  let fixture: ComponentFixture<GestListeEnsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestListeEnsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestListeEnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
