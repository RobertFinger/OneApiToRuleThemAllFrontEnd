import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LakeCardComponent } from './lake-card.component';

describe('LakeCardComponent', () => {
  let component: LakeCardComponent;
  let fixture: ComponentFixture<LakeCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LakeCardComponent]
    });
    fixture = TestBed.createComponent(LakeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
