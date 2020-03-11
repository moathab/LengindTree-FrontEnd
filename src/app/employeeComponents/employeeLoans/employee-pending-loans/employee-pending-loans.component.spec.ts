import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeePendingLoansComponent } from './employee-pending-loans.component';

describe('EmployeePendingLoansComponent', () => {
  let component: EmployeePendingLoansComponent;
  let fixture: ComponentFixture<EmployeePendingLoansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeePendingLoansComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeePendingLoansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
