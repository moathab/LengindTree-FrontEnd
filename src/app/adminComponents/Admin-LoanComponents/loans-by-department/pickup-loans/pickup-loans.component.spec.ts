import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PickupLoansComponent } from './pickup-loans.component';

describe('PickupLoansComponent', () => {
  let component: PickupLoansComponent;
  let fixture: ComponentFixture<PickupLoansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PickupLoansComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PickupLoansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
