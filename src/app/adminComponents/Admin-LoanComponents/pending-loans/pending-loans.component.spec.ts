import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingLoansComponent } from './pending-loans.component';

describe('PendingLoansComponent', () => {
  let component: PendingLoansComponent;
  let fixture: ComponentFixture<PendingLoansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendingLoansComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingLoansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
