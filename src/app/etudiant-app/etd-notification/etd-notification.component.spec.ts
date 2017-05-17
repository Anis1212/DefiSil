import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtdNotificationComponent } from './etd-notification.component';

describe('EtdNotificationComponent', () => {
  let component: EtdNotificationComponent;
  let fixture: ComponentFixture<EtdNotificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtdNotificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtdNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
