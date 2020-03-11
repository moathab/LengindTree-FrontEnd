import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeLoansHomeComponent } from './employee-loans-home.component';

describe('EmployeeLoansHomeComponent', () => {
  let component: EmployeeLoansHomeComponent;
  let fixture: ComponentFixture<EmployeeLoansHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeLoansHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeLoansHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
