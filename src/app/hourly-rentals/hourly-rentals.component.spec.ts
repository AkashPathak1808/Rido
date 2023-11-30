import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HourlyRentalsComponent } from './hourly-rentals.component';

describe('HourlyRentalsComponent', () => {
  let component: HourlyRentalsComponent;
  let fixture: ComponentFixture<HourlyRentalsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HourlyRentalsComponent]
    });
    fixture = TestBed.createComponent(HourlyRentalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
