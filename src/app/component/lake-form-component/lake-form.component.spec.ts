import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LakeFormComponent } from './lake-form.component';

describe('LakeFormcomponent', () => {
  let component: LakeFormComponent;
  let fixture: ComponentFixture<LakeFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LakeFormComponent]
    });
    fixture = TestBed.createComponent(LakeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
