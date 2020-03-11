import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerLoansHomeComponent } from './customer-loans-home.component';

describe('CustomerLoansHomeComponent', () => {
  let component: CustomerLoansHomeComponent;
  let fixture: ComponentFixture<CustomerLoansHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerLoansHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerLoansHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
