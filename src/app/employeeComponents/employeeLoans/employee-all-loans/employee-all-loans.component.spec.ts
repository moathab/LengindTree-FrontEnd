import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeAllLoansComponent } from './employee-all-loans.component';

describe('EmployeeAllLoansComponent', () => {
  let component: EmployeeAllLoansComponent;
  let fixture: ComponentFixture<EmployeeAllLoansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeAllLoansComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeAllLoansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
