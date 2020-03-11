import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEmployeeHomeComponent } from './admin-employee-home.component';

describe('AdminEmployeeHomeComponent', () => {
  let component: AdminEmployeeHomeComponent;
  let fixture: ComponentFixture<AdminEmployeeHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminEmployeeHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEmployeeHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
