import { TestBed } from '@angular/core/testing';
import { AcmKitTestBed } from '../../testing/acm-kit-test-bed';
import { setupTests } from '../../testing/test-setup';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  setupTests(async () => AcmKitTestBed.setup());

  beforeEach(() => {
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
