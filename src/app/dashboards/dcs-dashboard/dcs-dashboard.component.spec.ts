import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DcsDashboardComponent } from './dcs-dashboard.component';

describe('DcsDashboardComponent', () => {
  let component: DcsDashboardComponent;
  let fixture: ComponentFixture<DcsDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DcsDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DcsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
