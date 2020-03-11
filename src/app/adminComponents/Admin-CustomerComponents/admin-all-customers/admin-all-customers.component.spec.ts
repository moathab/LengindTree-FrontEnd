import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAllCustomersComponent } from './admin-all-customers.component';

describe('AdminAllCustomersComponent', () => {
  let component: AdminAllCustomersComponent;
  let fixture: ComponentFixture<AdminAllCustomersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAllCustomersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAllCustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
