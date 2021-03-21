import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorListComponent } from './doctor-list.component';

describe('MemberListComponent', () => {
  let component: DoctorListComponent;
  let fixture: ComponentFixture<DoctorListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DoctorListComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
