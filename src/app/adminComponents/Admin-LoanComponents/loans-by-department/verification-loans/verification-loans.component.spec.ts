import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificationLoansComponent } from './verification-loans.component';

describe('VerificationLoansComponent', () => {
  let component: VerificationLoansComponent;
  let fixture: ComponentFixture<VerificationLoansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerificationLoansComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerificationLoansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
