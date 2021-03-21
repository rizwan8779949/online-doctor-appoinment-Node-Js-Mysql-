import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorDeleteComponent } from './doctor-delete.component';

describe('MemberDeleteComponent', () => {
  let component: DoctorDeleteComponent;
  let fixture: ComponentFixture<DoctorDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DoctorDeleteComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
