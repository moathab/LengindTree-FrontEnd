import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLegalEmployeesComponent } from './admin-legal-employees.component';

describe('AdminLegalEmployeesComponent', () => {
  let component: AdminLegalEmployeesComponent;
  let fixture: ComponentFixture<AdminLegalEmployeesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminLegalEmployeesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminLegalEmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
