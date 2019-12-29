import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RcmBillingComponent } from './rcm-billing.component';

describe('RcmBillingComponent', () => {
  let component: RcmBillingComponent;
  let fixture: ComponentFixture<RcmBillingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RcmBillingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RcmBillingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
