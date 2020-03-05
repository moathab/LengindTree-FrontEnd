import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustloansComponent } from './custloans.component';

describe('LoansComponent', () => {
  let component: CustloansComponent;
  let fixture: ComponentFixture<CustloansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustloansComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustloansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
