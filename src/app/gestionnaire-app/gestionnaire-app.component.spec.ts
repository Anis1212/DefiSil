import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionnaireAppComponent } from './gestionnaire-app.component';

describe('GestionnaireAppComponent', () => {
  let component: GestionnaireAppComponent;
  let fixture: ComponentFixture<GestionnaireAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionnaireAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionnaireAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
