import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientDeleteComponent } from './patient-delete.component';

describe('MemberDeleteComponent', () => {
  let component: PatientDeleteComponent;
  let fixture: ComponentFixture<PatientDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PatientDeleteComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
