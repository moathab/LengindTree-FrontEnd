import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminVerificationEmployeesComponent } from './admin-verification-employees.component';

describe('AdminVerificationEmployeesComponent', () => {
  let component: AdminVerificationEmployeesComponent;
  let fixture: ComponentFixture<AdminVerificationEmployeesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminVerificationEmployeesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminVerificationEmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
