import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoansByDepartmentComponent } from './loans-by-department.component';

describe('LoansByDepartmentComponent', () => {
  let component: LoansByDepartmentComponent;
  let fixture: ComponentFixture<LoansByDepartmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoansByDepartmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoansByDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
