import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriveWithUsComponent } from './drive-with-us.component';

describe('DriveWithUsComponent', () => {
  let component: DriveWithUsComponent;
  let fixture: ComponentFixture<DriveWithUsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DriveWithUsComponent]
    });
    fixture = TestBed.createComponent(DriveWithUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
