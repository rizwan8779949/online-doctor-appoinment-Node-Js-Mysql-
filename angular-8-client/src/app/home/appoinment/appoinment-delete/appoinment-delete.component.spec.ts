import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppoinmentDeleteComponent } from './appoinment-delete.component';

describe('MemberDeleteComponent', () => {
  let component: AppoinmentDeleteComponent;
  let fixture: ComponentFixture<AppoinmentDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppoinmentDeleteComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppoinmentDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
