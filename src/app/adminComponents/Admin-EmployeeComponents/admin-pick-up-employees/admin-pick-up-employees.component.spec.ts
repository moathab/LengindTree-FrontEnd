import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPickUpEmployeesComponent } from './admin-pick-up-employees.component';

describe('AdminPickUpEmployeesComponent', () => {
  let component: AdminPickUpEmployeesComponent;
  let fixture: ComponentFixture<AdminPickUpEmployeesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPickUpEmployeesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPickUpEmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
