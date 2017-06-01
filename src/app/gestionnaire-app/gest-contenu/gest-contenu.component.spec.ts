import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestContenuComponent } from './gest-contenu.component';

describe('GestContenuComponent', () => {
  let component: GestContenuComponent;
  let fixture: ComponentFixture<GestContenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestContenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestContenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
