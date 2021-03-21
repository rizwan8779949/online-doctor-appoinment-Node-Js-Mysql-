import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorAddComponent } from './doctor-add.component';

describe('MemberAddComponent', () => {
  let component: DoctorAddComponent;
  let fixture: ComponentFixture<DoctorAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DoctorAddComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
