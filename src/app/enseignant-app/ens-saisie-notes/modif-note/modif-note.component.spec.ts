import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifNoteComponent } from './modif-note.component';

describe('ModifNoteComponent', () => {
  let component: ModifNoteComponent;
  let fixture: ComponentFixture<ModifNoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifNoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


});
