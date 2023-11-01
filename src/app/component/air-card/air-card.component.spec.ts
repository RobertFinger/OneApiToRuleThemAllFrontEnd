import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirCardComponent } from './air-card.component';

describe('AirCardComponent', () => {
  let component: AirCardComponent;
  let fixture: ComponentFixture<AirCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AirCardComponent]
    });
    fixture = TestBed.createComponent(AirCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
