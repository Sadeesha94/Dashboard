import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DcsBillingComponent } from './dcs-billing.component';

describe('DcsBillingComponent', () => {
  let component: DcsBillingComponent;
  let fixture: ComponentFixture<DcsBillingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DcsBillingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DcsBillingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
