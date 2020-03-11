import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRegisterEmployeeComponent } from './admin-register-employee.component';

describe('AdminRegisterEmployeeComponent', () => {
  let component: AdminRegisterEmployeeComponent;
  let fixture: ComponentFixture<AdminRegisterEmployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminRegisterEmployeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRegisterEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
