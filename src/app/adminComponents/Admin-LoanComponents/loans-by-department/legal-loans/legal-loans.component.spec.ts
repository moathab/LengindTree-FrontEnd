import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalLoansComponent } from './legal-loans.component';

describe('LegalLoansComponent', () => {
  let component: LegalLoansComponent;
  let fixture: ComponentFixture<LegalLoansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LegalLoansComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LegalLoansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
