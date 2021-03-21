import { TestBed, async, inject } from '@angular/core/testing';

import { LoginFailedGuard } from './login-failed.guard';

describe('LoginFailedGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginFailedGuard]
    });
  });

  it('should ...', inject([LoginFailedGuard], (guard: LoginFailedGuard) => {
    expect(guard).toBeTruthy();
  }));
});
