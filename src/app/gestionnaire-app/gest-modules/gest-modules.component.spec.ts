import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestModulesComponent } from './gest-modules.component';

describe('GestModulesComponent', () => {
  let component: GestModulesComponent;
  let fixture: ComponentFixture<GestModulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestModulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestModulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
