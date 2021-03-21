import { TestBed, async, inject } from '@angular/core/testing';

import { LoginSucesssGuard } from './login-sucesss.guard';

describe('LoginSucesssGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginSucesssGuard]
    });
  });

  it('should ...', inject([LoginSucesssGuard], (guard: LoginSucesssGuard) => {
    expect(guard).toBeTruthy();
  }));
});
