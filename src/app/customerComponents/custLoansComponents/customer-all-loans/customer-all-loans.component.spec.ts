import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerAllLoansComponent } from './customer-all-loans.component';

describe('CustomerAllLoansComponent', () => {
  let component: CustomerAllLoansComponent;
  let fixture: ComponentFixture<CustomerAllLoansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerAllLoansComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerAllLoansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
