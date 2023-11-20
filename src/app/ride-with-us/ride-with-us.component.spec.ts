import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RideWithUsComponent } from './ride-with-us.component';

describe('RideWithUsComponent', () => {
  let component: RideWithUsComponent;
  let fixture: ComponentFixture<RideWithUsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RideWithUsComponent]
    });
    fixture = TestBed.createComponent(RideWithUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
