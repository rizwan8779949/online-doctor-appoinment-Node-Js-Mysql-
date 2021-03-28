import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppoinmentUpdateComponent } from './appoinment-update.component';

describe('MemberUpdateComponent', () => {
  let component: AppoinmentUpdateComponent;
  let fixture: ComponentFixture<AppoinmentUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppoinmentUpdateComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppoinmentUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
