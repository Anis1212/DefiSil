import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PickListeComponent } from './pick-liste.component';

describe('PickListeComponent', () => {
  let component: PickListeComponent;
  let fixture: ComponentFixture<PickListeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PickListeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PickListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
