import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerApplyLoanComponent } from './customer-apply-loan.component';

describe('CustomerApplyLoanComponent', () => {
  let component: CustomerApplyLoanComponent;
  let fixture: ComponentFixture<CustomerApplyLoanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerApplyLoanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerApplyLoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
