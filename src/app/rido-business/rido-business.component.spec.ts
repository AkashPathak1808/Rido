import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RidoBusinessComponent } from './rido-business.component';

describe('RidoBusinessComponent', () => {
  let component: RidoBusinessComponent;
  let fixture: ComponentFixture<RidoBusinessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RidoBusinessComponent]
    });
    fixture = TestBed.createComponent(RidoBusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
