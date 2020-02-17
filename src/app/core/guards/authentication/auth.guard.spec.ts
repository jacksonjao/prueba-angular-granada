import {TestBed} from '@angular/core/testing';

import {AuthGuard} from './auth.guard';
import {AuthenticationService} from '../../services/authentication/authentication.service';
import {FakeAthenticationService} from '../../mocks/auth.service.mock.spec';
import {Router} from '@angular/router';
import {FakeRouter} from '../../mocks/router.mock.spec';

describe('AuthGuard', () => {
  let service: AuthenticationService;
  let router: Router;
  let guard: AuthGuard;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthGuard,
        {provide: Router, useClass: FakeRouter},
        {provide: AuthenticationService, useClass: FakeAthenticationService}
      ]
    });

    service = TestBed.get(AuthenticationService);
    router = TestBed.get(Router);
    guard = TestBed.get(AuthGuard);
  });


  it('should create AuthGuard', () => {
    expect(guard).toBeTruthy();
  });

  it('should allow access if the user is authenticated', () => {
    spyOn(service, 'isAuth').and.returnValue(true);
    expect(guard.canLoad(null, null)).toEqual(true);
    expect(guard.canActivate(null, null)).toEqual(true);
    expect(guard.canActivateChild(null, null)).toEqual(true);
  });

  it('should not allow access if the user is authenticated', () => {
    spyOn(service, 'isAuth').and.returnValue(false);
    expect(guard.canLoad(null, null)).toEqual(false);
    expect(guard.canActivate(null, null)).toEqual(false);
    expect(guard.canActivateChild(null, null)).toEqual(false);
  });


  it('should redirect to login if user is not authenticated', () => {
    spyOn(service, 'isAuth').and.returnValue(false);
    spyOn(router, 'navigate');
    guard.checkLogin();
    expect(router.navigate).toHaveBeenCalledWith(['login']);
  });

});
