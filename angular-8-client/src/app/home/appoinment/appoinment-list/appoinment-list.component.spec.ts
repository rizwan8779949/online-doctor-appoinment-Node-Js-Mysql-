import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppoinmentListComponent } from './appoinment-list.component';

describe('MemberListComponent', () => {
  let component: AppoinmentListComponent;
  let fixture: ComponentFixture<AppoinmentListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppoinmentListComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppoinmentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
