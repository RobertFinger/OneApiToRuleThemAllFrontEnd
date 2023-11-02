import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirFormComponent } from './air-form-component.component';

describe('AirFormComponentComponent', () => {
  let component: AirFormComponent;
  let fixture: ComponentFixture<AirFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AirFormComponent]
    });
    fixture = TestBed.createComponent(AirFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
