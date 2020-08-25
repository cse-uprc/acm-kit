import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { JwtToken } from '../../models/jwt.model';
import { AcmKitTestBed } from '../../testing/acm-kit-test-bed';
import { setupTests } from '../../testing/test-setup';
import { JwtService } from './jwt.service';
import { JwtTestData } from './test-data/jwt-service/jwt-service-test-data';

describe('JwtService', () => {
  let service: JwtService;
  let router: Router;

  setupTests(async () => AcmKitTestBed.setup());

  beforeEach(() => {
    service = TestBed.inject(JwtService);
    router = TestBed.inject(Router);

    spyOn(router, 'navigate');
    localStorage.clear();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get the jwt token from the local cache', () => {
    const testToken = 'justATestToken';
    localStorage.setItem('token', testToken);

    expect(service.getToken()).toEqual(testToken);
  });

  it('should set the token in the local cache', () => {
    const testToken = 'testSetTokenMethod';
    service.setToken(testToken);

    expect(localStorage.getItem('token')).toEqual(testToken);
  });

  it('should get me the expiration date of the token', () => {
    localStorage.setItem('token', JwtTestData.token.value);
    const expirationDate = service.getTokenExpirationDate();

    expect(expirationDate).toBeDefined();
  });

  it('should confirm that the token is expired', () => {
    spyOn(service, 'getTokenExpirationDate').and.returnValue(
      new Date('2020-07-25T00:22:25')
    );

    expect(service.isTokenExpired()).toBeTruthy();
  });

  it('should confirm that the token is NOT expired', () => {
    const now = new Date();
    now.setHours(now.getHours() + 4);

    spyOn(service, 'getTokenExpirationDate').and.returnValue(now);

    expect(service.isTokenExpired()).toBeFalsy();
  });

  it('should be a valid token', () => {
    spyOn(service, 'isTokenExpired').and.returnValue(false);

    localStorage.setItem('token', JwtTestData.token.value);

    expect(service.isValidToken()).toBeTruthy();
  });

  it('should not be a valid token when cached token is null', () => {
    expect(service.isValidToken()).toBeFalsy();
  });

  it('should not be a valid token when it is expired', () => {
    spyOn(service, 'isTokenExpired').and.returnValue(true);

    const isValid = service.isValidToken();

    expect(isValid).toBeFalsy();
    expect(localStorage.getItem('token')).toBeNull();
  });

  it('should get me a decoded token', () => {
    localStorage.setItem('token', JwtTestData.token.value);

    const decodedToken: JwtToken = service.getDecodedToken();
    expect(decodedToken).toBeDefined();

    expect(decodedToken).toEqual(JwtTestData.token.decoded);
  });

  it('should get me the list of values based on the field name', () => {
    localStorage.setItem('token', JwtTestData.token.value);

    expect(service.get('userId')).toEqual(2);
    expect(service.get('firstName')).toEqual('Sam');
    expect(service.get('lastName')).toEqual('Butler');
    expect(service.get('username')).toEqual('sambutler1017');
    expect(service.get('password')).toEqual(
      'bf400a2e1b3a19b974915640aa6fe7b7d576104673cd9b35f2977c87cd5a197a'
    );
    expect(service.get('sub')).toEqual('sambutler1017');
    expect(service.get('exp')).toEqual(1598329345);
    expect(service.get('iat')).toEqual(1598311345);
  });

  it('should have user not logged in', () => {
    localStorage.setItem('token', JwtTestData.token.value);

    expect(service.isUserLoggedIn()).toBeTruthy();
  });

  it('should not have user logged in', () => {
    expect(service.isUserLoggedIn()).toBeFalsy();
  });

  it('should log the user out and remove the token', () => {
    localStorage.setItem('token', JwtTestData.token.value);
    expect(service.isUserLoggedIn()).toBeTruthy();

    service.logout();

    expect(service.isUserLoggedIn()).toBeFalsy();
    expect(localStorage.getItem('token')).toBeNull();
  });
});
